import React from 'react';
import FadeIn from '../components/FadeIn';

const shopGallery = [
  { src: '/shop-1.png', alt: 'Shop front exterior' },
  { src: '/shop-2.png', alt: 'Customer service counters' },
  { src: 'https://picsum.photos/800/600?random=31', alt: 'Auto parts display shelves' },
];

const warehouseGallery = [
  { src: '/shop-2.png', alt: 'Warehouse interior overview' },
  { src: 'https://picsum.photos/800/600?random=52', alt: 'Organized inventory racks' },
  { src: 'https://picsum.photos/800/600?random=53', alt: 'Parts storage area' },
];

const Shop: React.FC = () => {
  const whatsappLink = "https://wa.me/60164392448";

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-white py-16 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h1 className="text-4xl font-bold text-brand-navy mb-4">Shop & Warehouse</h1>
            <p className="text-slate-600 max-w-2xl mx-auto">Explore our facilities. We keep a massive inventory to ensure we always have the part you need.</p>
          </FadeIn>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 space-y-20">
        
        {/* 1. Shop Section */}
        <section>
          <FadeIn className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4 border-l-4 border-brand-blue pl-4">Our Shop</h2>
            <p className="text-slate-600 max-w-3xl">
              Located conveniently at Jalan Sekerat, our shop front is ready to serve walk-in customers. Our counters are staffed by knowledgeable experts ready to assist you.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shopGallery.map((photo, idx) => (
              <FadeIn
                key={photo.alt}
                delay={100 + idx * 100}
                className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-md relative group"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-sm font-semibold">{photo.alt}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* 2. Warehouse Section */}
        <section>
          <FadeIn className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4 border-l-4 border-brand-accent pl-4">Our Warehouse</h2>
            <p className="text-slate-600 max-w-3xl">
              Behind the scenes, our organized warehouse stores thousands of parts, from engine components to body kits and batteries, ensuring quick retrieval and availability.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {warehouseGallery.map((photo, idx) => (
              <FadeIn
                key={photo.alt}
                delay={100 + idx * 100}
                className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-md relative group"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-sm font-semibold">{photo.alt}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* 3. Supplier List */}
        <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl font-bold text-brand-navy">Some of Our Suppliers</h2>
            <p className="text-slate-500 mt-2">We partner with reputable suppliers to bring you the best parts.</p>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              "Fong Yong Marketing Sdn. Bhd.",
              "Hup Foong Auto Supplies Sdn. Bhd.",
              "New Hoong Fatt Auto Sdn. Bhd.",
              "Poly Automotive Sdn. Bhd.",
              "PRT Auto Parts Enterprise",
              "Starlai Sdn. Bhd.",
              "Sin Soon Tatt Auto Parts Sdn. Bhd."
            ].map((supplier, idx) => (
              <FadeIn key={idx} delay={idx * 50}>
                <div className="bg-gray-50 px-6 py-4 rounded-lg border border-gray-200 text-sm font-semibold text-slate-700 hover:bg-brand-light hover:text-brand-blue hover:border-brand-blue transition-colors text-center">
                  {supplier}
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* 4. CTA */}
        <section className="text-center py-8">
           <FadeIn>
             <h2 className="text-2xl font-bold text-brand-navy mb-6">Looking for a specific part?</h2>
             <a href={whatsappLink} className="inline-block bg-green-500 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-green-600 hover:shadow-xl hover:-translate-y-1 transition-all">
               WhatsApp Us Now
             </a>
           </FadeIn>
        </section>

      </div>
    </div>
  );
};

export default Shop;
