import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, ArrowRight, BookOpen, GraduationCap, Palette, Trophy } from 'lucide-react';
import bgImg from '../assets/hero-bg.jpg';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const revealVariants = {
    hidden: { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
    visible: {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const floatItems = [
    { icon: <BookOpen className="w-6 h-6 text-sky-accent" />, className: "top-[18%] left-[8%] bg-white/20 animate-float-slow" },
    { icon: <GraduationCap className="w-8 h-8 text-orange-accent" />, className: "top-[22%] right-[14%] bg-white/25 animate-float-medium" },
    { icon: <Palette className="w-7 h-7 text-sky-accent" />, className: "bottom-[32%] left-[12%] bg-white/15 animate-float-fast" },
    { icon: <Trophy className="w-6 h-6 text-orange-accent" />, className: "bottom-[38%] right-[18%] bg-white/20 animate-float-slow" }
  ];

  const handleScrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen lg:h-[115vh] w-full flex items-center overflow-hidden bg-primary"
    >
      {/* Cinematic Background Image with Parallax & Glares */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat transition-transform scale-118 duration-1000"
          style={{ 
            backgroundImage: `url(${bgImg})`,
            backgroundPosition: '68% 26%'
          }}
        />
        {/* Gradients for text contrast and blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-black/10" />
      </div>

      {/* Floating Decorative Items */}
      {floatItems.map((item, index) => (
        <div 
          key={index}
          className={`absolute p-3.5 rounded-2xl border border-white/15 backdrop-blur-md shadow-lg hidden md:flex items-center justify-center z-10 select-none ${item.className}`}
        >
          {item.icon}
        </div>
      ))}

      {/* Floating social links on the right */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 flex flex-col gap-4 hidden md:flex">
        <a 
          href="https://www.instagram.com/visionplay_school" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white transition-all hover:scale-115 shadow-md border border-white/20"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a 
          href="https://www.facebook.com/share/1BMJqwhUvu/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white transition-all hover:scale-115 shadow-md border border-white/20"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
          </svg>
        </a>
        <a 
          href="https://wa.me/917987165487" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white transition-all hover:scale-115 shadow-md border border-white/20"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.197-1.36a9.994 9.994 0 0 0 4.814 1.23c5.507 0 9.99-4.478 9.99-9.984 0-2.67-1.037-5.18-2.92-7.062A9.925 9.925 0 0 0 12.012 2zm5.72 14.103c-.313.882-1.815 1.72-2.483 1.83-.564.09-1.282.166-3.805-.83-3.23-1.272-5.263-4.57-5.424-4.786-.16-.215-1.303-1.734-1.303-3.308 0-1.575.823-2.35 1.116-2.652.29-.302.643-.377.857-.377.213 0 .427.001.613.009.192.008.45-.072.702.535.253.608.868 2.109.943 2.26.074.15.125.327.025.528-.1.201-.15.326-.3.502-.15.176-.316.393-.45.527-.15.15-.308.314-.133.614.175.3.777 1.28 1.66 2.067.882.787 1.628 1.03 1.928 1.18.3.15.475.126.653-.075.179-.2.776-.905.987-1.214.21-.309.42-.258.706-.15.285.107 1.81.854 2.12.1.008 3.125.31 4.675-.1.528-.413-.93-.831-.776-.91-.12z" />
          </svg>
        </a>
      </div>

      {/* Main Hero Container Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left flex flex-col lg:flex-row items-center justify-between w-full h-full pt-28 pb-16">
        
        {/* Left Side Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:max-w-3xl space-y-6"
        >
          {/* Headline Reveal */}
          <div className="space-y-2">
            <motion.span 
              variants={revealVariants}
              className="font-handwritten text-orange-accent text-3xl sm:text-4xl md:text-5xl block select-none"
            >
              Childhood Is Not A Race,
            </motion.span>
            <motion.h1 
              variants={revealVariants}
              className="text-white font-sans font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.1]"
            >
              It's A Journey<br/>Of <span className="text-sky-accent">Discovery.</span>
            </motion.h1>
          </div>

          {/* Subtext */}
          <motion.p 
            variants={textVariants}
            className="text-white/90 font-sans max-w-xl text-lg sm:text-xl font-light leading-relaxed"
          >
            Where confidence, creativity and curiosity grow every day through play-based learning.
          </motion.p>

          {/* Call to Actions */}
          <motion.div 
            variants={textVariants}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <button
              onClick={() => handleScrollTo('#why-choose-us')}
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold rounded-full text-white bg-orange-accent hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5 cursor-pointer"
            >
              Explore Vision <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button
              onClick={() => handleScrollTo('#virtual-tour')}
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold rounded-full text-white hover:text-sky-accent transition-all duration-300 cursor-pointer group gap-2"
            >
              <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center group-hover:border-sky-accent bg-white/10 group-hover:bg-white/20 transition-all">
                <svg className="w-3 h-3 fill-white group-hover:fill-sky-accent ml-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              Watch Our Story
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Sticky Post-It Note */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 6 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative bg-[#FFFEE0] p-6 pt-9 pb-5 shadow-2xl border border-yellow-200/50 max-w-[260px] font-handwritten text-slate-800 text-2xl hidden lg:block rounded-sm self-center justify-self-end mt-12 lg:mr-24"
        >
          {/* Tape at top */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-white/40 backdrop-blur-sm -rotate-2 border-l border-r border-slate-300/10 shadow-sm" />
          {/* Smiley top right */}
          <span className="absolute top-2 right-2 text-xl filter saturate-50 select-none">😊</span>
          <p className="text-center leading-relaxed text-slate-700 select-none font-semibold">
            A happy child today, a confident learner tomorrow.
          </p>
          <div className="mt-3 text-center text-red-500 font-bold text-3xl select-none animate-pulse-subtle">
            &hearts;
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Down Indicator (bottom left) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-24 left-8 z-20 cursor-pointer text-white/70 hover:text-white transition-colors flex items-center gap-2.5 hidden md:flex"
        onClick={() => handleScrollTo('#why-choose-us')}
      >
        <div className="w-5 h-8 border-2 border-white/70 rounded-full flex justify-center pt-1.5">
          <motion.div 
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1.5 bg-white rounded-full"
          />
        </div>
        <span className="text-[11px] tracking-widest uppercase font-sans font-semibold">Scroll Down</span>
      </motion.div>

      {/* SVG Wavy Bottom Divider with Educational Doodles */}
      <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none select-none">
        <svg 
          viewBox="0 0 1440 180" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto min-h-[80px] md:min-h-[140px] lg:min-h-[180px] -mb-1"
          preserveAspectRatio="none"
        >
          {/* Wave Path */}
          <path 
            d="M0,120 C150,170 350,170 500,130 C700,80 950,160 1200,150 C1320,145 1380,110 1440,95 L1440,180 L0,180 Z" 
            fill="#f8fafc" 
          />
          
          {/* Graduation Cap Doodle */}
          <g transform="translate(48, 122) scale(1.2)">
            <motion.g 
              animate={{ 
                y: [0, -6, 0],
                rotate: [-15, -10, -15]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ originX: 0.5, originY: 0.5 }}
            >
              <path
                d="M 12 5 L 22 10 L 12 15 L 2 10 Z"
                stroke="#79DAFD"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M 6 12 L 6 16 C 6 19, 18 19, 18 16 L 18 12"
                stroke="#79DAFD"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M 22 10 L 22 17"
                stroke="#79DAFD"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="22" cy="17" r="1.5" fill="#79DAFD" />
            </motion.g>
          </g>
          
          <path
            d="M 65 145 C 100 160, 130 150, 140 135 C 150 120, 130 110, 110 125 C 90 140, 120 160, 150 155"
            stroke="#79DAFD"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            fill="none"
          />
          
          <g transform="translate(165, 145) scale(0.8)">
            <path
              d="M 0,-5 L 1.5,-1.5 L 5,0 L 1.5,1.5 L 0,5 L -1.5,1.5 L -5,0 L -1.5,-1.5 Z"
              fill="#FD7201"
            />
          </g>
          
          {/* Paper Plane Doodle */}
          <g transform="translate(1330, 110) scale(1.3)">
            <motion.g 
              animate={{ 
                y: [0, -8, 0],
                x: [0, 5, 0],
                rotate: [-10, -5, -10]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ originX: 0.5, originY: 0.5 }}
            >
              <path
                d="M 2 12 L 22 2 L 14 18 L 11 13 Z"
                stroke="#79DAFD"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M 11 13 L 22 2"
                stroke="#79DAFD"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M 11 13 L 8 16 L 8 12"
                stroke="#79DAFD"
                strokeWidth="1.5"
                fill="none"
              />
            </motion.g>
          </g>
          
          <path
            d="M 1250 150 C 1270 130, 1290 120, 1300 135 C 1310 150, 1290 160, 1270 145 C 1250 130, 1270 110, 1310 120"
            stroke="#79DAFD"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            fill="none"
          />
          
          <g transform="translate(1200, 145) scale(0.8)">
            <path
              d="M 0,-5 L 1.5,-1.5 L 5,0 L 1.5,1.5 L 0,5 L -1.5,1.5 L -5,0 L -1.5,-1.5 Z"
              fill="#FD7201"
            />
          </g>
        </svg>
      </div>
    </section>
  );
}
