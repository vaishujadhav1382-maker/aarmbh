import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const images = [
  "/hero1.png",
  "/hero2.png",
  "/hero3.png",
  "/hero4.png",
];

const Hero = () => {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000); // Rotate every 6s
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* Cinematic Fade Slider */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/35 z-10 backdrop-blur-[0.5px]"></div>
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            alt="Luxury Hotel Ambience"
            className="absolute w-full h-full object-cover object-center"
          />
        </AnimatePresence>
      </div>

      {/* Content Layer */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-6"
        >
          {/* Aesthetic accent */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1.2 }}
            className="h-1 bg-secondary mx-auto rounded-full"
          />

          <h1 className="font-bold font-heading tracking-wide leading-tight select-none">
            {language === 'en' ? (
              <>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white drop-shadow-[0_5px_10px_rgba(0,0,0,0.6)]"
                >
                  Welcome to
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, scale: 0.95, backgroundPosition: "0% 50%" }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                  }}
                  transition={{ 
                    opacity: { duration: 0.8, delay: 0.8 },
                    scale: { duration: 0.8, delay: 0.8 },
                    backgroundPosition: { duration: 6, repeat: Infinity, ease: "linear" }
                  }}
                  className="block mt-2 text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary-light to-accent bg-[length:200%_auto] drop-shadow-[0_10px_25px_rgba(212,175,55,0.35)]"
                >
                  Hotel Aarmbh
                </motion.span>
              </>
            ) : (
              <>
                <motion.span 
                  initial={{ opacity: 0, scale: 0.95, backgroundPosition: "0% 50%" }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                  }}
                  transition={{ 
                    opacity: { duration: 0.8, delay: 0.5 },
                    scale: { duration: 0.8, delay: 0.5 },
                    backgroundPosition: { duration: 6, repeat: Infinity, ease: "linear" }
                  }}
                  className="block text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary-light to-accent bg-[length:200%_auto] drop-shadow-[0_10px_25px_rgba(212,175,55,0.35)]"
                >
                  हॉटेल आरंभ
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl mt-4 text-white font-medium drop-shadow-[0_5px_10px_rgba(0,0,0,0.6)]"
                >
                  मध्ये आपले स्वागत आहे
                </motion.span>
              </>
            )}
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 font-light max-w-3xl mx-auto leading-relaxed drop-shadow">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
            <a
              href="#menu"
              className="group relative px-8 py-4 bg-secondary text-primary font-bold rounded-full overflow-hidden shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative z-10">{t('hero.viewMenu')}</span>
            </a>

            <a
              href="#contact"
              className="group px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all transform hover:-translate-y-1 shadow-xl w-full sm:w-auto"
            >
              {t('hero.contactUs')}
            </a>
          </div>
        </motion.div>
      </div>


    </section>
  );
};

export default Hero;
