import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { galleryImages } from '../data/dummyData';

const Gallery = () => {
  const { t, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="gallery" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary">
              {t('gallery.title')}
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
            <p className="text-gray-600 text-lg">
              {t('gallery.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Gallery Grid - Masonry style */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl cursor-pointer group break-inside-avoid ${
                isExpanded
                  ? 'block' // Show everything if expanded
                  : index >= 6 
                    ? 'hidden' // Hide completely beyond 6 on both by default
                    : index >= 3 
                      ? 'hidden md:block' // Hide on mobile, show on desktop for items 3 to 5
                      : 'block' // Items 0 to 2 always show everywhere
              }`}
              onClick={() => setSelectedImage(src)}
            >
              <img 
                src={src} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white border-2 border-white px-4 py-2 rounded-full backdrop-blur-sm">
                  {language === 'en' ? 'View' : 'पहा'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Automatic Multi-Device View More Button */}
        {galleryImages.length > 3 && (
          <div className={`mt-10 text-center ${galleryImages.length <= 6 ? 'md:hidden' : 'block'}`}>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-8 py-3.5 bg-primary hover:bg-primary-light text-white font-semibold rounded-full shadow-lg active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 mx-auto text-sm tracking-wide border-2 border-secondary/20"
            >
              {isExpanded 
                ? (language === 'en' ? 'Show Less' : 'कमी पहा')
                : (language === 'en' ? 'View More' : 'अधिक पहा')}
            </button>
          </div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-6 right-6 text-white hover:text-accent transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={40} />
              </button>
              
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={selectedImage}
                alt="Fullscreen Gallery"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image itself
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Gallery;
