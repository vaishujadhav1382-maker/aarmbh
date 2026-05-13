import React, { useState, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { reviews } from '../data/dummyData';
import { Pause, Play, X } from 'lucide-react';

const Reviews = () => {
  const { t } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  // Duplicating list items for continuous visual cycling
  const doubleReviews = [...reviews, ...reviews, ...reviews];

  // Refs to manage muting and individual video playback logic if needed later
  const videoRefs = useRef([]);

  return (
    <section id="reviews" className="py-20 bg-primary overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white">
              {t('reviews.title')}
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            <p className="text-gray-300 text-lg mt-4">
              Experience raw ambiance. Click any frame to zoom and listen.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Viewport Marquee with conditional Animation pausing */}
      <div className="relative flex overflow-hidden cursor-pointer">
        <motion.div 
          className="flex gap-6 pr-6"
          animate={{ x: isPaused || selectedVideo ? 0 : [0, -1800] }}
          // When paused we can manually pin the x coordinate or simply utilize static state.
          // Better approach: using pure CSS infinite or toggle transition based on state.
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
          // Allows hovering to temporarily slow/stop as well if needed, but strictly sticking to instructions
        >
          {doubleReviews.map((item, idx) => (
            <div 
              key={`${item.id}-${idx}`}
              onClick={() => {
                setIsPaused(true);
                setSelectedVideo(item);
              }}
              className="relative flex-shrink-0 w-64 md:w-72 h-[400px] md:h-[500px] rounded-3xl overflow-hidden bg-black shadow-2xl border border-white/10 group transition-transform hover:scale-105 active:scale-95"
            >
              <video
                src={item.video}
                className="w-full h-full object-cover pointer-events-none"
                loop
                muted
                autoPlay
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40 shadow-lg scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Play size={32} fill="currentColor" className="ml-1" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Fullscreen Video Overlay (Triggered on click which fully pauses background) */}
      {selectedVideo && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
        >
          <button 
            onClick={() => {
              setSelectedVideo(null);
              setIsPaused(false);
            }}
            className="absolute top-6 right-6 text-white hover:text-secondary transition-colors z-[110] p-2 bg-black/50 rounded-full"
          >
            <X size={36} />
          </button>
          
          <div className="relative w-full max-w-md h-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl bg-black">
            <video 
              src={selectedVideo.video} 
              className="w-full h-full object-contain"
              controls 
              autoPlay
              loop
            />
          </div>
        </motion.div>
      )}

      {/* Decorative edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary to-transparent z-20 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary to-transparent z-20 pointer-events-none"></div>
    </section>
  );
};

export default Reviews;
