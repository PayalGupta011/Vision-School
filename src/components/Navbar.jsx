import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', path: '/' },
    { name: 'About Us', href: '#about', path: '/about' },
    { name: 'Programs', href: '#why-choose-us', path: '/programs' },
    { name: 'Activities', href: '#day-at-vision', path: '/activities' },
    { name: 'Gallery', href: '#gallery', path: '/gallery' },
    { name: 'Admissions', href: '#admission', path: '/admission' },
    { name: 'Contact Us', href: '#contact', path: '/contact' }
  ];

  const handleNavClick = (e, path, hash) => {
    e.preventDefault();
    setIsOpen(false);

    const isCurrentPath = window.location.pathname === path;

    if (!isCurrentPath) {
      window.history.pushState({}, '', path + (hash || ''));
      window.dispatchEvent(new Event('popstate'));
    }

    if (hash) {
      const delay = isCurrentPath ? 0 : 150;
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
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, delay);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          (scrolled || currentPath !== '/')
            ? 'bg-primary/85 border-b border-white/15 py-3 shadow-lg backdrop-blur-md' 
            : 'bg-transparent border-b border-transparent py-5 shadow-none backdrop-blur-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo and Brand Title */}
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '/', '#home')} 
              className="flex items-center gap-2 sm:gap-3 group shrink-0"
            >
              <img 
                src={logoImg} 
                alt="Vision Play School Logo" 
                className="h-12 w-12 sm:h-16 sm:w-16 rounded-full border-2 border-white/90 object-cover shadow-md bg-white transition-transform duration-300 group-hover:scale-105 shrink-0"
              />
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-sm sm:text-lg md:text-xl tracking-tight leading-none text-white whitespace-nowrap">
                  VISION PLAY SCHOOL
                </span>
                <span className="font-sans font-semibold text-[8px] sm:text-[10px] md:text-xs tracking-wider uppercase mt-0.5 text-sky-accent whitespace-nowrap">
                  BANJARITOLA, MALANJKHAND (M.P.)
                </span>
              </div>
            </a>

            {/* Desktop Navigation links */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.path, link.href)}
                  className="font-sans font-bold text-sm lg:text-[15px] text-white hover:text-sky-accent transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sky-accent after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Action Buttons & Mobile Menu Trigger */}
            <div className="flex items-center gap-4">
              <a
                href="#enquiry"
                onClick={(e) => handleNavClick(e, '/enquiry', '#enquiry')}
                className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold rounded-full text-white bg-orange-accent hover:bg-orange-600 shadow-md hover:shadow-lg transition-all duration-150"
              >
                Enquire Now <span className="ml-1.5 font-sans font-normal">&rarr;</span>
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex lg:hidden p-2 rounded-lg focus:outline-none transition-colors text-white hover:bg-white/10"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Slide-out Menu Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-primary/95 backdrop-blur-md border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.path, link.href)}
                    className="block px-4 py-3 rounded-xl font-sans font-bold text-base text-white hover:text-sky-accent hover:bg-white/5 transition-all"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 px-4 flex flex-col gap-3">
                  <a
                    href="#enquiry"
                    onClick={(e) => handleNavClick(e, '/enquiry', '#enquiry')}
                    className="w-full text-center px-6 py-3 rounded-full text-sm font-semibold text-white bg-orange-accent hover:bg-orange-600 transition-colors shadow-md"
                  >
                    Enquire Now
                  </a>
                  <div className="flex items-center justify-center gap-6 mt-3 text-white/60">
                    <a href="tel:+917987165487" className="flex items-center gap-1 hover:text-sky-accent text-xs">
                      <Phone className="w-3.5 h-3.5" /> Call School
                    </a>
                    <a href="https://wa.me/917987165487" className="flex items-center gap-1 hover:text-emerald-400 text-xs">
                      <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
