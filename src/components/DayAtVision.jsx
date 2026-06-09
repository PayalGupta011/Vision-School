import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function DayAtVision() {
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef(null);

  const pause = useCallback(() => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    setPaused(true);
  }, []);

  const resume = useCallback(() => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    setPaused(false);
  }, []);

  // Mobile: tap to pause, auto-resume after 2.5s
  const handleTouchStart = useCallback(() => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    setPaused(true);
    resumeTimer.current = setTimeout(() => setPaused(false), 2500);
  }, []);

  const steps = [
    {
      time: "08:00 AM",
      title: "Morning Assembly",
      description: "A positive start to a joyful day",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=850",
      color: "#031D95"
    },
    {
      time: "09:30 AM",
      title: "Creative Learning",
      description: "Exploring creativity through activities",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=850",
      color: "#FD7201"
    },
    {
      time: "11:00 AM",
      title: "Play Time",
      description: "Indoor & outdoor play for active minds",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=850",
      color: "#10B981"
    },
    {
      time: "12:30 PM",
      title: "Smart Learning",
      description: "Fun with numbers, letters & concepts",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=850",
      color: "#8B5CF6"
    },
    {
      time: "02:00 PM",
      title: "Sports Activity",
      description: "Building strength, teamwork & fitness",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=850",
      color: "#EF4444"
    },
    {
      time: "03:30 PM",
      title: "Home Time",
      description: "Ending the day with smiles & memories",
      image: "https://images.unsplash.com/photo-1587554801471-37976a256db0?auto=format&fit=crop&q=80&w=850",
      color: "#F59E0B"
    }
  ];

  // Duplicate for seamless infinite loop
  const allSteps = [...steps, ...steps, ...steps];

  return (
    <section 
      id="day-at-vision" 
      className="relative py-24 sm:py-32 w-full bg-white overflow-hidden border-t border-slate-100"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-[20%] left-[-5%] w-72 h-72 bg-orange-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-72 h-72 bg-sky-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-16 sm:mb-20">
        <div className="text-center max-w-3xl mx-auto space-y-2 relative">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-primary font-sans text-lg font-semibold uppercase tracking-wider block"
          >
            A Day At
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-primary font-sans font-black text-4xl sm:text-5xl tracking-tight"
          >
            Vision <span className="text-orange-accent">Play School</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 font-sans text-sm mt-2"
          >
            Hover over a card to pause the carousel
          </motion.p>
        </div>
      </div>

      {/* Infinite Marquee Slider — no max-w, extends edge to edge */}
      <div
        className="relative w-full overflow-hidden"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}
      >
        <div
          className="marquee-track flex gap-10 items-start w-max"
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
          onMouseEnter={pause}
          onMouseLeave={resume}
          onTouchStart={handleTouchStart}
          onTouchEnd={resume}
          onTouchCancel={resume}
        >
          {allSteps.map((step, idx) => (
            <React.Fragment key={idx}>
              {/* Card */}
              <div
                className="flex-shrink-0 flex flex-col items-center text-center space-y-4 w-44 cursor-default group/card"
              >
                {/* Circular Image */}
                <div
                  className="relative w-36 h-36 rounded-full overflow-hidden shadow-xl transition-all duration-500 group-hover/card:scale-110 group-hover/card:shadow-2xl"
                  style={{ border: `4px solid ${step.color}` }}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2"
                    style={{ background: `linear-gradient(to top, ${step.color}cc, transparent)` }}
                  >
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">{step.time}</span>
                  </div>
                </div>

                {/* Time badge */}
                <span
                  className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase text-white shadow-sm"
                  style={{ backgroundColor: step.color }}
                >
                  {step.time}
                </span>

                {/* Title & Description */}
                <div className="space-y-1">
                  <h3 className="text-primary font-sans font-bold text-sm tracking-tight leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 font-sans text-xs max-w-[140px] mx-auto leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow separator (except after last clone item) */}
              {idx % steps.length !== steps.length - 1 && (
                <div className="flex-shrink-0 self-center text-orange-accent/50 text-2xl font-bold select-none mt-[-20px]">
                  →
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Marquee animation CSS injected inline via style tag */}
      <style>{`
        .marquee-track {
          animation: marquee-scroll 28s linear infinite;
        }
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
