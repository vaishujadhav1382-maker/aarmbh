import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Custom Luxury Logo Showcase with Overlapping Food Satellites */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center py-16 px-6 sm:px-12"
          >
            {/* Responsive scale wrapping container: w-48 on xs mobile, w-64 on sm, w-96 on md+ */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 flex items-center justify-center">
              
              {/* Pulse Glow Aura behind the logo */}
              <div className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-[28rem] md:h-[28rem] rounded-full bg-secondary/20 blur-3xl animate-pulse"></div>
              
              {/* Rotating Ornate Outer Ring */}
              <motion.div 
                className="absolute w-full h-full rounded-full border-2 border-accent/20 border-dashed scale-[1.3] sm:scale-125 md:scale-110"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Rotating Ornate Inner Ring */}
              <motion.div 
                className="absolute w-full h-full rounded-full border-2 border-secondary/30 border-dotted scale-110 sm:scale-110 md:scale-95"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Top-Left Satellite: Gourmet Food Shot */}
              <motion.div
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 md:-top-10 md:-left-10 z-20 w-20 h-20 sm:w-28 sm:h-28 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-secondary bg-black shadow-[0_15px_35px_rgba(0,0,0,0.35)] group cursor-pointer"
                animate={{ y: [-8, 8, -8], rotate: [0, 4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.08, zIndex: 30 }}
              >
                <img 
                  src="/hero2.png" 
                  alt="Authentic Dish" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>

              {/* Bottom-Right Satellite: Signature Curry Shot */}
              <motion.div
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:-bottom-10 md:-right-10 z-20 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-secondary bg-black shadow-[0_15px_35px_rgba(0,0,0,0.35)] group cursor-pointer"
                animate={{ y: [8, -8, 8], rotate: [0, -4, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ scale: 1.08, zIndex: 30 }}
              >
                <img 
                  src="/hero3.png" 
                  alt="Kolhapuri Curry" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>

              {/* Floating Central Logo Card */}
              <motion.div
                className="relative z-10 w-36 h-36 sm:w-48 sm:h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-[5px] md:border-[8px] border-secondary bg-black shadow-[0_25px_60px_rgba(0,0,0,0.45)] group"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.03 }}
              >
                <img 
                  src="/aarmbh-logo.png" 
                  alt="Hotel Aarmbh Logo" 
                  className="w-full h-full object-cover scale-[1.06] transition-transform duration-700 group-hover:scale-[1.12]"
                />
              </motion.div>
              
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 bg-secondary/20 text-accent rounded-full font-medium text-sm">
              {t('about.title')}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary">
              {t('about.subtitle')}
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full"></div>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              {t('about.description1')}
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              {t('about.description2')}
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-primary/10">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">10+</div>
                <div className="text-sm text-gray-600 mt-1">{t('about.stats.years')}</div>
              </div>
              <div className="text-center border-l border-r border-primary/10">
                <div className="text-2xl md:text-3xl font-bold text-accent">50k+</div>
                <div className="text-sm text-gray-600 mt-1">{t('about.stats.guests')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">100+</div>
                <div className="text-sm text-gray-600 mt-1">{t('about.stats.dishes')}</div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
