import React, { useEffect, useState } from 'react';
import FadeIn from '../components/FadeIn';
import { Product } from '../types';
import { ShoppingCart, Tag, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase/config';

const productBadges = [
  { label: 'Genuine', icon: <ShieldCheck size={16} /> },
  { label: 'Warranty', icon: <CheckCircle2 size={16} /> },
  { label: 'Ready Stock', icon: <ShoppingCart size={16} /> },
];

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const productsRef = collection(db, 'products');
    const productsQuery = query(productsRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(
      productsQuery,
      (snapshot) => {
        const mapped = snapshot.docs.map((docSnap) => {
          const data = docSnap.data() as Omit<Product, 'id'>;
          return {
            id: docSnap.id,
            name: data.name ?? 'Unnamed Product',
            description: data.description ?? '',
            price: data.price ?? '',
            image: data.image ?? '',
            shopeeUrl: data.shopeeUrl ?? '#',
            tags: data.tags ?? [],
            inStock: data.inStock ?? true,
            featured: data.featured ?? false,
            createdAt: data.createdAt ?? null,
            updatedAt: data.updatedAt ?? null,
          };
        });
        setProducts(mapped);
        setLoading(false);
      },
      (err) => {
        console.error('Failed to load products', err);
        setError('Unable to load products right now. Please try again later.');
        setLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero */}
      <div className="bg-gradient-to-br from-brand-navy via-blue-900 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-white/5 blur-3xl opacity-30" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn>
            <p className="uppercase tracking-[0.4em] text-xs md:text-sm text-blue-200 mb-4">Product Catalogue</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Curated Auto Parts, Ready to Ship
            </h1>
            <p className="text-blue-100 max-w-3xl">
              Browse featured inventory straight from our Sungai Petani warehouse. Prices are synced with our Shopee store, so you can check out securely online or reserve for in-store pickup.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 space-y-12">
        {/* Highlights */}
        <FadeIn className="grid md:grid-cols-3 gap-4">
          {productBadges.map(({ label, icon }) => (
            <div key={label} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center space-x-3 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-brand-light text-brand-blue flex items-center justify-center">
                {icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-navy">{label}</p>
                <p className="text-xs text-slate-500">Curated and verified by our parts specialists</p>
              </div>
            </div>
          ))}
        </FadeIn>

        {/* Product Grid */}
        <section>
          <FadeIn className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-2">Featured Listings</h2>
              <p className="text-slate-600 max-w-2xl">
                Each product includes verified specs, current pricing, and direct Shopee links. This feed mirrors whatever is stored in the admin panel.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {['All', 'Body Parts', 'Lighting', 'Cooling', 'Battery'].map((filter) => (
                <button
                  key={filter}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border ${
                    filter === 'All' ? 'bg-brand-navy text-white border-brand-navy' : 'border-gray-200 text-slate-600 hover:border-brand-blue hover:text-brand-blue'
                  } transition-colors`}
                  type="button"
                >
                  {filter}
                </button>
              ))}
            </div>
          </FadeIn>

          {loading ? (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, idx) => (
                <div key={idx} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 animate-pulse space-y-4">
                  <div className="rounded-2xl bg-slate-200 h-48" />
                  <div className="h-6 bg-slate-200 rounded" />
                  <div className="h-4 bg-slate-100 rounded w-5/6" />
                  <div className="h-4 bg-slate-100 rounded w-2/3" />
                  <div className="h-10 bg-slate-200 rounded" />
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="border border-red-100 bg-red-50 rounded-3xl p-8 text-center text-red-600">{error}</div>
          ) : products.length === 0 ? (
            <div className="border border-dashed border-brand-blue/40 bg-white rounded-3xl p-10 text-center text-slate-600">
              No products have been published yet. Use the admin dashboard to add your first listing.
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <FadeIn key={product.id} className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {product.tags?.map((tag) => (
                        <span key={tag} className="inline-flex items-center text-xs font-semibold bg-white/90 text-brand-navy px-3 py-1 rounded-full shadow-sm">
                          <Tag className="w-3 h-3 mr-1" /> {tag}
                        </span>
                      ))}
                    </div>
                    {!product.inStock && (
                      <span className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        Restocking
                      </span>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-brand-navy mb-2">{product.name}</h3>
                      <p className="text-slate-600 text-sm mb-4">{product.description}</p>
                    </div>
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-wide text-slate-400">Starting from</p>
                        <p className="text-2xl font-bold text-brand-blue">{product.price}</p>
                      </div>
                      <a
                        href={product.shopeeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-brand-blue text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
                      >
                        <span>Buy on Shopee</span>
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}
        </section>

        {/* CTA */}
        <FadeIn className="bg-gradient-to-r from-brand-navy via-blue-900 to-brand-blue rounded-3xl p-8 md:p-10 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <p className="uppercase tracking-[0.4em] text-xs text-blue-200">Need a part fast?</p>
            <h3 className="text-2xl md:text-3xl font-bold">Chat with our parts specialist</h3>
            <p className="text-white/80 max-w-2xl">
              Send us your vehicle model and the part you need. We’ll confirm stock, pricing, and arrange pickup or shipping within minutes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/60123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-brand-navy font-semibold px-6 py-3 shadow-lg hover:bg-slate-100 transition-colors"
            >
              WhatsApp Parts Desk
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 text-white font-semibold px-6 py-3 hover:bg-white/10 transition-colors"
            >
              Contact our team
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Products;
