import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import logoImg from './assets/logo.png';

// Lazy-loaded subcomponents for route chunking
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const DayAtVision = lazy(() => import('./components/DayAtVision'));
const Gallery = lazy(() => import('./components/Gallery'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const VirtualTour = lazy(() => import('./components/VirtualTour'));
const Admission = lazy(() => import('./components/Admission'));
const Contact = lazy(() => import('./components/Contact'));
const About = lazy(() => import('./components/About'));
const Enquiry = lazy(() => import('./components/Enquiry'));

// Skeleton loader fallback component
function SectionSkeleton({ title }) {
  return (
    <div className="w-full min-h-[50vh] flex flex-col items-center justify-center py-20 px-4 bg-slate-50 border-t border-slate-100 select-none">
      <div className="max-w-md w-full space-y-6 text-center flex flex-col items-center">
        {/* Pulsing visual bubble with brand logo (matching preloader size) */}
        <div className="relative flex items-center justify-center" style={{ width: 'clamp(150px, 25vw, 220px)', height: 'clamp(150px, 25vw, 220px)' }}>
          {/* Dashed rotating spinner (skeleton version) */}
          <div 
            className="absolute rounded-full border-4 border-dashed border-slate-200 animate-spin" 
            style={{ width: 'clamp(150px, 25vw, 220px)', height: 'clamp(150px, 25vw, 220px)', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, margin: 'auto', animationDuration: '10s' }} 
          />
          {/* Logo bubble */}
          <div 
            className="relative z-10 rounded-full border-4 border-white bg-white p-0 shadow-lg flex items-center justify-center overflow-hidden skeleton-pulse shrink-0"
            style={{ width: 'clamp(110px, 18vw, 160px)', height: 'clamp(110px, 18vw, 160px)' }}
          >
            <img
              src={logoImg}
              alt="Vision Play School Logo"
              className="w-[90%] h-[90%] object-cover opacity-85 rounded-full shrink-0"
            />
          </div>
        </div>
        
        {/* Pulsing text fields */}
        <div className="w-full space-y-3 pt-4">
          <div className="h-6 w-3/4 bg-slate-200 rounded mx-auto skeleton-pulse" />
          <div className="h-4 w-1/2 bg-slate-200 rounded mx-auto skeleton-pulse" />
        </div>
      </div>
    </div>
  );
}

// Full page animated loading preloader
function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary select-none overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-accent/15 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-accent/15 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
      
      <div className="relative flex flex-col items-center space-y-8">
        {/* Animated logo container */}
        <div className="relative flex items-center justify-center" style={{ width: 'clamp(150px, 25vw, 220px)', height: 'clamp(150px, 25vw, 220px)' }}>
          {/* Dashed rotating spinner */}
          <motion.div
            animate={{ scale: [0.95, 1.05, 0.95], rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="absolute rounded-full border-4 border-dashed border-white/20"
            style={{ width: 'clamp(150px, 25vw, 220px)', height: 'clamp(150px, 25vw, 220px)', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, margin: 'auto' }}
          />
          {/* Outer breathing ring */}
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="absolute rounded-full border-2 border-orange-accent/30"
            style={{ width: 'clamp(170px, 28vw, 240px)', height: 'clamp(170px, 28vw, 240px)', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, margin: 'auto' }}
          />
          
          {/* Logo bubble with spring intro */}
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, type: "spring", stiffness: 110 }}
            className="relative z-10 rounded-full border-4 border-white bg-white p-0 shadow-2xl flex items-center justify-center overflow-hidden"
            style={{ width: 'clamp(110px, 18vw, 160px)', height: 'clamp(110px, 18vw, 160px)' }}
          >
            <motion.img
              src={logoImg}
              alt="Vision Play School Logo"
              className="w-[90%] h-[90%] object-cover rounded-full"
              animate={{ rotate: [0, 4, -4, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        {/* Brand name & text loader */}
        <div className="text-center space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-white font-sans font-black text-2xl sm:text-3xl tracking-wide uppercase"
          >
            Vision Play School
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ delay: 0.6 }}
            className="text-white/80 font-sans text-xs tracking-widest uppercase font-semibold flex items-center justify-center gap-1.5"
          >
            A world of discovery
            <span className="flex gap-1 items-center justify-center">
              <motion.span animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0 }} className="w-1.5 h-1.5 bg-orange-accent rounded-full" />
              <motion.span animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.3 }} className="w-1.5 h-1.5 bg-white rounded-full" />
              <motion.span animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.6 }} className="w-1.5 h-1.5 bg-sky-accent rounded-full" />
            </span>
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  useEffect(() => {
    // Scroll to hash on page navigation if on home page
    if (currentPath === '/') {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0 });
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [currentPath]);

  const renderContent = () => {
    switch (currentPath) {
      case '/gallery':
        return (
          <Suspense fallback={<SectionSkeleton title="Gallery" />}>
            <div className="pt-24 min-h-[70vh]">
              <Gallery />
            </div>
          </Suspense>
        );
      case '/activities':
        return (
          <Suspense fallback={<SectionSkeleton title="A Day at Vision" />}>
            <div className="pt-24 min-h-[70vh]">
              <DayAtVision />
            </div>
          </Suspense>
        );
      case '/programs':
        return (
          <Suspense fallback={<SectionSkeleton title="Why Choose Us" />}>
            <div className="pt-24 min-h-[70vh]">
              <WhyChooseUs />
            </div>
          </Suspense>
        );
      case '/admission':
        return (
          <Suspense fallback={<SectionSkeleton title="Admissions Open" />}>
            <div className="pt-24 min-h-[70vh]">
              <Admission />
            </div>
          </Suspense>
        );
      case '/contact':
        return (
          <Suspense fallback={<SectionSkeleton title="Contact Us" />}>
            <Contact />
          </Suspense>
        );
      case '/about':
        return (
          <Suspense fallback={<SectionSkeleton title="About Us" />}>
            <About />
          </Suspense>
        );
      case '/enquiry':
        return (
          <Suspense fallback={<SectionSkeleton title="Enquire Now" />}>
            <Enquiry />
          </Suspense>
        );
      case '/':
      default:
        return (
          <>
            {/* Full-viewport Cinematic Hero */}
            <Hero />

            {/* Why Parents Choose Us Section */}
            <Suspense fallback={<SectionSkeleton title="Why Choose Us" />}>
              <WhyChooseUs />
            </Suspense>

            {/* A Day at Vision School Routines */}
            <Suspense fallback={<SectionSkeleton title="A Day at Vision" />}>
              <DayAtVision />
            </Suspense>

            {/* Moments Gallery Polaroid Grid */}
            <Suspense fallback={<SectionSkeleton title="Gallery" />}>
              <Gallery />
            </Suspense>

            {/* Parents reviews and feedback */}
            <Suspense fallback={<SectionSkeleton title="Testimonials" />}>
              <Testimonials />
            </Suspense>

            {/* Interactive Virtual Campus Map */}
            <Suspense fallback={<SectionSkeleton title="Virtual Tour" />}>
              <VirtualTour />
            </Suspense>

            {/* Admissions CTAs and contact details */}
            <Suspense fallback={<SectionSkeleton title="Admissions Open" />}>
              <Admission />
            </Suspense>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-white overflow-x-hidden antialiased">
      {/* Preloader full page screen animation overlay */}
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>
      {/* Global Navigation Header */}
      <Navbar />

      {/* Main Contents */}
      <main className="flex-1 w-full">
        {renderContent()}
      </main>

      {/* Global Footer Details */}
      <Footer />
    </div>
  );
}

export default App;
