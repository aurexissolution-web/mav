import React from 'react';
import FadeIn from '../components/FadeIn';
import { Settings, Shield, Battery, PenTool, CheckCircle, ArrowRight, ShieldCheck, Wrench, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Services Intro */}
      <div className="bg-brand-light py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Our Services</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We specialize in supplying and servicing a wide range of automotive parts to keep you safely on the road.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        
        {/* 2. Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            { 
              title: "Taiwan Parts", 
              desc: "We supply high-quality aftermarket parts imported from Taiwan, offering an excellent balance of performance and value.",
              icon: <Settings />,
              link: "/services/taiwan-parts"
            },
            { 
              title: "Genuine Parts", 
              desc: "Authorized dealer for genuine spare parts for major car brands ensuring perfect fit and longevity.",
              icon: <CheckCircle />,
              link: "/services/genuine-parts"
            },
            { 
              title: "Used Parts", 
              desc: "Cost-effective, reliable, and tested used parts for a wide variety of vehicle makes and models.",
              icon: <PenTool />,
              link: "/services/used-parts"
            },
            { 
              title: "New Parts", 
              desc: "Comprehensive stock of brand new body parts, engine components, and accessories.",
              icon: <Settings />,
              link: "/services/new-parts"
            },
            { 
              title: "Windscreen Services", 
              desc: "Professional windscreen replacement and repair. We ensure safety glass standards are met.",
              icon: <ShieldCheck />,
              link: "/services/windscreen-services"
            },
            { 
              title: "Battery Solutions", 
              desc: "Wide range of car batteries with installation services to get you moving again quickly.",
              icon: <Battery />,
              link: "/services/battery-solutions"
            },
            { 
              title: "Workshop Services", 
              desc: "Trusted partner workshops for installation, troubleshooting, and mechanical repairs done right.",
              icon: <Wrench />,
              link: "/services/workshop"
            },
            { 
              title: "Buy Scrap Cars", 
              desc: "We purchase accident or end-of-life vehicles for parts harvest and responsible recycling.",
              icon: <Truck />,
              link: "/services/buy-scrap-car"
            },
          ].map((service, idx) => (
            <FadeIn key={idx} delay={idx * 100} className="h-full">
              <Link to={service.link} className="block h-full group">
                <div className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full relative overflow-hidden">
                  <div className="w-14 h-14 bg-brand-light text-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                  
                  <div className="flex items-center text-brand-blue font-bold text-sm mt-auto">
                    Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* 3. Authorized Panel Highlight */}
        <FadeIn className="mb-20">
          <div className="bg-gradient-to-r from-brand-navy to-blue-900 rounded-2xl p-8 md:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <Shield className="w-16 h-16 mx-auto mb-6 text-brand-accent" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Authorized Panel for Windscreen Replacement & Insurance Claims</h2>
              <p className="text-blue-100 max-w-2xl mx-auto text-lg mb-8">
                We are an officially authorized panel workshop. We handle windscreen insurance claims seamlessly, so you don't have to worry about the paperwork.
              </p>
              <Link to="/contact" className="inline-flex items-center bg-white text-brand-navy px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Contact Us for Claims
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* 4. How We Work */}
        <div className="text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold text-brand-navy mb-12">How We Work</h2>
          </FadeIn>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 relative">
            
            <FadeIn delay={100} className="w-full md:w-1/3 flex flex-col items-center">
              <div className="w-16 h-16 bg-white border-2 border-brand-blue text-brand-blue rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-sm">1</div>
              <h3 className="font-bold text-lg mb-2">Enquire</h3>
              <p className="text-slate-600">Contact us via WhatsApp or Phone for parts availability.</p>
            </FadeIn>
            
            <div className="hidden md:block text-gray-300">
              <ArrowRight size={32} />
            </div>

            <FadeIn delay={200} className="w-full md:w-1/3 flex flex-col items-center">
              <div className="w-16 h-16 bg-white border-2 border-brand-blue text-brand-blue rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-sm">2</div>
              <h3 className="font-bold text-lg mb-2">Confirm & Quote</h3>
              <p className="text-slate-600">We provide a quote and confirm the service details.</p>
            </FadeIn>

            <div className="hidden md:block text-gray-300">
              <ArrowRight size={32} />
            </div>

            <FadeIn delay={300} className="w-full md:w-1/3 flex flex-col items-center">
              <div className="w-16 h-16 bg-white border-2 border-brand-blue text-brand-blue rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-sm">3</div>
              <h3 className="font-bold text-lg mb-2">Collection / Install</h3>
              <p className="text-slate-600">Visit our shop for collection or professional installation.</p>
            </FadeIn>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;