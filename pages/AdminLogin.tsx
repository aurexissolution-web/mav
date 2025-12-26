import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, User } from 'firebase/auth';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { Eye, Loader2, LogOut, Pencil, Plus, Trash2 } from 'lucide-react';
import { auth, db } from '../firebase/config';
import { Product } from '../types';

type AuthForm = {
  email: string;
  password: string;
};

type ProductForm = {
  name: string;
  description: string;
  price: string;
  image: string;
  shopeeUrl: string;
  tags: string;
  inStock: boolean;
  featured: boolean;
};

const emptyProductForm: ProductForm = {
  name: '',
  description: '',
  price: '',
  image: '',
  shopeeUrl: '',
  tags: '',
  inStock: true,
  featured: false,
};

const AdminLogin: React.FC = () => {
  const [authForm, setAuthForm] = useState<AuthForm>({ email: '', password: '' });
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [authStatus, setAuthStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [authMessage, setAuthMessage] = useState<string | null>(null);

  const [products, setProducts] = useState<Product[]>([]);
  const [productsLoading, setProductsLoading] = useState(false);
  const [productForm, setProductForm] = useState<ProductForm>(emptyProductForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [productStatus, setProductStatus] = useState<'idle' | 'saving'>('idle');
  const [productMessage, setProductMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const productFormRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setFirebaseUser(user);
      setAuthStatus('idle');
      setAuthMessage(null);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!firebaseUser) {
      setProducts([]);
      return;
    }

    setProductsLoading(true);
    const productsRef = collection(db, 'products');
    const q = query(productsRef, orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const mapped: Product[] = snapshot.docs.map((docSnap) => {
          const data = docSnap.data() as Omit<Product, 'id'>;
          return { id: docSnap.id, ...data } as Product;
        });
        setProducts(mapped);
        setProductsLoading(false);
      },
      () => setProductsLoading(false)
    );

    return unsubscribe;
  }, [firebaseUser]);

  const handleAuthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthForm({ ...authForm, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthStatus('loading');
    setAuthMessage(null);
    try {
      await signInWithEmailAndPassword(auth, authForm.email.trim(), authForm.password);
      setAuthForm({ email: '', password: '' });
    } catch (error) {
      setAuthStatus('error');
      setAuthMessage(error instanceof Error ? error.message : 'Unable to log in. Please try again.');
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setProductForm(emptyProductForm);
    setEditingId(null);
    setProductMessage(null);
    navigate('/');
  };

  const handleProductInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProductForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleProductFlag = (field: 'inStock' | 'featured') => {
    setProductForm((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const resetProductForm = () => {
    setProductForm(emptyProductForm);
    setEditingId(null);
    setProductMessage(null);
  };

  const handleEditProduct = (product: Product) => {
    setEditingId(product.id);
    setProductForm({
      name: product.name ?? '',
      description: product.description ?? '',
      price: product.price ?? '',
      image: product.image ?? '',
      shopeeUrl: product.shopeeUrl ?? '',
      tags: product.tags?.join(', ') ?? '',
      inStock: product.inStock ?? true,
      featured: product.featured ?? false,
    });
    productFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDeleteProduct = async (productId: string) => {
    const confirmed = window.confirm('Delete this product? This cannot be undone.');
    if (!confirmed) return;
    await deleteDoc(doc(db, 'products', productId));
    if (editingId === productId) {
      resetProductForm();
    }
    setProductMessage({ type: 'success', text: 'Product removed.' });
  };

  const handleProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProductStatus('saving');
    setProductMessage(null);

    const payload = {
      name: productForm.name.trim(),
      description: productForm.description.trim(),
      price: productForm.price.trim(),
      image: productForm.image.trim(),
      shopeeUrl: productForm.shopeeUrl.trim(),
      tags: productForm.tags
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean),
      inStock: productForm.inStock,
      featured: productForm.featured,
      updatedAt: serverTimestamp(),
    };

    try {
      if (editingId) {
        await updateDoc(doc(db, 'products', editingId), payload);
        setProductMessage({ type: 'success', text: 'Product updated.' });
      } else {
        await addDoc(collection(db, 'products'), {
          ...payload,
          createdAt: serverTimestamp(),
        });
        setProductMessage({ type: 'success', text: 'Product created.' });
      }
      resetProductForm();
    } catch (error) {
      setProductMessage({
        type: 'error',
        text: error instanceof Error ? error.message : 'Unable to save product.',
      });
    } finally {
      setProductStatus('idle');
    }
  };

  const productFormValid =
    productForm.name && productForm.description && productForm.price && productForm.image && productForm.shopeeUrl;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!cloudName || !uploadPreset) {
      setUploadError('Cloudinary is not configured. Please set the env variables.');
      return;
    }

    const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    setUploadingImage(true);
    setUploadProgress(0);
    setUploadError(null);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', uploadUrl);

    xhr.upload.onprogress = (event) => {
      if (!event.lengthComputable) return;
      const progress = Math.round((event.loaded / event.total) * 100);
      setUploadProgress(progress);
    };

    xhr.onload = () => {
      setUploadingImage(false);
      setUploadProgress(0);
      fileInputRef.current && (fileInputRef.current.value = '');

      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const response = JSON.parse(xhr.responseText) as { secure_url?: string };
          if (response.secure_url) {
            setProductForm((prev) => ({ ...prev, image: response.secure_url ?? prev.image }));
          } else {
            setUploadError('Upload succeeded but no URL was returned.');
          }
        } catch {
          setUploadError('Unexpected upload response. Please try again.');
        }
      } else {
        setUploadError('Upload failed. Please try again.');
      }
    };

    xhr.onerror = () => {
      setUploadingImage(false);
      setUploadProgress(0);
      setUploadError('Network error during upload. Please try again.');
    };

    xhr.send(formData);
  };

  if (!firebaseUser) {
    const isLoading = authStatus === 'loading';
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-navy via-blue-900 to-slate-900 flex items-center justify-center px-4 py-16 text-white">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-8 space-y-6">
          <div className="text-center space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-200">Admin Portal</p>
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-blue-100 text-sm">Log in to manage inventory, content, and more.</p>
          </div>

          {authMessage && (
            <div
              className={`rounded-xl px-4 py-3 text-sm text-center ${
                authStatus === 'error'
                  ? 'bg-red-500/10 border border-red-400/40 text-red-100'
                  : 'bg-green-500/10 border border-green-400/40 text-green-100'
              }`}
            >
              {authMessage}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-blue-100">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={authForm.email}
                onChange={handleAuthChange}
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-2xl bg-white/15 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/60 disabled:opacity-60"
                placeholder="admin@mav.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-semibold text-blue-100">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={authForm.password}
                onChange={handleAuthChange}
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-2xl bg-white/15 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/60 disabled:opacity-60"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-brand-blue hover:bg-blue-600 disabled:hover:bg-brand-blue text-white font-semibold py-3 rounded-2xl shadow-lg shadow-brand-blue/30 transition-all disabled:opacity-70"
            >
              {isLoading ? (
                <span className="inline-flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" /> Signing in…
                </span>
              ) : (
                'Log In'
              )}
            </button>
          </form>

          <div className="flex flex-col items-center gap-3">
            <p className="text-center text-xs text-blue-200">Need help? Contact the system administrator.</p>
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-white transition-colors"
            >
              ← Back to home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-navy via-blue-950 to-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-blue-200">Admin Portal</p>
            <h1 className="text-3xl font-bold">Inventory Control Center</h1>
            <p className="text-blue-100 text-sm mt-1">
              Manage the products that power your public product page. All changes sync with Firestore instantly.
            </p>
            <p className="text-xs text-blue-200 mt-1">Logged in as {firebaseUser?.email}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => {
                resetProductForm();
                productFormRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-2 text-sm font-semibold shadow-lg shadow-brand-blue/30 hover:bg-blue-600 transition-colors"
            >
              <Plus size={18} />
              Add Product
            </button>
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              <Eye size={18} />
              View Site
            </a>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-2 rounded-full border border-red-300/70 px-5 py-2 text-sm font-semibold text-red-100 hover:bg-red-500/10 transition-colors"
            >
              <LogOut size={18} />
              Sign Out
            </button>
          </div>
        </header>

        <section ref={productFormRef} className="bg-white/10 border border-white/10 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-blue-200">
                {editingId ? 'Update Product' : 'Add Product'}
              </p>
              <h2 className="text-2xl font-bold">{editingId ? 'Edit Product' : 'Create New Product'}</h2>
            </div>
            {editingId && (
              <button onClick={resetProductForm} className="text-sm text-blue-200 hover:text-white transition-colors underline-offset-4 underline">
                Cancel editing
              </button>
            )}
          </div>

          {productMessage && (
            <div
              className={`rounded-2xl px-4 py-3 text-sm ${
                productMessage.type === 'error'
                  ? 'bg-red-500/15 border border-red-400/40 text-red-100'
                  : 'bg-green-500/15 border border-green-400/40 text-green-100'
              }`}
            >
              {productMessage.text}
            </div>
          )}

          <form onSubmit={handleProductSubmit} className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm text-blue-100">
                <span className="uppercase tracking-widest text-[0.7rem] text-blue-200">Product Name</span>
                <input
                  name="name"
                  value={productForm.name}
                  onChange={handleProductInput}
                  placeholder="Toyota Vios Radiator Assembly"
                  className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/60"
                  required
                />
              </label>
              <label className="space-y-2 text-sm text-blue-100">
                <span className="uppercase tracking-widest text-[0.7rem] text-blue-200">Price</span>
                <input
                  name="price"
                  value={productForm.price}
                  onChange={handleProductInput}
                  placeholder="RM420.00"
                  className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/60"
                  required
                />
              </label>
            </div>

            <label className="space-y-2 text-sm text-blue-100">
              <span className="uppercase tracking-widest text-[0.7rem] text-blue-200">Description</span>
              <textarea
                name="description"
                value={productForm.description}
                onChange={handleProductInput}
                rows={3}
                placeholder="High-quality replacement part ready for plug-and-play installation."
                className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/60 resize-none"
                required
              />
            </label>

            <label className="space-y-2 text-sm text-blue-100">
              <span className="uppercase tracking-widest text-[0.7rem] text-blue-200">Cloudinary Image URL</span>
              <input
                name="image"
                value={productForm.image}
                onChange={handleProductInput}
                placeholder="https://res.cloudinary.com/..."
                className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/60"
                required
              />
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="product-image-upload"
                  />
                  <label
                    htmlFor="product-image-upload"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-brand-blue hover:text-white cursor-pointer"
                  >
                    Upload from device
                  </label>
                  {uploadingImage && (
                    <span className="text-xs text-blue-100">{uploadProgress}%</span>
                  )}
                </div>
                {uploadError && <p className="text-xs text-red-300">{uploadError}</p>}
                {productForm.image && (
                  <p className="text-xs text-blue-200 truncate">Current URL: {productForm.image}</p>
                )}
              </div>
            </label>

            <label className="space-y-2 text-sm text-blue-100">
              <span className="uppercase tracking-widest text-[0.7rem] text-blue-200">Shopee Link</span>
              <input
                name="shopeeUrl"
                value={productForm.shopeeUrl}
                onChange={handleProductInput}
                placeholder="https://shopee.com.my/..."
                className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/60"
                required
              />
            </label>

            <label className="space-y-2 text-sm text-blue-100">
              <span className="uppercase tracking-widest text-[0.7rem] text-blue-200">Tags (comma separated)</span>
              <input
                name="tags"
                value={productForm.tags}
                onChange={handleProductInput}
                placeholder="Cooling, OEM, Toyota"
                className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/60"
              />
            </label>

            <div className="flex flex-wrap gap-6 text-sm text-blue-100">
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={productForm.inStock}
                  onChange={() => toggleProductFlag('inStock')}
                  className="h-4 w-4 rounded border-white/50 bg-transparent"
                />
                In stock
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={productForm.featured}
                  onChange={() => toggleProductFlag('featured')}
                  className="h-4 w-4 rounded border-white/50 bg-transparent"
                />
                Featured
              </label>
            </div>

            <div className="flex flex-wrap gap-3 justify-end">
              <button
                type="button"
                onClick={resetProductForm}
                className="rounded-full border border-white/25 px-6 py-2 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Reset
              </button>
              <button
                type="submit"
                disabled={productStatus === 'saving' || !productFormValid}
                className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-2 text-sm font-semibold shadow-lg shadow-brand-blue/30 transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {productStatus === 'saving' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Saving…
                  </>
                ) : editingId ? (
                  'Update Product'
                ) : (
                  'Add Product'
                )}
              </button>
            </div>
          </form>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-blue-200">Live Products</p>
              <h2 className="text-2xl font-bold">
                {productsLoading ? 'Loading products…' : `${products.length} Product${products.length === 1 ? '' : 's'}`}
              </h2>
            </div>
          </div>

          {products.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-white/20 bg-white/5 p-10 text-center text-blue-100">
              {productsLoading ? 'Fetching latest data…' : 'No products yet. Use the form above to add the first item.'}
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {products.map((product) => (
                <div key={product.id} className="rounded-3xl border border-white/10 bg-white/5 shadow-lg overflow-hidden flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" loading="lazy" />
                    {product.featured && (
                      <span className="absolute top-4 left-4 rounded-full bg-yellow-400 text-black text-xs font-bold px-3 py-1">
                        Featured
                      </span>
                    )}
                    {!product.inStock && (
                      <span className="absolute top-4 right-4 rounded-full bg-red-500 text-white text-xs font-bold px-3 py-1">
                        Restocking
                      </span>
                    )}
                  </div>
                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    <div>
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      <p className="text-blue-100 text-sm">{product.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-blue-200">Price</p>
                        <p className="text-2xl font-bold text-brand-blue">{product.price}</p>
                      </div>
                      <a
                        href={product.shopeeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-brand-blue hover:text-white transition-colors underline underline-offset-4"
                      >
                        Shopee Link
                      </a>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.tags?.map((tag) => (
                        <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-blue-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 flex-wrap">
                      <button
                        onClick={() => handleEditProduct(product)}
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/10 transition-colors"
                      >
                        <Pencil size={16} />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="inline-flex items-center gap-2 rounded-full border border-red-200/40 px-4 py-2 text-sm font-semibold text-red-200 hover:bg-red-500/10 transition-colors"
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default AdminLogin;
