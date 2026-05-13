import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ScrollToTop } from './components/FloatingWidgets';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import SpecialFood from './sections/SpecialFood';

import VideoShowcase from './sections/VideoShowcase';
import Gallery from './sections/Gallery';
import Reviews from './sections/Reviews';
import Contact from './sections/Contact';

// A minimalist luxury loader component
const PreLoader = () => {
  const letters = Array.from("Hotel Aarmbh");
  
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.15,
      }
    }
  };
  
  const letterVariants = {
    initial: { opacity: 0, y: 20, rotateX: 90 },
    animate: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] bg-[#1a0e09] flex flex-col items-center justify-center text-white overflow-hidden"
      exit={{ 
        opacity: 0, 
        scale: 1.05,
        filter: "blur(10px)",
        transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } 
      }}
    >
      {/* Ambient Background Glows */}
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [-20, 20, -20],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute w-[400px] h-[400px] rounded-full bg-accent/5 blur-[80px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          x: [20, -20, 20],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative flex flex-col items-center z-10">
        {/* Logo Ring and Image Container */}
        <div className="relative mb-10 flex items-center justify-center">
          {/* Circular progress loader wrapping the logo */}
          <div className="absolute w-[120%] h-[120%]">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              {/* Background thin track */}
              <circle
                cx="60"
                cy="60"
                r="54"
                stroke="rgba(212, 175, 55, 0.1)"
                strokeWidth="1.5"
                fill="none"
              />
              {/* Animated golden progress */}
              <motion.circle
                cx="60"
                cy="60"
                r="54"
                stroke="#d4af37"
                strokeWidth="2.5"
                fill="none"
                strokeDasharray="339.29"
                initial={{ strokeDashoffset: 339.29 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Subtle rotating border for extra flair */}
          <motion.div 
            className="absolute w-[110%] h-[110%] rounded-full border border-dashed border-secondary/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />

          {/* Background golden glow directly behind logo */}
          <motion.div
            className="absolute inset-0 rounded-full bg-secondary/15 blur-2xl"
            animate={{
              scale: [0.9, 1.1, 0.9],
              opacity: [0.6, 0.9, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Logo Image Container - Masked to a perfect circle to hide the square black background corners */}
          <motion.div
            className="relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden flex items-center justify-center bg-primary shadow-2xl shadow-black/50 border border-secondary/40"
            initial={{ scale: 0.5, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.34, 1.56, 0.64, 1]
            }}
          >
            <img 
              src="/aarmbh-logo.png" 
              alt="Hotel Aarmbh Logo" 
              className="w-full h-full object-cover select-none scale-[1.04]"
            />
          </motion.div>
        </div>

        {/* Text Animation */}
        <motion.div 
          className="flex flex-col items-center text-center"
          style={{ perspective: 1000 }}
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <div className="flex overflow-hidden py-1 mb-2">
            {letters.map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className={`text-4xl md:text-5xl font-heading font-bold text-secondary tracking-wide ${
                  char === ' ' ? 'w-3 md:w-4' : ''
                }`}
                style={{ display: 'inline-block', transformOrigin: "50% 50% -20px" }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>
          
          {/* Glowing horizontal separator */}
          <div className="relative w-48 h-[1px] mb-3 overflow-hidden">
            <motion.div
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
              className="absolute top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-secondary to-transparent z-20"
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
              className="absolute inset-0 bg-secondary/30"
            />
          </div>
          
          {/* Subtle Subtitle */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="text-[10px] md:text-xs font-sans uppercase text-secondary-light/70 font-medium select-none"
          >
            Authentic Hospitality
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate resource load time for aesthetics
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <AnimatePresence>
        {loading ? (
          <PreLoader key="loader" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col relative bg-light overflow-x-hidden w-full"
          >
            <Navbar />
            <main className="flex-grow">
              <Hero />
              <About />
              <SpecialFood />

              <VideoShowcase />
              <Gallery />
              <Reviews />
              <Contact />
            </main>
            <Footer />
            
            {/* Global floating utility buttons */}

            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </LanguageProvider>
  );
}

export default App;
