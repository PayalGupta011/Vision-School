import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Lazy-loaded subcomponents for route chunking
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const DayAtVision = lazy(() => import('./components/DayAtVision'));
const Gallery = lazy(() => import('./components/Gallery'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const VirtualTour = lazy(() => import('./components/VirtualTour'));
const Admission = lazy(() => import('./components/Admission'));

// Skeleton loader fallback component
function SectionSkeleton({ title }) {
  return (
    <div className="w-full min-h-[50vh] flex flex-col items-center justify-center py-20 px-4 bg-slate-50 border-t border-slate-100 select-none">
      <div className="max-w-md w-full space-y-4 text-center">
        {/* Pulsing visual bubble */}
        <div className="w-16 h-16 bg-slate-200 rounded-full mx-auto skeleton-pulse" />
        {/* Pulsing text fields */}
        <div className="h-6 w-3/4 bg-slate-200 rounded mx-auto skeleton-pulse" />
        <div className="h-4 w-1/2 bg-slate-200 rounded mx-auto skeleton-pulse" />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white overflow-x-hidden antialiased">
      {/* Global Navigation Header */}
      <Navbar />

      {/* Main Single Page Contents */}
      <main className="flex-1 w-full">
        
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

      </main>

      {/* Global Footer Details */}
      <Footer />
    </div>
  );
}

export default App;
