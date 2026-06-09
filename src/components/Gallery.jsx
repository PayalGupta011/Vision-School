import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'events', name: 'Events' },
    { id: 'activities', name: 'Activities' },
    { id: 'classroom', name: 'Classroom' },
    { id: 'celebrations', name: 'Celebrations' },
    { id: 'sports', name: 'Sports' },
    { id: 'nature', name: 'Nature' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Sports Day 2024",
      category: "sports",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800",
      rotation: "-rotate-3",
      label: "Sports Day 2024 🏆",
      date: "Nov 2024"
    },
    {
      id: 2,
      title: "Independence Day",
      category: "celebrations",
      image: "https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&q=80&w=800",
      rotation: "rotate-2",
      label: "Independence Day 🇮🇳",
      date: "Aug 2024"
    },
    {
      id: 3,
      title: "Fancy Dress Competition",
      category: "events",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800",
      rotation: "rotate-0",
      label: "Fancy Dress Competition 😊",
      date: "Dec 2024",
      sticker: "smiley"
    },
    {
      id: 4,
      title: "Plantation Drive",
      category: "nature",
      image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800",
      rotation: "rotate-3",
      label: "Plantation Drive 🌱",
      date: "Jul 2024"
    },
    {
      id: 5,
      title: "Art & Craft Activity",
      category: "activities",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
      rotation: "-rotate-2",
      label: "Art & Craft Activity 🎨",
      date: "Oct 2024",
      sticker: "flower"
    }
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const handleNext = () => {
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedImage(galleryItems[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedImage(galleryItems[prevIndex]);
  };

  return (
    <section
      id="gallery"
      className="relative min-h-screen py-24 sm:py-32 w-full bg-[#FAF6EE] overflow-hidden border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <h2 className="text-primary font-sans font-black text-4xl sm:text-5xl tracking-tight flex items-center justify-center gap-2.5">
            Moments That <span className="text-orange-accent relative">Matter <span className="absolute text-orange-accent text-3xl filter drop-shadow-sm ml-1 select-none animate-pulse-subtle">&hearts;</span></span>
          </h2>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-6 py-2 rounded-full font-sans text-sm font-bold tracking-wide transition-all shadow-sm hover:shadow active:scale-95 cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-primary text-white scale-105'
                  : 'bg-white text-slate-500 border border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Wooden Corkboard scrap-frame container */}
        <div className="bg-[#f3eedf] rounded-[40px] p-6 sm:p-10 shadow-inner border-8 border-[#e4dcc9] relative w-full flex flex-col items-center">
          
          {/* Cork board decoration pins/stickers */}
          <div className="absolute top-4 left-6 text-[#FD7201] text-3xl opacity-50 hidden md:block">★</div>
          <div className="absolute bottom-6 left-12 text-[#79DAFD] text-4xl opacity-50 hidden md:block">★</div>
          <div className="absolute top-6 right-10 text-yellow-400 text-3xl opacity-50 hidden md:block">★</div>

          {/* Polaroid Grid Layout - 5 columns on desktop */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 w-full z-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex justify-center"
                >
                  {/* Polaroid Frame container with paperclip */}
                  <div 
                    className={`relative polaroid-card cursor-pointer group w-full max-w-[220px] ${item.rotation}`}
                    onClick={() => setSelectedImage(item)}
                  >
                    {/* Paper clip SVG element */}
                    <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 z-10 w-7 h-10 pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity">
                      <svg viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
                        <path d="M12 2C6.47715 2 2 6.47715 2 12V36C2 41.5228 6.47715 46 12 46C17.5228 46 22 41.5228 22 36V16C22 11.5817 18.4183 8 14 8C9.58172 8 6 11.5817 6 16V34C6 36.2091 7.79086 38 10 38C12.2091 38 14 36.2091 14 34V16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16V32H8V16C8 13.7909 9.79086 12 12 12C14.2091 12 16 13.7909 16 16V34C16 37.3137 13.3137 40 10 40C6.68629 40 4 37.3137 4 34V12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12V36H22V12C22 6.47715 17.5228 2 12 2Z" fill="#94a3b8" />
                      </svg>
                    </div>

                    {/* Photo frame */}
                    <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="p-2.5 rounded-full bg-white/95 text-primary shadow-md flex items-center gap-1 text-[11px] font-bold transform scale-90 group-hover:scale-100 transition-transform">
                          <ImageIcon className="w-3.5 h-3.5 text-orange-accent" /> Zoom
                        </span>
                      </div>
                    </div>

                    {/* Polaroid text label */}
                    <div className="pt-4 pb-2 text-center flex flex-col items-center">
                      <span className="font-handwritten text-lg font-bold text-slate-800 tracking-wide">
                        {item.label}
                      </span>
                    </div>

                    {/* Mockup specific stickers */}
                    {item.sticker === 'smiley' && (
                      <span className="absolute bottom-2 right-2 text-xl select-none filter saturate-100 rotate-12">😊</span>
                    )}
                    {item.sticker === 'flower' && (
                      <span className="absolute bottom-2 left-2 text-xl select-none filter saturate-100 -rotate-12">🌸</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View Full Gallery bottom button */}
          <div className="mt-12 z-10">
            <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white bg-[#031D95] hover:bg-blue-900 transition-colors shadow-md font-bold text-sm cursor-pointer">
              View Full Gallery <span className="text-base">📋</span>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal Carousel Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/95 backdrop-blur-sm"
          >
            {/* Close button click overlay */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setSelectedImage(null)} />

            {/* Container box */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl z-10 p-4 sm:p-6"
            >
              {/* Top controls */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold text-white bg-orange-accent font-sans capitalize">
                    {selectedImage.category}
                  </span>
                  <span className="text-slate-400 text-xs font-sans">{selectedImage.date}</span>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Central slideshow content */}
              <div className="relative flex items-center justify-center group/nav">
                {/* Image */}
                <div className="aspect-[16/10] w-full bg-slate-50 rounded-2xl overflow-hidden flex items-center justify-center">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="max-h-[60vh] object-contain"
                  />
                </div>

                {/* Left/Right switches */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 p-3 rounded-full bg-white/90 shadow-lg border border-slate-100 text-primary hover:bg-white hover:scale-105 transition-all cursor-pointer opacity-0 group-hover/nav:opacity-100"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 p-3 rounded-full bg-white/90 shadow-lg border border-slate-100 text-primary hover:bg-white hover:scale-105 transition-all cursor-pointer opacity-0 group-hover/nav:opacity-100"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Footnotes */}
              <div className="pt-4 text-center">
                <h4 className="text-primary font-sans font-bold text-lg">{selectedImage.title}</h4>
                <p className="font-handwritten text-2xl font-bold text-slate-700 mt-1">{selectedImage.label}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
