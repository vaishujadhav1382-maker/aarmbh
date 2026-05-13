import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { reviews } from '../data/dummyData';
import { Play, X } from 'lucide-react';

const Reviews = () => {
  const { t, language } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  
  // Click-to-drag and autoscroll interactive states
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [draggedDistance, setDraggedDistance] = useState(0);

  // Duplicate the array once to create an endless loop track for the infinity scroll engine
  const doubleReviews = [...reviews, ...reviews];

  // 1. Flawless 60fps Auto-Scrolling Loop with smart pause conditions
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || isMobileExpanded || selectedVideo) return;

    let animationFrameId;
    
    const scrollLoop = () => {
      // Resume auto scroll only when not actively grabbing, hovering, or reading video modal
      if (!isDragging && !isHovered && !selectedVideo && !isMobileExpanded) {
        slider.scrollLeft += 0.7; // Silky smooth, constant linear increment
      }
      animationFrameId = requestAnimationFrame(scrollLoop);
    };

    animationFrameId = requestAnimationFrame(scrollLoop);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging, isHovered, isMobileExpanded, selectedVideo]);

  // 2. Physical Boundary Snap-Looping: Ensures infinite scrolling in BOTH directions natively
  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const halfWidth = slider.scrollWidth / 2;
    
    // Snap back to start if user manually swipes past half way
    if (slider.scrollLeft >= halfWidth) {
      slider.scrollLeft -= halfWidth;
    } 
    // Snap forward to half way if user manually swipes left off the edge
    else if (slider.scrollLeft <= 0) {
      slider.scrollLeft += halfWidth;
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    setDraggedDistance(0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; 
    setDraggedDistance(Math.abs(walk));
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleItemClick = (item) => {
    // Safely open overlay only if not dragging
    if (draggedDistance < 10) {
      setSelectedVideo(item);
    }
  };

  return (
    <section id="reviews" className="py-20 bg-primary overflow-hidden relative">
      {/* CSS injection for seamless scrollbar isolation */}
      <style dangerouslySetInnerHTML={{__html: `
        .reviews-carousel::-webkit-scrollbar { display: none; }
      `}} />

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
              Experience raw ambiance. Swipe, drag or click to zoom and listen.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 1. Ultimate Hybrid Scroll Carousel: Autoscrolls, infinite swipable loop, mouse-drags */}
      <div 
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onScroll={handleScroll}
        className={`${isMobileExpanded ? 'hidden md:flex' : 'flex'} overflow-x-auto reviews-carousel select-none gap-6 px-6 md:px-12 pb-8 relative cursor-grab active:cursor-grabbing`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        {doubleReviews.map((item, idx) => (
          <div 
            key={`${item.id}-${idx}`}
            onClick={() => handleItemClick(item)}
            className="relative flex-shrink-0 w-64 md:w-80 h-[420px] md:h-[520px] rounded-3xl overflow-hidden bg-black shadow-2xl border border-white/10 group transition-transform duration-300 hover:scale-[1.02] active:scale-95 select-none"
          >
            <video
              src={item.video}
              className="w-full h-full object-cover pointer-events-none"
              loop
              muted
              autoPlay
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40 shadow-lg scale-75 group-hover:scale-100 transition-transform duration-300">
                <Play size={32} fill="currentColor" className="ml-1" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 2. Mobile View Expanded: 2-Column Grid (Visible ONLY on Mobile AND ONLY when expanded) */}
      {isMobileExpanded && (
        <div className="md:hidden relative z-10 px-4">
          <div className="grid grid-cols-2 gap-3 animate-fadeIn">
            {reviews.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                onClick={() => {
                  setSelectedVideo(item);
                }}
                className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-xl border border-white/5 active:scale-[0.98] transition-all"
              >
                <video
                  src={item.video}
                  className="w-full h-full object-cover pointer-events-none"
                  loop
                  muted
                  autoPlay
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 flex items-center justify-center">
                  <div className="w-11 h-11 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/35 shadow-md scale-95">
                    <Play size={20} fill="currentColor" className="ml-0.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Mobile Expand/Collapse Controller Container */}
      <div className="mt-8 text-center md:hidden relative z-10">
        <button
          onClick={() => setIsMobileExpanded(!isMobileExpanded)}
          className="px-8 py-3.5 bg-secondary hover:bg-secondary-light text-primary font-bold rounded-full shadow-xl active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 mx-auto tracking-wider text-sm uppercase font-heading"
        >
          {isMobileExpanded 
            ? (language === 'en' ? 'Show Less' : 'कमी पहा')
            : (language === 'en' ? 'View More' : 'अधिक पहा')}
        </button>
      </div>

      {/* Fullscreen Video Overlay */}
      {selectedVideo && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
        >
          <button 
            onClick={() => {
              setSelectedVideo(null);
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

      {/* Decorative edges (Preserved conditionally for marquee slider mode) */}
      <div className={`${isMobileExpanded ? 'hidden md:block' : 'block'} absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary to-transparent z-20 pointer-events-none`}></div>
      <div className={`${isMobileExpanded ? 'hidden md:block' : 'block'} absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary to-transparent z-20 pointer-events-none`}></div>
    </section>
  );
};

export default Reviews;
