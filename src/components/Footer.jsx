import React from 'react';
import { Mail, Phone, MapPin, Heart, Shield } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e, id) => {
    e.preventDefault();
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
    <footer className="bg-primary text-white border-t border-white/10 pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 pb-12 border-b border-white/10 text-left">
          
          {/* Brand & Mission column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logoImg} 
                alt="Vision Play School Logo" 
                className="h-10 w-auto object-contain"
              />
              <span className="font-sans font-extrabold text-lg tracking-tight">VISION PLAY SCHOOL</span>
            </div>
            <p className="text-white/60 font-sans text-sm leading-relaxed">
              Nurturing young minds through clean environments, play-based curriculums, and experienced mentors. Creating confident learners since day one.
            </p>
            {/* Trust Badges */}
            <div className="flex gap-4 text-xs font-semibold text-sky-accent pt-2">
              <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5" /> ISO Certified</span>
              <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5" /> Child-Safe Environment</span>
            </div>
          </div>

          {/* Quick links column */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-base tracking-wide uppercase text-sky-accent">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Why Choose Us', href: '#why-choose-us' },
                { name: 'A Day at Vision', href: '#day-at-vision' },
                { name: 'Moments Gallery', href: '#gallery' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Virtual Tour', href: '#virtual-tour' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-white/60 hover:text-white transition-colors text-sm font-sans"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs column */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-base tracking-wide uppercase text-sky-accent">Programs</h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Playgroup (1.5 - 2.5 Years)', href: '#admission' },
                { name: 'Nursery (2.5 - 3.5 Years)', href: '#admission' },
                { name: 'LKG (3.5 - 4.5 Years)', href: '#admission' },
                { name: 'UKG (4.5 - 5.5 Years)', href: '#admission' }
              ].map((prog) => (
                <li key={prog.name}>
                  <a
                    href={prog.href}
                    onClick={(e) => handleScrollTo(e, prog.href)}
                    className="text-white/60 hover:text-white transition-colors text-sm font-sans"
                  >
                    {prog.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-base tracking-wide uppercase text-sky-accent">Contact Campus</h4>
            <ul className="space-y-3 text-sm text-white/60 font-sans">
              <li className="flex gap-2.5">
                <MapPin className="w-5 h-5 text-orange-accent shrink-0" />
                <span>Ward No. 8, Banjaritola, Malanjkhand, Dist. Balaghat, Madhya Pradesh (481116)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-accent shrink-0" />
                <a href="tel:+917987165487" className="hover:text-white transition-colors">+91 79871 65487</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-accent shrink-0 animate-pulse" />
                <a href="tel:+918450050747" className="hover:text-white transition-colors">+91 84500 50747</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-accent shrink-0" />
                <a href="mailto:visionplayschool12@gmail.com" className="hover:text-white transition-colors break-all">visionplayschool12@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Socials & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-xs font-sans text-center sm:text-left">
            © {currentYear} Vision Play School. All Rights Reserved. Built with trust for kids education.
          </p>
          
          {/* Social grid */}
          <div className="flex items-center gap-4">
            {[
              { 
                icon: (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                ), 
                href: 'https://instagram.com/visionplay_school', 
                label: 'Instagram' 
              },
              { 
                icon: (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                ), 
                href: 'https://facebook.com', 
                label: 'Facebook' 
              },
              { 
                icon: (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                ), 
                href: 'https://youtube.com', 
                label: 'Youtube' 
              }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white shadow-sm flex items-center justify-center"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
