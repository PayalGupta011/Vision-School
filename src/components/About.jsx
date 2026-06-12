import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Award, Shield, CheckCircle, GraduationCap, Compass, BookOpen } from 'lucide-react';
import './About.css';

export default function About() {
  const [activePower, setActivePower] = useState('creative');

  const superpowers = {
    creative: {
      title: 'Play-Based Creativity',
      emoji: '🎨',
      color: '#FD7201',
      desc: 'We leverage early imaginative play, clay modeling, messy painting, and puppet story times to unlock organic self-expression and motor coordinates.',
      focus: ['Finger Painting & Textures', 'Play-dough Sculpting', 'Imaginative Story Drama', 'Simple Musical Rhythms']
    },
    curious: {
      title: 'Scientific Curiosity',
      emoji: '🧠',
      color: '#031D95',
      focusBg: 'bg-primary/10',
      desc: 'We introduce children to math logic blocks, basic plant life cycles, weather wheels, and animal classification to feed their endless natural "why" questions.',
      focus: ['Math Counting Trays', 'Junior Nature Gardening', 'Weather & Time Tracking', 'Simple Science Experiments']
    },
    social: {
      title: 'Empathetic Confidence',
      emoji: '🤝',
      color: '#10B981',
      desc: 'Through structured circle times, sharing toys, collaborative sandbox building, and group drama, children build solid communication and empathy.',
      focus: ['Empathy Circle-Time', 'Collaborative Team Play', 'Junior Speaking Practice', 'Kindness Award Badges']
    },
    physical: {
      title: 'Active Play & Health',
      emoji: '🏃',
      color: '#8B5CF6',
      desc: 'Active outdoor tunnels, balance beams, ring tossing, and target-throwing games develop physical agility, coordination, and team sportsmanship.',
      focus: ['Tricycle & Tunnel Tracks', 'Balance Beam Exercises', 'Yoga & Stretching Labs', 'Active Sports Carnivals']
    }
  };

  const schoolHighlights = [
    {
      icon: <Shield className="w-5 h-5 text-orange-accent" />,
      title: 'Child-Safe Campus',
      desc: 'Entire campus is CCTV-monitored with child-proof infrastructure and restricted secure entryways.'
    },
    {
      icon: <Heart className="w-5 h-5 text-[#10B981]" />,
      title: 'Caring Mentors',
      desc: 'Our teachers undergo background checks and continuous training in early childhood logic systems.'
    },
    {
      icon: <Award className="w-5 h-5 text-sky-accent" />,
      title: 'Verified Curriculum',
      desc: 'Our syllabus blends standard Kindergarten guidelines with modern sensory-play logic.'
    }
  ];

  return (
    <div className="about-page-container pt-28 pb-16 px-4 md:px-8 relative" id="about">
      
      {/* Decorative notebook doodles */}
      <span className="floating-doodle doodle-1">🌸</span>
      <span className="floating-doodle doodle-2">🎈</span>
      <span className="floating-doodle doodle-3">✨</span>
      <span className="floating-doodle doodle-4">⭐</span>

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="playful-cloud-badge"
          >
            <Compass className="w-4 h-4 text-orange-accent animate-pulse" /> OUR STORY & MISSION
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-primary tracking-tight leading-none"
          >
            Welcome to Our <br />
            <span className="text-orange-accent relative inline-block">Vision Family<span className="absolute bottom-[-6px] left-0 w-full h-[6px] bg-orange-accent/30 rounded-full" /></span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.25 }}
            className="text-slate-600 font-sans text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            At Vision Play School, we believe that education is not about filling a bucket, but lighting a fire. We nurture children from Playgroup through elementary grades in a loving, creative, and highly secure environment.
          </motion.p>
        </div>

        {/* Polaroid Building Section & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left: Polaroid School entrance photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="lg:col-span-6 relative flex justify-center lg:pr-8"
          >
            <div className="sticky-tape" />
            <div className="scrapbook-polaroid w-full max-w-[460px]">
              <div className="w-full h-80 rounded-lg overflow-hidden bg-slate-100 border border-slate-100">
                <img 
                  src="/school-front.jpg" 
                  alt="Vision Play School Campus Building Entrance" 
                  className="w-full h-full object-cover shadow-inner transition-transform duration-700 hover:scale-103"
                />
              </div>
              <div className="pt-4 px-1 text-center">
                <span className="font-handwritten text-slate-700 text-2xl font-bold leading-none block">
                  Our Banjaritola Campus Entrance 🏫✨
                </span>
                <span className="text-slate-400 font-sans text-[10px] tracking-wider uppercase block mt-1.5 font-bold">
                  Vision Play School, Malanjkhand
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Vision Statements & Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 text-left space-y-6"
          >
            <div className="space-y-2">
              <span className="font-handwritten text-orange-accent text-3xl font-bold">Excellence Through Education</span>
              <h2 className="text-primary font-sans font-black text-3xl tracking-tight leading-none">
                Nurturing Confidence, Creativity & Curiosity
              </h2>
            </div>
            
            <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed font-light">
              Vision Play School was established to offer Banjaritola, Malanjkhand a premium preschool-to-middle school educational experience. We blend play-based cognitive development with logical arithmetic modules to make early school years joyful, social, and academically rich.
            </p>

            <div className="space-y-4 pt-2">
              {schoolHighlights.map((hl) => (
                <div key={hl.title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                    {hl.icon}
                  </div>
                  <div>
                    <h4 className="text-slate-800 font-sans font-bold text-sm leading-snug">{hl.title}</h4>
                    <p className="text-slate-500 font-sans text-xs mt-0.5 leading-relaxed">{hl.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Playful Interactive Sandbox Widget */}
        <div className="notebook-page-section school-grid-paper border-b-4 border-[#cbd5e1] mb-12">
          
          <div className="flex flex-col lg:flex-row items-stretch gap-10">
            
            {/* Widget Left column: Selection */}
            <div className="lg:w-5/12 flex flex-col justify-between text-left space-y-6">
              <div>
                <span className="playful-cloud-badge mb-4">🔮 CHOOSE & DISCOVER</span>
                <h3 className="text-primary font-sans font-black text-2xl tracking-tight leading-none">
                  Core Foundations
                </h3>
                <p className="text-slate-500 font-sans text-xs mt-1.5 max-w-sm">
                  Click on our core pedagogical pillars below to explore how we nurture different facets of your child's growth.
                </p>
              </div>

              <div className="flex flex-col gap-3.5 pt-2">
                {Object.keys(superpowers).map((key) => {
                  const item = superpowers[key];
                  const isActive = activePower === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActivePower(key)}
                      className={`superpower-btn ${isActive ? 'active-power' : ''}`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="text-2xl">{item.emoji}</span>
                        <div>
                          <h4 className="text-slate-800 font-sans font-bold text-sm">{item.title}</h4>
                          <span className="text-[10px] text-slate-400 font-sans tracking-wide uppercase">
                            Explore Pedagogy
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Widget Right column: Dynamic Display */}
            <div className="lg:w-7/12 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePower}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-50/70 border border-slate-100 rounded-3xl p-6 sm:p-8 text-left space-y-6 shadow-inner"
                >
                  <div className="flex items-center justify-between border-b border-dashed border-slate-200 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl select-none">{superpowers[activePower].emoji}</span>
                      <h4 className="text-primary font-sans font-extrabold text-lg sm:text-xl">
                        {superpowers[activePower].title}
                      </h4>
                    </div>
                    <Sparkles className="w-5 h-5 text-orange-accent animate-pulse" />
                  </div>

                  <p className="text-slate-700 font-sans text-sm sm:text-base leading-relaxed">
                    {superpowers[activePower].desc}
                  </p>

                  <div className="space-y-3 pt-2">
                    <span className="font-sans font-extrabold text-xs text-slate-400 uppercase tracking-widest block">
                      📌 Classroom Focus Areas:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {superpowers[activePower].focus.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-700 font-sans text-xs">
                          <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-dashed border-slate-200 text-left">
                    <p className="font-handwritten text-slate-500 text-lg leading-relaxed italic">
                      "We design toys, books, and playground tools specifically around this area to let children learn at their own developmental pace."
                    </p>
                    <span className="font-sans text-[10px] font-bold text-primary uppercase tracking-wide block mt-1.5">
                      — Vision Academic Committee
                    </span>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
