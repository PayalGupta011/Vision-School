import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, Play, User, X, Film, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      text: "My daughter has become more confident and independent after joining Vision Play School.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300",
      rating: 5,
      videoPlaceholder: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      name: "Rahul Verma",
      text: "Teachers are very supportive and the environment is perfect for children.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      rating: 5,
      videoPlaceholder: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      name: "Neha Gupta",
      text: "Activities and celebrations here help kids learn with joy.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300",
      rating: 5,
      videoPlaceholder: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section 
      id="testimonials" 
      className="relative min-h-[60vh] py-24 sm:py-32 w-full bg-[#FAF6EE] overflow-hidden border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header with green arrows/doodles */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative flex items-center justify-center gap-4">
          <span className="text-sky-accent text-3xl select-none hidden md:block">&larr;&mdash;</span>
          <h2 className="text-primary font-sans font-black text-4xl sm:text-5xl tracking-tight">
            What Parents Say
          </h2>
          <span className="text-sky-accent text-3xl select-none hidden md:block">&mdash;&rarr;</span>
        </div>

        {/* 3 Cards Testimonial Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-100/80 transition-all duration-300 flex flex-col justify-between space-y-6 relative"
            >
              {/* Quote text */}
              <p className="text-slate-600 font-sans text-base leading-relaxed italic">
                "{item.text}"
              </p>

              {/* Bottom Row: Avatar & Stars */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  {/* Circle Video Avatar with play trigger */}
                  <div 
                    className="relative w-12 h-12 rounded-full overflow-hidden cursor-pointer group shadow-sm border border-slate-100 shrink-0"
                    onClick={() => setActiveVideo(item)}
                  >
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    {/* Play icon overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors">
                      <Play className="w-3.5 h-3.5 fill-white text-white" />
                    </div>
                  </div>
                  
                  {/* Name */}
                  <div>
                    <h4 className="font-sans font-bold text-sm text-primary">{item.name}</h4>
                    <span className="text-slate-400 text-[10px] uppercase tracking-wider block font-semibold">Verified Parent</span>
                  </div>
                </div>

                {/* Star rating */}
                <div className="flex gap-0.5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-accent text-orange-accent" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Simulated Video Modal Overlay */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#031D95]/95 backdrop-blur-sm"
          >
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setActiveVideo(null)} />
            
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-2xl w-full bg-slate-950 rounded-3xl overflow-hidden shadow-2xl z-10 aspect-video flex flex-col items-center justify-center text-center p-6 border border-white/10"
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-orange-accent/10 border border-orange-accent/30 text-orange-accent flex items-center justify-center mx-auto animate-pulse">
                  <Film className="w-8 h-8" />
                </div>
                <h3 className="text-white font-sans font-bold text-xl">Streaming {activeVideo.name}'s Review</h3>
                <p className="text-slate-400 font-sans text-sm max-w-sm">
                  Connecting to secure school review storage... 
                </p>
                <div className="w-48 h-1 bg-white/10 rounded-full mx-auto overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="h-full bg-orange-accent" 
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
