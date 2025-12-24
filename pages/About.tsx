import React from 'react';
import FadeIn from '../components/FadeIn';
import { 
  Clock, MapPin, Wrench, ThumbsUp, 
  Calendar, TrendingUp, Award, 
  Eye, Target, CheckCircle2 
} from 'lucide-react';

const boardMembers = [
  { name: "M.A. Veerappan Chettiar", title: "Founder", image: "/founder.png" },
  { name: "Arumugam A/L Veerappan", title: "Director", image: "/director-1.png" },
  { name: "Magalingam A/L Veerappan", title: "Director", image: "/director-2.png" },
  { name: "Shanmugam A/L Veerappan", title: "Director", image: "/director-3.png" },
];

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
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left: Story */}
          <FadeIn className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">About M.A. Veerappan Auto Sdn Bhd</h2>
            <div className="prose prose-slate max-w-none text-slate-600 space-y-4 leading-relaxed">
              <p>
                Established in 1983 in Kedah, we began as a private firm dedicated to supplying high-quality auto spare parts and servicing a wide variety of vehicle brands and makes across Malaysia.
              </p>
              <p>
                Over the decades, we have built a strong reputation for reliability and continuous success. Our growth is driven by our commitment to quality and the trust our customers place in us.
              </p>
              <p>
                We are proud to be staffed by a team of skilled technicians and mechanics who are passionate about delivering professional, efficient service, ensuring high customer satisfaction every time you visit.
              </p>
            </div>
          </FadeIn>

          {/* Right: Quick Facts Card */}
          <FadeIn delay={200} className="bg-brand-blue text-white rounded-xl shadow-lg p-8 h-full flex flex-col justify-center relative overflow-hidden">
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

        {/* 2. Timeline Strip */}
        <FadeIn className="mb-16">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12 relative">
             <div className="absolute top-1/2 left-4 md:left-12 right-4 md:right-12 h-1 bg-blue-50 -translate-y-1/2 hidden md:block z-0"></div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {/* Step 1 */}
                <div className="bg-white p-4 text-center group">
                  <div className="w-16 h-16 mx-auto bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors border-4 border-white shadow-sm">
                    <Calendar size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-brand-navy mb-2">1983</h4>
                  <p className="text-sm text-slate-600">Company founded as a private firm for auto spare parts & servicing.</p>
                </div>

                {/* Step 2 */}
                <div className="bg-white p-4 text-center group">
                  <div className="w-16 h-16 mx-auto bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors border-4 border-white shadow-sm">
                    <TrendingUp size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-brand-navy mb-2">1990s</h4>
                  <p className="text-sm text-slate-600">Expanded range of brands and vehicle makes.</p>
                </div>

                {/* Step 3 */}
                <div className="bg-white p-4 text-center group">
                  <div className="w-16 h-16 mx-auto bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors border-4 border-white shadow-sm">
                    <Award size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-brand-navy mb-2">Today</h4>
                  <p className="text-sm text-slate-600">Recognized spare parts and service provider with skilled technicians.</p>
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
            <h2 className="text-2xl font-bold text-brand-navy mb-8 text-center">Board of Directors</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardMembers.map((member, idx) => (
              <FadeIn key={idx} delay={400 + (idx * 100)}>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={`${member.name} portrait`} 
                      className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-brand-blue/20 shadow-lg"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-400 border border-gray-200">
                      <span className="text-2xl font-bold">{member.name.charAt(0)}</span>
                    </div>
                  )}
                  <h3 className="font-bold text-brand-navy mb-1">{member.name}</h3>
                  <p className="text-brand-blue text-sm uppercase tracking-wide">{member.title}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;