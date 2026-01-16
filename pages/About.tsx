import React from 'react';
import FadeIn from '../components/FadeIn';
import { 
  Clock, MapPin, Wrench, ThumbsUp, 
  Calendar, TrendingUp, Award, 
  Eye, Target, CheckCircle2, Recycle,
  ArchiveRestore, Package
} from 'lucide-react';

type DirectorMember = {
  name: string;
  title: string;
  image: string;
  placeholder?: boolean;
};

const founder = { name: "M.A. Veerappan Chettiar", title: "Founder", image: "/founder.png" };

const directorMembers: DirectorMember[] = [
  { name: "Shanmugam A/L Veerappan", title: "Director", image: "/director-1.png" },
  { name: "Subramaniam A/L Veerappan", title: "Director", image: "/WhatsApp Image 2026-01-16 at 18.44.17.jpeg" },
  { name: "Magalingam A/L Veerappan", title: "Director", image: "/director-2.png" },
  { name: "Arumugam A/L Veerappan", title: "Director", image: "/director-3.png" },
];

const historyEntries = [
  {
    year: "1951",
    title: "Humble Beginnings",
    description: "Family-run used bottle recycling hub that mastered material sorting, logistics, and the value of reuse.",
    icon: <Recycle className="w-5 h-5" />,
    accent: "from-emerald-100 to-emerald-200 text-emerald-700"
  },
  {
    year: "1965",
    title: "Scrap & Secondhand",
    description: "Expanded into “barang-barang lusuh”, sourcing and trading quality scrap goods across Malaysia and nearby regions.",
    icon: <ArchiveRestore className="w-5 h-5" />,
    accent: "from-amber-100 to-amber-200 text-amber-700"
  },
  {
    year: "1983",
    title: "Used Auto Parts",
    description: "Shifted into the automotive aftermarket, supplying trusted used components to workshops and vehicle owners.",
    icon: <Wrench className="w-5 h-5" />,
    accent: "from-blue-100 to-blue-200 text-brand-blue"
  },
  {
    year: "1990",
    title: "New Parts Distribution",
    description: "Partnered with manufacturers to stock brand-new OEM and aftermarket parts for mechanics and motorists nationwide.",
    icon: <Package className="w-5 h-5" />,
    accent: "from-purple-100 to-purple-200 text-purple-700"
  }
];

const summaryRows = [
  { year: "1951", focus: "Used bottle recycling" },
  { year: "1965", focus: "Scrap materials & secondhand goods (\"barang-barang lusuh\")" },
  { year: "1983", focus: "Dealer in used auto parts" },
  { year: "1990", focus: "Dealer in new auto parts" }
];

const legacyCopy = `From recycling bottles to becoming a respected auto parts dealer, M.A. Veerappan Auto Sdn Bhd has transformed over seven decades by anticipating market needs, diversifying boldly, and cultivating loyal relationships with customers and suppliers.`;

const About: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-brand-navy text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-brand-light text-lg max-w-2xl mx-auto">Get to know M.A. Veerappan Auto Sdn Bhd, our history, and our values.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-8">
        
        {/* 1. Intro Section: Split into 2 Columns */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Left: Story */}
          <FadeIn className="lg:flex-[2] bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-b from-brand-light/20 to-transparent pointer-events-none"></div>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">About M.A. Veerappan Auto Sdn Bhd</h2>
            <p className="text-base text-slate-500 mb-6">
              M.A. Veerappan Auto Sdn Bhd began as a family recycling venture and has grown into a premier auto parts supplier headquartered in Sungai Petani, Kedah. Incorporated on 30 January 1990, the company now delivers both new and used parts nationwide with dependable service.
            </p>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-brand-navy">1951 – Humble Beginnings:</strong> Started as a family operation recycling used bottles for factories and markets, building deep expertise in material sorting, logistics, and resource efficiency.
              </p>
              <p>
                <strong className="text-brand-navy">1965 – Scrap Expansion:</strong> Branched into scrap materials and secondhand goods—<em>barang-barang lusuh</em>—forming sourcing networks across Malaysia for quality reuse.
              </p>
              <p>
                <strong className="text-brand-navy">1983 – Used Auto Parts:</strong> Malaysia’s automotive boom prompted a move into supplying trusted used parts for mechanics, workshops, and vehicle owners.
              </p>
              <p>
                <strong className="text-brand-navy">1990—Current – New Parts Growth:</strong> After incorporation, we expanded into new auto parts from top manufacturers while retaining used parts expertise. Operating from No. 34 Jalan Sekerat, Sungai Petani, we now serve DIY enthusiasts and professionals with parts for vehicles such as Datsun and offer fast shipping through Lazada, TikTok, Instagram, and Facebook.
              </p>
            </div>
          </FadeIn>

          {/* Right: Quick Facts Card */}
          <FadeIn delay={200} className="bg-brand-blue text-white rounded-xl shadow-lg p-8 relative overflow-hidden lg:w-[360px] lg:flex-none self-start">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-xl font-bold mb-6 relative z-10 border-b border-white/20 pb-2">Quick Facts</h3>
            <div className="space-y-5 relative z-10">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-200" />
                <div>
                  <span className="block font-semibold text-sm text-blue-100 uppercase tracking-wide">Years in Operation</span>
                  <span className="font-medium">Since 1983</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-200" />
                <div>
                  <span className="block font-semibold text-sm text-blue-100 uppercase tracking-wide">Location</span>
                  <span className="font-medium">Based in Sungai Petani, Kedah</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Wrench className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-200" />
                <div>
                  <span className="block font-semibold text-sm text-blue-100 uppercase tracking-wide">Focus</span>
                  <span className="font-medium">Auto spare parts & service for multiple brands</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <ThumbsUp className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-200" />
                <div>
                  <span className="block font-semibold text-sm text-blue-100 uppercase tracking-wide">Trust</span>
                  <span className="font-medium">Strong reputation and loyal customer base</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* 2. Company History Timeline */}
        <FadeIn className="mb-16">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-brand-blue">Company Timeline</p>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-navy">Evolution of M.A. Veerappan Auto</h3>
              </div>
              <span className="text-sm text-slate-500 font-medium">1951 — Present</span>
            </div>

            <div className="relative mt-10">
              <div className="hidden md:block absolute top-12 left-12 right-12 h-px bg-gradient-to-r from-transparent via-blue-50 to-transparent"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {historyEntries.map((entry) => (
                  <div key={entry.year} className="text-center flex flex-col items-center gap-3">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${entry.accent} flex items-center justify-center text-brand-navy shadow-md`}>
                      {entry.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-brand-blue uppercase tracking-wide">{entry.year}</p>
                      <h4 className="text-lg font-bold text-brand-navy">{entry.title}</h4>
                      <p className="text-slate-600 text-sm mt-2 leading-relaxed">{entry.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 2b. Legacy */}
        <FadeIn className="mb-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-navy via-brand-blue to-blue-500 text-white shadow-2xl p-8 md:p-12">
            <div className="absolute inset-y-0 right-0 w-1/3 bg-white/5 blur-3xl opacity-60 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-xl space-y-4">
                <p className="text-xs tracking-[0.5em] text-blue-200 uppercase">Legacy &amp; Reputation</p>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">Seven Decades of Trust</h3>
                <p className="text-blue-100 leading-relaxed">{legacyCopy}</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {["Resilience","Relationships","Reliability"].map((value) => (
                    <span key={value} className="px-4 py-1 rounded-full border border-white/30 text-sm font-medium tracking-wide">
                      {value}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 lg:w-80">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <p className="text-sm uppercase tracking-widest text-blue-100">Years Strong</p>
                  <p className="text-3xl font-bold">70+</p>
                  <p className="text-sm text-blue-100 mt-1">Family legacy since 1951</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <p className="text-sm uppercase tracking-widest text-blue-100">Promise</p>
                  <p className="text-3xl font-bold">100%</p>
                  <p className="text-sm text-blue-100 mt-1">Customer-first service</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 3. Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <FadeIn delay={100} className="bg-white rounded-xl shadow-md p-8 border-t-4 border-brand-blue h-full">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 text-brand-blue rounded-full flex items-center justify-center mr-4">
                <Eye size={24} />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy">Our Vision</h3>
            </div>
            <p className="text-slate-600 leading-relaxed italic bg-gray-50 p-6 rounded-lg border-l-2 border-brand-blue">
              "To be the leading automotive spare parts supplier and automotive service provider in the market, achieving the highest quality service for maximum customer satisfaction and sustainable growth and profitability."
            </p>
          </FadeIn>
          
          <FadeIn delay={200} className="bg-white rounded-xl shadow-md p-8 border-t-4 border-brand-accent h-full">
             <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 text-brand-accent rounded-full flex items-center justify-center mr-4">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy">Our Mission</h3>
            </div>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <CheckCircle2 className="text-brand-accent mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="font-medium">Achieve the highest level of customer satisfaction.</span>
              </li>
              <li className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <CheckCircle2 className="text-brand-accent mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="font-medium">Deliver the highest quality of work in the most efficient and economical way.</span>
              </li>
            </ul>
          </FadeIn>
        </div>

        {/* 4. Principle */}
        <FadeIn delay={300} className="bg-brand-blue/5 rounded-xl p-8 mb-16 text-center border border-brand-blue/10">
          <h3 className="text-lg font-semibold text-brand-blue mb-2">Our Principle</h3>
          <p className="text-xl md:text-2xl font-bold text-brand-navy">
            "We strive to enhance our services and make sure our customers reach 100% satisfaction."
          </p>
        </FadeIn>

        {/* 5. Board Members */}
        <div className="mb-12">
          <FadeIn>
            <h2 className="text-2xl font-bold text-brand-navy mb-5 text-center">Board of Directors</h2>
            <p className="text-center text-slate-500 mb-8">
              A heritage-led structure with our founder at the helm and directors leading key operations.
            </p>
          </FadeIn>

          <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-8 md:p-12">
            {/* Founder Node */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full border-4 border-brand-blue/30 shadow-lg overflow-hidden flex items-center justify-center bg-white">
                <img 
                  src={founder.image}
                  alt={`${founder.name} portrait`}
                  className="w-full h-full object-contain p-1"
                  style={{ objectPosition: 'center top' }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-brand-navy">{founder.name}</h3>
                <p className="text-sm uppercase tracking-wide text-brand-blue">{founder.title}</p>
              </div>
              <div className="hidden md:block w-px h-12 bg-slate-200 mt-6"></div>
            </div>

            {/* Directors */}
            <div className="relative mt-10">
              <div className="hidden md:block absolute inset-x-6 top-0 h-0.5 bg-slate-200"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
                {directorMembers.map((member, idx) => (
                  <FadeIn key={member.name} delay={400 + (idx * 120)}>
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="hidden md:block w-px h-8 bg-slate-200"></div>
                      <div
                        className={`w-24 h-24 rounded-full border-4 ${
                          member.placeholder
                            ? 'border-dashed border-slate-300 text-slate-400 flex items-center justify-center font-semibold'
                            : 'border-brand-blue/20 shadow-lg overflow-hidden'
                        }`}
                      >
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={`${member.name} portrait`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        ) : (
                          <span className="text-xs uppercase tracking-wide px-3 text-center">Awaiting Image</span>
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-brand-navy">{member.name}</p>
                        <p className="text-sm uppercase tracking-wide text-brand-blue">{member.title}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 6. Testimonials Video */}
        <FadeIn className="bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-3xl shadow-lg border border-blue-100 p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100/70 text-brand-blue text-xs font-semibold uppercase tracking-[0.4em] rounded-full">
                Community Voices
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy leading-tight">Look What People Say About Us!</h2>
              <p className="text-slate-600 leading-relaxed">
                Real stories shared by our customers inspire us to keep engineering better service every day. Watch how M.A. Veerappan Auto has helped Malaysian motorists stay on the road since the 1950s.
              </p>
              <div className="bg-white rounded-2xl border border-blue-100 p-4 shadow-sm">
                <p className="text-brand-navy font-semibold text-lg">“The only spare parts shop I recommend. Honest prices and super helpful!”</p>
                <div className="flex items-center gap-2 text-sm text-slate-500 mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, idx) => (
                      <span key={idx} className="text-brand-accent">★</span>
                    ))}
                  </div>
                  <span>4.9/5 average rating</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Authentic Parts","Trusted Since 1951","Customer-first Support"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-white text-brand-blue font-medium rounded-full border border-blue-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full flex justify-center">
              <div className="rounded-3xl overflow-hidden border-4 border-white shadow-2xl w-full max-w-[320px] md:max-w-[360px] bg-black">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/mav.png"
                  className="w-full h-auto block"
                >
                  <source src="/ssstik.io_@mr_goy_1768477734870.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
};

export default About;