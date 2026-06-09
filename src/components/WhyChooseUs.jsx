import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, ToyBrick, ArrowRight, Smile } from 'lucide-react';

export default function WhyChooseUs() {
  const cards = [
    {
      id: 1,
      title: "Safe & Secure",
      description: "CCTV monitored campus with child-safe infrastructure.",
      image: "/safe-secure.svg",
      accent: "border-sky-accent",
      textColor: "text-primary",
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      tag: "Safe & Secure"
    },
    {
      id: 2,
      title: "Caring Teachers",
      description: "Experienced and loving teachers who nurture every child.",
      image: "/caring-teachers.svg",
      accent: "border-orange-accent",
      textColor: "text-orange-accent",
      icon: <Heart className="w-6 h-6 text-orange-accent" />,
      tag: "Caring Teachers"
    },
    {
      id: 3,
      title: "Activity-Based Learning",
      description: "Learn through play, explore and create every day.",
      image: "/activity-learning.svg",
      accent: "border-[#10B981]",
      textColor: "text-[#10B981]",
      icon: <ToyBrick className="w-6 h-6 text-[#10B981]" />,
      tag: "Activity-Based Learning"
    },
    {
      id: 4,
      title: "Happy & Confident Kids",
      description: "Building confidence, creativity and life skills.",
      image: "/happy-kids.svg",
      accent: "border-[#8B5CF6]",
      textColor: "text-[#8B5CF6]",
      icon: <Smile className="w-6 h-6 text-[#8B5CF6]" />,
      tag: "Happy & Confident Kids"
    }
  ];

  return (
    <section 
      id="why-choose-us" 
      className="relative min-h-screen py-24 sm:py-32 w-full flex flex-col justify-center bg-slate-50/70 border-t border-slate-100 overflow-hidden"
    >
      {/* Dynamic Background Accents */}
      <div className="absolute top-[10%] right-[5%] w-80 h-80 bg-sky-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-80 h-80 bg-orange-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-2 relative">
          {/* Hand-drawn stars/doodles near header */}
          <div className="absolute -top-6 left-[10%] text-yellow-400 text-2xl select-none hidden md:block">★</div>
          <div className="absolute -top-12 right-[12%] text-yellow-400 text-3xl select-none hidden md:block">★</div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-primary font-sans text-lg font-semibold uppercase tracking-wider block"
          >
            Why Parents Love
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-primary font-sans font-black text-4xl sm:text-5xl tracking-tight leading-tight"
          >
            Vision <span className="text-orange-accent relative inline-block">Play School?<span className="absolute bottom-[-6px] left-0 w-full h-[6px] bg-orange-accent/30 rounded-full" /></span>
          </motion.h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className={`group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 ${card.accent}`}
            >
              {/* Image Header with Tag */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                {card.image.endsWith('.svg') ? (
                  <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-700">
                    <svg viewBox="0 0 800 600" className="w-full h-full object-cover">
                      <defs>
                        <clipPath id={`playful-clip-card-${card.id}`}>
                          <rect x="10" y="10" width="780" height="580" rx="30" ry="30" />
                        </clipPath>
                      </defs>
                      <image href={card.image.replace('.svg', '.jpg')} width="800" height="600" preserveAspectRatio="xMidYMid slice" clipPath={`url(#playful-clip-card-${card.id})`} />
                      <circle cx="40" cy="40" r="12" fill="#FD7201" opacity="0.8" />
                      <circle cx="760" cy="40" r="8" fill="#031D95" opacity="0.8" />
                      <circle cx="760" cy="560" r="15" fill="#10B981" opacity="0.7" />
                      <circle cx="40" cy="560" r="10" fill="#8B5CF6" opacity="0.8" />
                      <rect x="10" y="10" width="780" height="580" rx="30" ry="30" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeDasharray="8 6" opacity="0.9" />
                    </svg>
                  </div>
                ) : (
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                {/* Visual Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Tag */}
                <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white bg-primary/80 backdrop-blur-sm shadow-sm pointer-events-none">
                  {card.tag}
                </span>

                {/* Floating Rounded Icon */}
                <div className="absolute bottom-4 right-4 p-2.5 rounded-full bg-white shadow-md flex items-center justify-center">
                  {card.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-primary font-sans font-bold text-lg tracking-tight group-hover:text-orange-accent transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 font-sans text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
