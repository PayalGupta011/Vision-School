import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Info, X, Compass, ChevronRight, School } from 'lucide-react';

export default function VirtualTour() {
  const [activeSpot, setActiveSpot] = useState(null);

  const hotspots = [
    {
      id: "classroom",
      name: "Interactive Classroom",
      x: "28%",
      y: "35%",
      title: "Smart Classroom",
      description: "Equipped with child-friendly digital touch boards, comfortable modular furniture, and interactive play kits designed to stimulate critical thinking and cooperation.",
      features: ["Interactive Smart Screen", "Safe Rounded Desks", "Numeric & Alphabet Blocks"],
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
      bgOffset: "scale-150 origin-[28%_35%]"
    },
    {
      id: "activity-room",
      name: "Creative Activity Hub",
      x: "72%",
      y: "28%",
      title: "Activity & Art Room",
      description: "A dynamic studio dedicated to crafts, sensory games, clay shaping, and painting. Designed to let kids mess around and learn through visual and physical experiments.",
      features: ["Art Supplies Corner", "Safe Clay Zone", "Sensory Play Tubs"],
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
      bgOffset: "scale-150 origin-[72%_28%]"
    },
    {
      id: "playground",
      name: "Safe Outdoor Playground",
      x: "45%",
      y: "65%",
      title: "Adventure Playground",
      description: "A completely padded, gated, and secure outdoor area where toddlers run, climb, swing, and build team values under direct supervision.",
      features: ["Anti-Injury Padded Turf", "Kid-Safe Slide Towers", "Guided Fitness Mini Games"],
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800",
      bgOffset: "scale-150 origin-[45%_65%]"
    },
    {
      id: "library",
      name: "Story & Discovery Library",
      x: "80%",
      y: "72%",
      title: "Storytelling Library",
      description: "A quiet, cozy reading room filled with colorful picture books, global tales, and audiobooks. Encourages reading habits from day one.",
      features: ["Comfortable Cushion Pods", "500+ Board & Picture Books", "Audiobook Listening Center"],
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800",
      bgOffset: "scale-150 origin-[80%_72%]"
    }
  ];

  return (
    <section 
      id="virtual-tour" 
      className="relative min-h-screen py-24 sm:py-32 w-full flex flex-col justify-center bg-slate-50 border-t border-slate-100 overflow-hidden"
    >
      {/* Decorative vectors */}
      <div className="absolute top-[10%] left-[5%] w-80 h-80 bg-sky-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary font-sans text-xs font-semibold uppercase tracking-wider">
            Explore Campus
          </span>
          <h2 className="text-primary font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Take A Virtual School Tour
          </h2>
          <p className="text-slate-600 font-sans text-lg">
            Click on the pulsing map hotspots to zoom into different corners of our premium campus and see where your child's confidence grows.
          </p>
        </div>

        {/* Map Sandbox Interactive Layout */}
        <div className="relative w-full max-w-5xl aspect-[16/9] rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl bg-slate-100 select-none">
          
          {/* Animated Background Layout representing building */}
          <div 
            className={`w-full h-full bg-slate-800 transition-all duration-1000 ease-out flex items-center justify-center relative ${
              activeSpot 
                ? hotspots.find(h => h.id === activeSpot)?.bgOffset 
                : 'scale-100'
            }`}
          >
            {/* Styled Isometric Map Blueprint Drawing using SVGs and background styles */}
            <div className="absolute inset-0 bg-slate-900 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
            
            {/* Visual Floor Plan Shapes */}
            <svg viewBox="0 0 1000 562" className="w-full h-full fill-none stroke-sky-accent/30 stroke-[2] z-0 opacity-80">
              {/* Classroom block */}
              <rect x="150" y="80" width="300" height="200" rx="16" fill="rgba(3,29,149,0.2)" />
              <text x="300" y="180" textAnchor="middle" className="fill-sky-accent/50 font-sans font-semibold text-sm tracking-widest">CLASSROOM BLOCK</text>
              
              {/* Activity block */}
              <rect x="580" y="60" width="280" height="180" rx="16" fill="rgba(3,29,149,0.2)" />
              <text x="720" y="150" textAnchor="middle" className="fill-sky-accent/50 font-sans font-semibold text-sm tracking-widest">ACTIVITY STUDIO</text>
              
              {/* Playground lawn */}
              <circle cx="450" cy="400" r="120" fill="rgba(253,114,1,0.05)" className="stroke-orange-accent/20" />
              <text x="450" y="400" textAnchor="middle" className="fill-orange-accent/40 font-sans font-semibold text-sm tracking-widest">OUTDOOR PLAYGROUND</text>
              
              {/* Library */}
              <rect x="680" y="340" width="220" height="160" rx="16" fill="rgba(3,29,149,0.2)" />
              <text x="790" y="420" textAnchor="middle" className="fill-sky-accent/50 font-sans font-semibold text-sm tracking-widest">LIBRARY POD</text>
            </svg>

            {/* Compass rose icon overlay */}
            <div className="absolute bottom-6 left-6 text-white/20 flex items-center gap-2 pointer-events-none">
              <Compass className="w-10 h-10 animate-spin-slow" />
              <span className="text-xs uppercase tracking-widest font-sans font-semibold">Vision Map V1.0</span>
            </div>
          </div>

          {/* Interactive target Hotspots pins */}
          {!activeSpot && hotspots.map((spot) => (
            <button
              key={spot.id}
              onClick={() => setActiveSpot(spot.id)}
              className="absolute z-20 flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-110"
              style={{ top: spot.y, left: spot.x, transform: 'translate(-50%, -50%)' }}
            >
              {/* Label */}
              <span className="mb-2 bg-primary/95 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20 shadow-lg font-sans opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {spot.name}
              </span>
              {/* Pulsing Target Dot */}
              <div className="relative flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-orange-accent opacity-75" />
                <span className="absolute inline-flex h-6 w-6 rounded-full bg-orange-accent/50" />
                <div className="relative p-2.5 rounded-full bg-orange-accent text-white shadow-xl hover:bg-orange-600 transition-colors">
                  <MapPin className="w-4 h-4 fill-white" />
                </div>
              </div>
            </button>
          ))}

          {/* Info Card Drawer overlay when activeSpot is chosen */}
          <AnimatePresence>
            {activeSpot && (
              <>
                {/* Mobile/Tablet Backdrop Blur Overlay */}
                <div 
                  className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
                  onClick={() => setActiveSpot(null)}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-4 max-w-md max-h-[80vh] m-auto lg:absolute lg:inset-auto lg:left-6 lg:top-6 lg:bottom-6 lg:w-96 z-50 lg:z-30 flex flex-col bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden"
                >
                {/* Visual Header */}
                <div className="relative h-44 bg-slate-100">
                  <img 
                    src={hotspots.find(h => h.id === activeSpot)?.image} 
                    alt={hotspots.find(h => h.id === activeSpot)?.title} 
                    className="w-full h-full object-cover"
                  />
                  {/* Close button */}
                  <button
                    onClick={() => setActiveSpot(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white shadow-lg transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Details Body */}
                <div className="flex-1 p-6 flex flex-col justify-between overflow-y-auto">
                  <div className="space-y-4">
                    <h3 className="text-primary font-sans font-extrabold text-2xl tracking-tight">
                      {hotspots.find(h => h.id === activeSpot)?.title}
                    </h3>
                    <p className="text-slate-600 font-sans text-sm leading-relaxed">
                      {hotspots.find(h => h.id === activeSpot)?.description}
                    </p>
                    
                    {/* List Features */}
                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400">Key Features:</h4>
                      <ul className="space-y-1.5">
                        {hotspots.find(h => h.id === activeSpot)?.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2 text-slate-700 text-sm">
                            <ChevronRight className="w-4 h-4 text-orange-accent" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveSpot(null)}
                    className="w-full mt-6 py-3 bg-primary hover:bg-primary/95 text-white text-sm font-bold rounded-xl transition-all shadow-md active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <School className="w-4 h-4" /> Return to Map View
                  </button>
                </div>
              </motion.div>
              </>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
