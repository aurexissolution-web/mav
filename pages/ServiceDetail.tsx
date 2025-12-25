import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { 
  CheckCircle2, ArrowRight, MessageCircle, Phone, 
  ShieldCheck, Wrench, Settings, Battery, PenTool,
  ChevronRight, Plus, Minus, Search, Truck, ClipboardCheck
} from 'lucide-react';

// --- Data Types ---
interface ServiceData {
  title: string;
  summary: string;
  icon: React.ReactNode;
  benefits: { title: string; desc: string }[];
  offerings: {
    text: string;
    items: string[];
  };
  process: { title: string; desc: string; icon: React.ReactNode }[];
  faqs: { q: string; a: string }[];
}

// --- Data Content ---
const servicesData: Record<string, ServiceData> = {
  'taiwan-parts': {
    title: "Taiwan Parts",
    summary: "High-quality aftermarket parts that offer the perfect balance of performance, durability, and cost-effectiveness.",
    icon: <Settings className="w-10 h-10" />,
    benefits: [
      { title: "Cost Effective", desc: "Save significantly compared to genuine parts without sacrificing essential quality." },
      { title: "High Availability", desc: "Wide range of stock available for immediate replacement on popular models." },
      { title: "Reliable Quality", desc: "Sourced from reputable Taiwanese manufacturers (like DEPO, TYC) known for precision." }
    ],
    offerings: {
      text: "We specialize in imported aftermarket parts that fit perfectly and last long. Our selection includes:",
      items: [
        "Body Parts (Bumpers, Fenders, Hoods)",
        "Lighting Systems (Headlamps, Tail lamps)",
        "Cooling Systems (Radiators, Fans)",
        "Suspension Components"
      ]
    },
    process: [
      { title: "Identify Model", desc: "Tell us your car model and year.", icon: <Search size={24} /> },
      { title: "Match Part", desc: "We find the best Taiwan equivalent.", icon: <Settings size={24} /> },
      { title: "Collection", desc: "Pick up instore or get it delivered.", icon: <Truck size={24} /> }
    ],
    faqs: [
      { q: "Are Taiwan parts as good as genuine?", a: "They are the best alternative. While genuine is the gold standard, Taiwan parts offer 80-90% of the quality for 50% of the price." },
      { q: "Do these parts fit perfectly?", a: "Yes, we only stock brands known for good fitment. We avoid low-grade generic parts that require modification." },
      { q: "Is there a warranty?", a: "Yes, most of our new Taiwan parts come with a manufacturer defect warranty." }
    ]
  },
  'genuine-parts': {
    title: "Genuine Parts",
    summary: "Authorized original manufacturer parts for Toyota, Honda, Proton, and Perodua. Zero compromise on quality.",
    icon: <ShieldCheck className="w-10 h-10" />,
    benefits: [
      { title: "Perfect Fitment", desc: "Guaranteed to fit your vehicle specifications exactly as the factory intended." },
      { title: "Resale Value", desc: "Maintain your vehicle's market value by using only original components." },
      { title: "Longest Lifespan", desc: "Designed to last the longest and withstand the harshest driving conditions." }
    ],
    offerings: {
      text: "We are stockists for major automotive brands, ensuring you get authentic parts in original packaging.",
      items: [
        "Engine Components (Pistons, Rings, Gaskets)",
        "Electronic Sensors & ECUs",
        "Original Body Kits & trims",
        "Service Items (Oil Filters, Air Filters, Belts)"
      ]
    },
    process: [
      { title: "Verify Chassis", desc: "We check your Chassis ID to ensure 100% accuracy.", icon: <ClipboardCheck size={24} /> },
      { title: "Confirm Stock", desc: "We check our inventory or order from HQ.", icon: <Search size={24} /> },
      { title: "Secure Handover", desc: "Receive your part in sealed official packaging.", icon: <CheckCircle2 size={24} /> }
    ],
    faqs: [
      { q: "How do I know it is genuine?", a: "We source directly from authorized distributors. Items come in official boxes with holograms/security seals where applicable." },
      { q: "Why is the price higher?", a: "You are paying for factory-grade materials, stricter quality control, and brand assurance." },
      { q: "Do you have parts for older models?", a: "Yes, we often carry genuine parts for older models that service centers might no longer keep in stock." }
    ]
  },
  'used-parts': {
    title: "Used Parts (Half-Cut)",
    summary: "Carefully tested used parts sourced from half-cut vehicles. The smart way to fix major components on a budget.",
    icon: <Wrench className="w-10 h-10" />,
    benefits: [
      { title: "Budget Friendly", desc: "The most affordable way to replace expensive items like gearboxes or engines." },
      { title: "Original Quality", desc: "These are often genuine parts taken from vehicles, just pre-owned." },
      { title: "Hard-to-Find Items", desc: "Best source for discontinued interior parts, switches, and trim." }
    ],
    offerings: {
      text: "Our experts inspect every used part before it goes on the shelf. We prioritize functionality and safety.",
      items: [
        "Engines & Gearboxes",
        "Alternators & Starters",
        "Body Panels (Doors, Bonnets)",
        "Interior Consoles & Switches"
      ]
    },
    process: [
      { title: "Inquiry", desc: "Send us a photo of your faulty part.", icon: <Search size={24} /> },
      { title: "Inspection", desc: "We verify our stock condition and test it.", icon: <Settings size={24} /> },
      { title: "Purchase", desc: "Buy with confidence knowing it works.", icon: <CheckCircle2 size={24} /> }
    ],
    faqs: [
      { q: "Do you offer a warranty on used parts?", a: "Yes, we typically offer a start-up warranty (e.g., 1-2 weeks) to ensure the part works upon installation." },
      { q: "Where do these parts come from?", a: "They are sourced from 'half-cut' vehicles imported from Japan or local scrap sources, then filtered for quality." },
      { q: "Can you install it for me?", a: "We can recommend nearby workshops, or install simple items (like batteries/wipers) at our shop." }
    ]
  },
  'new-parts': {
    title: "New Parts",
    summary: "Comprehensive stock of brand new replacement parts for routine maintenance and repairs.",
    icon: <Settings className="w-10 h-10" />,
    benefits: [
      { title: "Factory Fresh", desc: "Brand new condition, never used, ensuring maximum reliability." },
      { title: "Wide Selection", desc: "We carry multiple brands for every part to suit different budgets." },
      { title: "Immediate Stock", desc: "We keep high-volume items on hand for quick turnaround." }
    ],
    offerings: {
      text: "From brake pads to engine mountings, we supply everything needed for a standard car service or repair.",
      items: [
        "Brake Pads & Discs",
        "Suspension Arms & Bushes",
        "Drive Shafts",
        "Lubricants & Fluids"
      ]
    },
    process: [
      { title: "Consultation", desc: "Tell us what needs fixing.", icon: <MessageCircle size={24} /> },
      { title: "Selection", desc: "Choose between Budget, Mid-range, or Premium brands.", icon: <Settings size={24} /> },
      { title: "Result", desc: "Get the exact part you need immediately.", icon: <CheckCircle2 size={24} /> }
    ],
    faqs: [
      { q: "What brands do you carry?", a: "We carry brands like Brembo, TRW, Bosch, Kayaba (KYB), and many others depending on the component." },
      { q: "Do I need to bring a sample?", a: "It is helpful but not always necessary if you have the car grant (registration card) details." }
    ]
  },
  'windscreen-services': {
    title: "Windscreen Services",
    summary: "Professional windscreen replacement and repair. Authorized insurance panel workshop.",
    icon: <ShieldCheck className="w-10 h-10" />,
    benefits: [
      { title: "Insurance Panel", desc: "We are authorized to handle claims for major insurance providers." },
      { title: "Safety Compliant", desc: "We only use glass that meets Malaysian safety standards (SIRIM/E-Mark)." },
      { title: "Leak-Free Guarantee", desc: "Expert installation using high-grade sealants to prevent water leaks." }
    ],
    offerings: {
      text: "Don't drive with a cracked view. We provide end-to-end glass solutions.",
      items: [
        "Front & Rear Windshield Replacement",
        "Door Glass Replacement",
        "Insurance Claim Processing",
        "Rubber Seal Replacement"
      ]
    },
    process: [
      { title: "Documents", desc: "Submit your policy and police report (if needed).", icon: <ClipboardCheck size={24} /> },
      { title: "Approval", desc: "We handle the insurance approval process.", icon: <CheckCircle2 size={24} /> },
      { title: "Installation", desc: "Professional fitting in our workshop.", icon: <Wrench size={24} /> }
    ],
    faqs: [
      { q: "How long does replacement take?", a: "Usually 2-3 hours, including the time for the sealant to cure properly." },
      { q: "What documents do I need for a claim?", a: "Insurance policy, cover note, driver's license, and vehicle registration card." },
      { q: "Do you repair chips?", a: "We focus on replacement, but contact us to assess if a repair is possible." }
    ]
  },
  'battery-solutions': {
    title: "Battery Solutions",
    summary: "Wide range of high-performance car batteries with professional installation and testing.",
    icon: <Battery className="w-10 h-10" />,
    benefits: [
      { title: "Free Check", desc: "We test your old battery and alternator charging rate before recommending a change." },
      { title: "Fresh Stock", desc: "We sell high-turnover stock ensuring your battery is fresh and fully charged." },
      { title: "Warranty Included", desc: "All new batteries come with a standard manufacturer warranty." }
    ],
    offerings: {
      text: "We power everything from compact cars to lorries.",
      items: [
        "Maintenance Free (Dry) Batteries",
        "Conventional (Wet) Batteries",
        "DIN & JIS Sizes",
        "Terminal Cleaning & Protection"
      ]
    },
    process: [
      { title: "Testing", desc: "We check the health of your current battery.", icon: <Settings size={24} /> },
      { title: "Selection", desc: "Choose the right size and brand.", icon: <CheckCircle2 size={24} /> },
      { title: "Install", desc: "We install and verify the alternator charging.", icon: <Wrench size={24} /> }
    ],
    faqs: [
      { q: "Do you do trade-ins?", a: "Yes, we take in your old battery for a trade-in discount on the new one." },
      { q: "My car can't start. Can you come to me?", a: "We primarily offer installation at our shop, but call us to check availability for nearby rescue." },
      { q: "What brands do you have?", a: "We stock reliable brands like Century, Yokobatt, and GP." }
    ]
  }
};

const FAQToggle: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        className="flex items-center justify-between w-full py-4 text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`font-semibold text-lg transition-colors ${isOpen ? 'text-brand-blue' : 'text-slate-700 group-hover:text-brand-blue'}`}>
          {question}
        </span>
        <div className={`p-1 rounded-full transition-colors ${isOpen ? 'bg-brand-blue text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-brand-blue'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-600 leading-relaxed text-sm md:text-base pr-8">{answer}</p>
      </div>
    </div>
  );
};

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const whatsappLink = "https://wa.me/60164392448";

  // Redirect if service not found
  useEffect(() => {
    if (slug && !servicesData[slug]) {
      navigate('/services');
    }
  }, [slug, navigate]);

  if (!slug || !servicesData[slug]) return null;

  const data = servicesData[slug];

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* 1. Hero Strip */}
      <div className="bg-brand-navy text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/10 -skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mb-6 flex items-center text-sm text-blue-300 space-x-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight size={14} />
            <span className="text-white font-semibold">{data.title}</span>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
             <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
               <div className="text-brand-accent">
                {React.cloneElement(data.icon as React.ReactElement, { size: 40 })}
               </div>
             </div>
             <div>
               <h1 className="text-3xl md:text-5xl font-bold mb-4">{data.title}</h1>
               <p className="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed">
                 {data.summary}
               </p>
             </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20 space-y-20">
        
        {/* 2. Key Benefits */}
        <section>
          <FadeIn>
            <h2 className="text-2xl font-bold text-brand-navy mb-8">Why Choose {data.title}?</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.benefits.map((benefit, idx) => (
              <FadeIn key={idx} delay={idx * 100} className="bg-gray-50 border border-gray-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-blue mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* 3. What We Offer */}
        <section className="bg-white rounded-3xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <FadeIn>
               <h2 className="text-2xl font-bold text-brand-navy mb-4">What We Offer</h2>
               <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                 {data.offerings.text}
               </p>
               <ul className="space-y-3">
                 {data.offerings.items.map((item, idx) => (
                   <li key={idx} className="flex items-center space-x-3 text-slate-700 font-medium">
                     <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
             </FadeIn>
             <FadeIn delay={200} className="bg-brand-light rounded-3xl p-8 lg:p-12 border border-blue-100">
                <h3 className="text-xl font-bold text-brand-navy mb-4">Brands We Trust</h3>
                <p className="text-slate-600 mb-6">
                  Depending on availability, we source from top global and local manufacturers to ensure you aren't left stranded.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Amaron', 'ABM', '2K', 'Century', 'And More'].map((brand) => (
                    <span key={brand} className="bg-white px-4 py-2 rounded-lg text-sm font-bold text-slate-500 border border-gray-200 shadow-sm">
                      {brand}
                    </span>
                  ))}
                </div>
             </FadeIn>
          </div>
        </section>

        {/* 4. How It Works */}
        <section>
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl font-bold text-brand-navy">Service Process</h2>
            <p className="text-slate-500 mt-2">Simple steps to get your vehicle back in shape.</p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>
            
            {data.process.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 150} className="flex flex-col items-center text-center bg-white">
                <div className="w-24 h-24 bg-white border-4 border-brand-light rounded-full flex items-center justify-center text-brand-blue mb-6 shadow-sm">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm max-w-xs">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* 5. FAQs */}
        <section className="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100">
           <FadeIn className="max-w-3xl mx-auto">
             <h2 className="text-2xl font-bold text-brand-navy mb-8 text-center">Frequently Asked Questions</h2>
             <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
               {data.faqs.map((faq, idx) => (
                 <FAQToggle key={idx} question={faq.q} answer={faq.a} />
               ))}
             </div>
           </FadeIn>
        </section>

        {/* 6. CTA Panel */}
        <section>
           <FadeIn>
             <div className="bg-brand-navy rounded-3xl p-8 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                </div>

                <h2 className="text-3xl font-bold mb-4 relative z-10">Need help with {data.title}?</h2>
                <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                   Contact us today for a stock check or a quick quote. We are ready to assist.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                  <a href="tel:044212448" className="flex items-center justify-center space-x-2 px-8 py-4 bg-white text-brand-navy rounded-full font-bold hover:bg-gray-100 transition-colors">
                    <Phone size={20} />
                    <span>Call 04-4212448</span>
                  </a>
                  <a href={whatsappLink} className="flex items-center justify-center space-x-2 px-8 py-4 bg-green-500 text-white rounded-full font-bold hover:bg-green-600 transition-colors shadow-lg shadow-green-900/20">
                    <MessageCircle size={20} />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
             </div>
           </FadeIn>
        </section>

      </div>
    </div>
  );
};

export default ServiceDetail;