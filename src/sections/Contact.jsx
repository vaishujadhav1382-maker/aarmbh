import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const mapUrl = "https://maps.app.goo.gl/L32Jq2R2qdqD3Rf39?g_st=aw";

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary">
              {t('contact.title')}
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
            <p className="text-gray-600 text-lg">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-light p-8 rounded-3xl flex items-start space-x-6 hover:shadow-md transition-shadow">
              <div className="p-4 bg-white rounded-2xl text-accent shadow-sm flex-shrink-0">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary font-heading mb-2">{t('contact.address')}</h4>
                <p className="text-gray-600 leading-relaxed">
                  Hotel Aarmbh, Chipari, Maharashtra 416101
                </p>
              </div>
            </div>

            <div className="bg-light p-8 rounded-3xl flex items-start space-x-6 hover:shadow-md transition-shadow">
              <div className="p-4 bg-white rounded-2xl text-accent shadow-sm flex-shrink-0">
                <Phone size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary font-heading mb-2">{t('contact.phone')}</h4>
                <p className="text-gray-600 text-lg">+91 98765 43210</p>
                <p className="text-gray-600 text-lg">+91 20 1234 5678</p>
              </div>
            </div>

            <div className="bg-light p-8 rounded-3xl flex items-start space-x-6 hover:shadow-md transition-shadow">
              <div className="p-4 bg-white rounded-2xl text-accent shadow-sm flex-shrink-0">
                <Clock size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary font-heading mb-2">{t('contact.hours')}</h4>
                <div className="flex flex-col space-y-1 text-gray-600">
                  <div className="flex justify-between w-full gap-4">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">11:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between w-full gap-4">
                    <span>Saturday - Sunday:</span>
                    <span className="font-medium">10:30 AM - 11:30 PM</span>
                  </div>
                </div>
              </div>
            </div>


          </motion.div>

          {/* Maps Embed Placeholder Design - Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl group border border-gray-200"
          >
            <div className="absolute inset-0 bg-gray-200 flex flex-col items-center justify-center p-8 text-center group-hover:bg-gray-300 transition-colors">
              {/* Replicating an actual embedded map visuals using CSS styles */}
              <div className="w-full h-full opacity-70 grayscale mix-blend-multiply absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778545874-dd88f260ef8c?auto=format&fit=crop&q=60&w=800')] bg-cover bg-center"></div>
              
              <div className="relative z-10 glass rounded-2xl p-8 shadow-xl border border-white max-w-xs">
                <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-4 animate-bounce shadow-lg">
                  <MapPin size={32} fill="currentColor" />
                </div>
                <h4 className="font-heading font-bold text-primary text-xl mb-2">Hotel Aarmbh</h4>
                <p className="text-sm text-gray-600 mb-6">Find us directly via Google Maps navigation.</p>
                <a 
                  href={mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-6 py-2 rounded-full font-medium text-sm block text-center hover:bg-primary-light transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
