import React, { useState } from 'react';
import FadeIn from '../components/FadeIn';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate generic POST submission
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-brand-navy text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-200">We are here to help. Reach out to us via phone, WhatsApp, or visit our shop.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* 1. Contact Info */}
          <div className="space-y-10">
            <FadeIn>
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Get In Touch</h2>
              <div className="space-y-6">
                
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-light p-3 rounded-full text-brand-blue">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy">Visit Us</h3>
                    <p className="text-slate-600">No. 34, Jalan Sekerat,<br/>08000 Sungai Petani,<br/>Kedah Darul Aman, Malaysia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-light p-3 rounded-full text-brand-blue">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy">Call Us</h3>
                    <p className="text-slate-600 mb-1">04-4231451</p>
                    <a href="tel:044231451" className="text-sm font-bold text-brand-blue hover:underline">Call Now</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-light p-3 rounded-full text-brand-blue">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy">WhatsApp</h3>
                    <p className="text-slate-600 mb-1">+60 12-410 7554</p>
                    <a href="https://wa.me/60124107554" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-green-600 hover:underline">Chat on WhatsApp</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-light p-3 rounded-full text-brand-blue">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy">Email</h3>
                    <p className="text-slate-600 mb-1">mavsss33@gmail.com</p>
                    <a href="mailto:mavsss33@gmail.com" className="text-sm font-bold text-brand-blue hover:underline">Send Email</a>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>

          {/* 2. Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
            <FadeIn delay={200}>
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Send a Message</h2>
              {submitted ? (
                <div className="bg-green-100 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6 text-center">
                  Thank you! Your message has been sent. We will get back to you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required 
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                        placeholder="012-3456789"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required 
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none"
                      placeholder="I'm looking for a specific part..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-brand-blue text-white font-bold py-3.5 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send size={18} />
                  </button>
                </form>
              )}
            </FadeIn>
          </div>
        </div>

        {/* 3. Map Placeholder */}
        <div className="mt-20">
          <FadeIn>
            <div className="w-full h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-inner relative group">
              {/* Google Maps Embed Placeholder - Using an image or iframe here typically */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.5937829281356!2d100.4883!3d5.6425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304b27c123456789%3A0xabcdef1234567890!2sJalan%20Sekerat%2C%20Sungai%20Petani%2C%20Kedah!5e0!3m2!1sen!2smy!4v1600000000000!5m2!1sen!2smy" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale hover:grayscale-0 transition-all duration-700"
                title="Google Map Location"
              ></iframe>
              <div className="absolute inset-0 bg-brand-navy/10 pointer-events-none group-hover:bg-transparent transition-colors"></div>
            </div>
          </FadeIn>
        </div>

      </div>
    </div>
  );
};

export default Contact;
