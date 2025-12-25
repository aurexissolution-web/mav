import React, { useState } from 'react';
import { 
  MessageCircle, ShoppingBag, ShieldCheck, Wrench, Car, MapPin, 
  CheckCircle2, Battery, Star, ArrowRight, Package, Zap, Phone, 
  Layers, ClipboardCheck, Truck, Search, FileText, Plus, Minus,
  HeartHandshake
} from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { Link } from 'react-router-dom';

// FAQ Item Component
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        className="flex items-center justify-between w-full py-4 text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`font-semibold text-lg transition-colors ${isOpen ? 'text-brand-blue' : 'text-brand-navy group-hover:text-brand-blue'}`}>
          {question}
        </span>
        <div className={`p-1 rounded-full transition-colors ${isOpen ? 'bg-brand-blue text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-brand-blue'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-600 leading-relaxed text-sm md:text-base pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const shopeeLink = "https://shopee.com.my/mavsss33?entryPoint=ShopBySearch&searchKeyword=veerappan";
  const lazadaLink = "https://s.lazada.com.my/s.GDdC9?dsource=share&laz_share_info=2355118494_103_1600_0_2355120494_null&laz_token=354ad6ed4ab37e4190b0e2fa2b4d9204";
  const whatsappLink = "https://wa.me/60124107554";

  return (
    <>
      {/* HERO SECTION (Kept as is) */}
      <section className="relative bg-gradient-to-br from-brand-navy to-blue-900 text-white py-20 lg:py-32 overflow-hidden pb-32">
        {/* Abstract shapes for background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/10 -skew-x-12 transform translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5 space-y-6">
              <FadeIn>
                <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-semibold mb-2">
                  Established 1983
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Auto Spare Parts & Service Trusted in <span className="text-brand-accent">Sungai Petani</span>
                </h1>
                <p className="text-lg text-blue-100 max-w-2xl leading-relaxed">
                  Supplying genuine, Taiwan, and used parts, windscreen services, batteries, and more for Malaysian vehicles. Quality service you can rely on.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a 
                    href={whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center space-x-2 bg-brand-blue hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:shadow-blue-600/30"
                  >
                    <span>Get Parts Now</span>
                  </a>
                  <a 
                    href={shopeeLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-orange-500/30"
                  >
                    <ShoppingBag size={20} />
                    <span>View Shopee Store</span>
                  </a>
                </div>
                <div className="pt-2">
                  <a href={lazadaLink} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-200 hover:text-white underline decoration-blue-400 hover:decoration-white transition-all">
                    Also available on our Lazada Store &rarr;
                  </a>
                </div>
              </FadeIn>
            </div>
            
            {/* Hero Illustration */}
            <div className="lg:w-2/5 w-full">
              <FadeIn delay={200}>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-lg flex items-center space-x-4">
                      <div className="bg-blue-600 p-3 rounded-full">
                        <Car className="text-white w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Genuine Parts</h4>
                        <p className="text-xs text-blue-200">Toyota, Honda, Proton, Perodua...</p>
                      </div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg flex items-center space-x-4">
                      <div className="bg-blue-600 p-3 rounded-full">
                        <ShieldCheck className="text-white w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Windscreen Specialist</h4>
                        <p className="text-xs text-blue-200">Authorized Insurance Panel</p>
                      </div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg flex items-center space-x-4">
                      <div className="bg-blue-600 p-3 rounded-full">
                        <Wrench className="text-white w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Expert Service</h4>
                        <p className="text-xs text-blue-200">Experienced Technicians</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Trust Stats Bar */}
      <div className="relative z-20 -mt-16 container mx-auto px-4 md:px-6">
         <FadeIn delay={300}>
            <div className="bg-brand-navy text-white rounded-2xl shadow-xl p-6 lg:p-8 border-t border-white/10">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0">
                  
                  {/* Item 1 */}
                  <div className="flex items-start space-x-4 md:border-r border-white/10 md:px-4">
                     <div className="p-3 bg-blue-600/20 rounded-full text-brand-blue ring-1 ring-blue-500/30 flex-shrink-0">
                        <CheckCircle2 size={24} className="text-blue-400" />
                     </div>
                     <div>
                        <p className="text-lg font-bold text-white leading-tight">Operating since 1983</p>
                        <p className="text-sm text-blue-200 mt-1 leading-snug">40+ years of trusted service in Sungai Petani, Kedah.</p>
                     </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-start space-x-4 md:border-r border-white/10 md:px-4">
                     <div className="p-3 bg-blue-600/20 rounded-full text-brand-blue ring-1 ring-blue-500/30 flex-shrink-0">
                        <Package size={24} className="text-blue-400" />
                     </div>
                     <div>
                        <p className="text-lg font-bold text-white leading-tight">Massive Parts Inventory</p>
                        <p className="text-sm text-blue-200 mt-1 leading-snug">Wide variety of parts for many brands and models.</p>
                     </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-start space-x-4 md:border-r border-white/10 md:px-4">
                     <div className="p-3 bg-blue-600/20 rounded-full text-brand-blue ring-1 ring-blue-500/30 flex-shrink-0">
                        <Zap size={24} className="text-blue-400" />
                     </div>
                     <div>
                        <p className="text-lg font-bold text-white leading-tight">Fast Turnaround</p>
                        <p className="text-sm text-blue-200 mt-1 leading-snug">Quick sourcing and service to get you back on the road.</p>
                     </div>
                  </div>

                  {/* Item 4 */}
                  <div className="flex items-start space-x-4 md:px-4">
                     <div className="p-3 bg-blue-600/20 rounded-full text-brand-blue ring-1 ring-blue-500/30 flex-shrink-0">
                        <MapPin size={24} className="text-blue-400" />
                     </div>
                     <div>
                        <p className="text-lg font-bold text-white leading-tight">Serving all Malaysia</p>
                        <p className="text-sm text-blue-200 mt-1 leading-snug">Kedah HQ with nationwide delivery.</p>
                     </div>
                  </div>

               </div>
            </div>
         </FadeIn>
      </div>

      {/* SECTION 2: Our Services & Products (Expanded) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Our Services & Products</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  We supply a complete range of parts and services to keep Malaysian vehicles running safely and reliably.
                </p>
                <p className="text-base text-slate-500">
                  We stock a carefully selected range of parts and services to keep Malaysian vehicles safe, efficient, and reliable.
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
               {/* 1. Genuine Parts */}
               <FadeIn delay={100} className="h-full">
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden h-full flex flex-col">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-brand-light rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform"></div>
                     
                     <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors mb-6 flex-shrink-0">
                        <ShieldCheck size={28} />
                     </div>
                     
                     <div className="inline-block px-3 py-1 bg-blue-50 text-brand-blue text-xs font-bold rounded-full mb-3 uppercase tracking-wide w-fit">Most Recommended</div>
                     <h3 className="text-xl font-bold text-brand-navy mb-3">Genuine Parts</h3>
                     <p className="text-slate-600 mb-6 flex-grow">
                        Original manufacturer parts for maximum reliability and performance. We stock parts for Toyota, Honda, Proton, and more. Ensure peak performance and maintain your vehicle's resale value with authentic components.
                     </p>
                     <Link to="/services" className="text-brand-blue font-bold flex items-center group-hover:text-blue-700 mt-auto">
                        View Catalog <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                     </Link>
                  </div>
               </FadeIn>

               {/* 2. Windscreen Services */}
               <FadeIn delay={200} className="h-full">
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden h-full flex flex-col">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-brand-light rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform"></div>
                     
                     <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors mb-6 flex-shrink-0">
                        <Car size={28} />
                     </div>
                     
                     <div className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full mb-3 uppercase tracking-wide w-fit">Insurance Panel</div>
                     <h3 className="text-xl font-bold text-brand-navy mb-3">Windscreen Services</h3>
                     <p className="text-slate-600 mb-6 flex-grow">
                        Expert replacement and repair services. As an authorized insurance panel, we handle your claims smoothly. We use high-quality glass and sealants to guarantee safety and leak-free installation.
                     </p>
                     <Link to="/services" className="text-brand-blue font-bold flex items-center group-hover:text-blue-700 mt-auto">
                        Learn More <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                     </Link>
                  </div>
               </FadeIn>

                {/* 3. Taiwan Parts */}
                <FadeIn delay={300} className="h-full">
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col">
                     <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-brand-navy group-hover:bg-brand-blue group-hover:text-white transition-colors mb-6 flex-shrink-0">
                        <Star size={28} />
                     </div>
                     <h3 className="text-xl font-bold text-brand-navy mb-3">Taiwan Parts</h3>
                     <p className="text-slate-600 mb-6 flex-grow">
                        High-quality aftermarket parts imported from Taiwan, offering an excellent balance of performance and value. A smart, cost-effective alternative that doesn't compromise on durability.
                     </p>
                     <Link to="/services" className="text-brand-blue font-semibold text-sm flex items-center group-hover:text-blue-700 mt-auto">
                        See Details <ArrowRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                     </Link>
                  </div>
               </FadeIn>

               {/* 4. Used Parts */}
               <FadeIn delay={400} className="h-full">
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col">
                     <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-brand-navy group-hover:bg-brand-blue group-hover:text-white transition-colors mb-6 flex-shrink-0">
                        <Wrench size={28} />
                     </div>
                     <h3 className="text-xl font-bold text-brand-navy mb-3">Used Parts</h3>
                     <p className="text-slate-600 mb-6 flex-grow">
                        Carefully tested used parts (half-cut) to keep repairs affordable without compromising too much on quality. Inspected by our experts to ensure they are functional and ready for a second life.
                     </p>
                     <Link to="/services" className="text-brand-blue font-semibold text-sm flex items-center group-hover:text-blue-700 mt-auto">
                        See Details <ArrowRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                     </Link>
                  </div>
               </FadeIn>

               {/* 5. New Parts */}
               <FadeIn delay={500} className="h-full">
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col">
                     <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-brand-navy group-hover:bg-brand-blue group-hover:text-white transition-colors mb-6 flex-shrink-0">
                        <ShoppingBag size={28} />
                     </div>
                     <h3 className="text-xl font-bold text-brand-navy mb-3">New Parts</h3>
                     <p className="text-slate-600 mb-6 flex-grow">
                        Brand-new replacements for engine and body components, ensuring your vehicle looks and runs like new. Sourced from reputable manufacturers to meet industry standards.
                     </p>
                     <Link to="/services" className="text-brand-blue font-semibold text-sm flex items-center group-hover:text-blue-700 mt-auto">
                        See Details <ArrowRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                     </Link>
                  </div>
               </FadeIn>

               {/* 6. Battery */}
               <FadeIn delay={600} className="h-full">
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col">
                     <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-brand-navy group-hover:bg-brand-blue group-hover:text-white transition-colors mb-6 flex-shrink-0">
                        <Battery size={28} />
                     </div>
                     <h3 className="text-xl font-bold text-brand-navy mb-3">Battery</h3>
                     <p className="text-slate-600 mb-6 flex-grow">
                        Long-lasting batteries for cars, MPVs and lorries, with installation services available. We check your alternator and charging system to ensure your new battery lasts.
                     </p>
                     <Link to="/services" className="text-brand-blue font-semibold text-sm flex items-center group-hover:text-blue-700 mt-auto">
                        See Details <ArrowRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                     </Link>
                  </div>
               </FadeIn>
            </div>
        </div>
      </section>

      {/* SECTION 3: Brands We Commonly Support (Upgrade) */}
      <section className="py-12 bg-brand-light border-y border-blue-100">
        <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-brand-navy mb-2">Brands We Commonly Support</h2>
                    <p className="text-slate-600 text-sm md:text-base mb-1">We source parts for many popular Japanese and local makes.</p>
                    <p className="text-slate-500 text-xs md:text-sm">Looking for something specific? Our team can help you source rare or hard‑to‑find parts.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                    {['Toyota', 'Honda', 'Proton', 'Perodua', 'Nissan'].map((brand, idx) => (
                        <div key={idx} className="bg-white px-6 py-2.5 rounded-full shadow-sm border border-blue-100 font-bold text-slate-700 hover:-translate-y-1 hover:shadow-md hover:border-brand-blue/30 hover:text-brand-blue transition-all cursor-default select-none flex items-center">
                            {brand}
                        </div>
                    ))}
                    <div className="bg-white/50 px-6 py-2.5 rounded-full shadow-sm border border-blue-50 font-medium text-slate-500 cursor-default flex items-center">
                        And more...
                    </div>
                </div>
            </FadeIn>
        </div>
      </section>

      {/* SECTION 4: Premium Highlights Strip (New) */}
      <div className="bg-white border-b border-gray-100 py-10">
        <div className="container mx-auto px-4 md:px-6">
           <FadeIn>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                <div className="flex items-start space-x-3">
                  <Layers className="text-brand-blue mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm">OEM, Taiwan & Used Options</h4>
                    <p className="text-xs text-slate-500 mt-1">Choose the right balance of budget and quality.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <ClipboardCheck className="text-brand-blue mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm">Carefully Checked Stock</h4>
                    <p className="text-xs text-slate-500 mt-1">Parts inspected before they reach your vehicle.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <ShieldCheck className="text-brand-blue mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm">Insurance Panel Experts</h4>
                    <p className="text-xs text-slate-500 mt-1">Authorized to handle windscreen claims smoothly.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Truck className="text-brand-blue mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm">Delivery & Pickup Options</h4>
                    <p className="text-xs text-slate-500 mt-1">Collect in Sungai Petani or arrange delivery.</p>
                  </div>
                </div>

             </div>
           </FadeIn>
        </div>
      </div>

      {/* SECTION 5: Why Choose M.A. Veerappan Auto? (Richer Text) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
           <FadeIn>
              <div className="bg-brand-navy rounded-3xl p-8 md:p-16 text-white text-center relative overflow-hidden">
                 {/* Background Elements */}
                 <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute left-0 bottom-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
                 </div>

                 <h2 className="text-3xl md:text-4xl font-bold mb-16 relative z-10">Why Choose M.A. Veerappan Auto?</h2>

                 <div className="relative z-10">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-blue-700/50"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                       {/* Step 1 */}
                       <div className="relative flex flex-col items-center">
                          <div className="w-16 h-16 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl font-bold border-4 border-brand-navy shadow-lg z-10 mb-6">1</div>
                          <h3 className="text-xl font-bold text-white mb-3">Reliable Reputation</h3>
                          <p className="text-blue-200 text-sm leading-relaxed max-w-xs">
                             Serving Sungai Petani since 1983. As a second-generation family business, we have built lasting relationships with long-term customers across Kedah.
                          </p>
                       </div>

                       {/* Step 2 */}
                       <div className="relative flex flex-col items-center">
                          <div className="w-16 h-16 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl font-bold border-4 border-brand-navy shadow-lg z-10 mb-6">2</div>
                          <h3 className="text-xl font-bold text-white mb-3">Wide Variety</h3>
                          <p className="text-blue-200 text-sm leading-relaxed max-w-xs">
                             Massive stock for many brands ensures you get what you need. From small clips to full body panels, engine components, and electrical parts, we have it all.
                          </p>
                       </div>

                       {/* Step 3 */}
                       <div className="relative flex flex-col items-center">
                          <div className="w-16 h-16 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl font-bold border-4 border-brand-navy shadow-lg z-10 mb-6">3</div>
                          <h3 className="text-xl font-bold text-white mb-3">Professional Service</h3>
                          <p className="text-blue-200 text-sm leading-relaxed max-w-xs">
                             Fast, efficient service by skilled technicians who know your car inside out. We provide clear explanations and honest advice with no surprise charges.
                          </p>
                       </div>
                    </div>
                 </div>
              </div>
           </FadeIn>
        </div>
      </section>

      {/* SECTION 6: How We Take Care of Your Vehicle (Process) */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4 md:px-6">
           <FadeIn>
             <div className="text-center max-w-3xl mx-auto mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">How We Take Care of Your Vehicle</h2>
               <p className="text-lg text-slate-600 leading-relaxed">
                 We follow a clear process so you always get the right parts, fair advice, and fast support.
               </p>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {/* Step 1 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 relative group h-full">
                  <div className="absolute top-6 right-6 text-6xl font-bold text-gray-50 opacity-50 group-hover:text-blue-50 transition-colors pointer-events-none">1</div>
                  <div className="w-14 h-14 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6 relative z-10 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <ClipboardCheck size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3 relative z-10">Share Your Vehicle Details</h3>
                  <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                    Tell us your car model, year, and what you’re facing – from worn brakes to a cracked windscreen or hard‑to‑find clips.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 relative group h-full">
                  <div className="absolute top-6 right-6 text-6xl font-bold text-gray-50 opacity-50 group-hover:text-blue-50 transition-colors pointer-events-none">2</div>
                  <div className="w-14 h-14 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6 relative z-10 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <Search size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3 relative z-10">We Match The Right Parts</h3>
                  <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                    Our team checks stock across genuine, Taiwan, and used options, confirming exact fitment so you don’t waste time or money.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 relative group h-full">
                  <div className="absolute top-6 right-6 text-6xl font-bold text-gray-50 opacity-50 group-hover:text-blue-50 transition-colors pointer-events-none">3</div>
                  <div className="w-14 h-14 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6 relative z-10 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <FileText size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3 relative z-10">Clear Recommendation</h3>
                  <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                    We explain the choices, benefits, and pricing in simple terms, then help you decide what suits your budget and vehicle best.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 relative group h-full">
                  <div className="absolute top-6 right-6 text-6xl font-bold text-gray-50 opacity-50 group-hover:text-blue-50 transition-colors pointer-events-none">4</div>
                  <div className="w-14 h-14 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6 relative z-10 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <Truck size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3 relative z-10">Fast Collection or Delivery</h3>
                  <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                    Pick up directly from our Sungai Petani shop, or arrange delivery anywhere in Malaysia with careful packing for safe arrival.
                  </p>
                </div>
             </div>
           </FadeIn>
        </div>
        
        {/* Subtle Separator Line at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </section>

      {/* SECTION 6.5: The Veerappan Quality Standard (Replaced Warehouse Gallery) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
           <FadeIn>
              <div className="text-center mb-16">
                 <div className="inline-flex items-center justify-center p-3 bg-brand-light rounded-full text-brand-blue mb-4">
                    <HeartHandshake size={24} />
                 </div>
                 <h2 className="text-3xl font-bold text-brand-navy mb-4">The Veerappan Quality Standard</h2>
                 <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    We don't just sell parts; we provide peace of mind. Here is why customers trust us with their vehicles year after year.
                 </p>
              </div>
  
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {/* Feature 1 */}
                 <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                       <CheckCircle2 size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy mb-3">Authenticity Verified</h3>
                    <p className="text-slate-600 leading-relaxed">
                       We strictly source genuine parts from authorized distributors. When you buy "Original", you get 100% Original—no fakes, no swaps.
                    </p>
                 </div>
  
                 {/* Feature 2 */}
                 <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-100 text-brand-blue rounded-xl flex items-center justify-center mb-6">
                       <Search size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy mb-3">Rigorous Testing</h3>
                    <p className="text-slate-600 leading-relaxed">
                       Every used (half-cut) part is physically inspected and tested by our mechanics. We filter out the junk so you don't have to.
                    </p>
                 </div>
  
                 {/* Feature 3 */}
                 <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                       <HeartHandshake size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy mb-3">Honest Advisory</h3>
                    <p className="text-slate-600 leading-relaxed">
                       We advise based on your car's age and your budget. If a Taiwan part works just as well as Genuine for half the price, we'll tell you.
                    </p>
                 </div>
              </div>
           </FadeIn>
        </div>
      </section>

      {/* SECTION 6.6: FAQ Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <FadeIn>
                <h2 className="text-3xl font-bold text-brand-navy mb-4">Frequently Asked Questions</h2>
                <p className="text-slate-600 mb-6">
                  Have questions about our parts or services? Find quick answers here or contact us directly.
                </p>
                <a href={whatsappLink} className="inline-flex items-center px-6 py-3 bg-white text-brand-navy border border-gray-200 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm">
                  <MessageCircle size={18} className="mr-2 text-green-500" />
                  Ask on WhatsApp
                </a>
              </FadeIn>
            </div>
            <div className="md:col-span-8">
              <FadeIn delay={200} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                <FAQItem 
                  question="Do you deliver outside of Sungai Petani?" 
                  answer="Yes, we arrange delivery for customers across Malaysia. We ensure all parts are carefully packed to arrive safely at your location." 
                />
                <FAQItem 
                  question="Do you provide installation services?" 
                  answer="Yes, we have skilled technicians at our Sungai Petani workshop who can professionally install batteries, windscreens, and various other parts." 
                />
                 <FAQItem 
                  question="How do I check if you have a specific part?" 
                  answer="The fastest way is to WhatsApp us with your car model, year, and a photo of the part you need. Our team will check our inventory immediately." 
                />
                <FAQItem 
                  question="Are your used parts tested?" 
                  answer="Absolutely. All our used (half-cut) parts undergo a thorough inspection by our experts to ensure they are functional and reliable before we sell them." 
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Customer Support & Contact CTA (Updated) */}
      <section className="py-20 bg-gray-900 text-white border-t-8 border-brand-blue">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need parts or windscreen service today?</h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
               Talk directly with our team for stock checks, quotes, or urgent support.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <a href="tel:044231451" className="flex items-center justify-center space-x-2 px-8 py-4 bg-white text-brand-navy rounded-full font-bold hover:bg-gray-100 transition-colors">
                <Phone size={20} />
                <span>Call 04-4231451</span>
              </a>
              <a href={whatsappLink} className="flex items-center justify-center space-x-2 px-8 py-4 bg-green-500 text-white rounded-full font-bold hover:bg-green-600 transition-colors shadow-lg shadow-green-900/20">
                <MessageCircle size={20} />
                <span>WhatsApp +60 12-410 7554</span>
              </a>
            </div>
            
            <div className="space-y-2">
              <p className="text-blue-200 text-sm font-medium">
                 Honest recommendations, clear pricing, and support even after installation.
              </p>
              <p className="text-xs text-blue-100 tracking-[0.3em] font-semibold">
                 EVERYDAY 9AM–6PM · SUNDAY CLOSED
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Home;