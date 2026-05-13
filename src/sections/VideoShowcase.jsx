import React from 'react';
import { motion } from 'framer-motion';

const VideoShowcase = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
      {/* Background Video using an iframe placeholder or video tag */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/70 z-10 mix-blend-multiply"></div>
        {/* Placeholder image acting as video cover until actual video is provided */}
        <img 
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1920" 
          alt="Video Showcase Background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Actual Video Tag implementation (commented out for now since we don't have video assets) 
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover object-center"
        >
          <source src="/path/to/your/video.mp4" type="video/mp4" />
        </video>
        */}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-dark p-8 md:p-12 rounded-3xl max-w-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">
            Experience The Grandeur
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-200 text-lg md:text-xl font-light">
            A perfect blend of traditional Maharashtrian culture and modern luxury. 
            Come, create unforgettable memories with your loved ones.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;
