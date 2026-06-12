import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Sparkles, Smile, CheckCircle, HelpCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    role: 'Parent',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  // Validate Name dynamically
  React.useEffect(() => {
    if (!formData.name) {
      setNameError('');
      return;
    }
    const namePattern = /^[a-zA-Z\s]*$/;
    if (!namePattern.test(formData.name)) {
      setNameError('Name can only contain letters and spaces.');
    } else if (formData.name.trim().length < 2) {
      setNameError('Name must be at least 2 characters.');
    } else {
      setNameError('');
    }
  }, [formData.name]);

  // Validate Phone dynamically
  React.useEffect(() => {
    if (!formData.phone) {
      setPhoneError('');
      return;
    }
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(formData.phone)) {
      setPhoneError('Phone number must be exactly 10 digits.');
    } else {
      setPhoneError('');
    }
  }, [formData.phone]);

  // Validate Email dynamically
  React.useEffect(() => {
    if (!formData.email) {
      setEmailError('');
      return;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email.toLowerCase())) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  }, [formData.email]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      const cleanValue = value.replace(/[^a-zA-Z\s]/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: cleanValue
      }));
      return;
    }
    if (name === 'phone') {
      const cleanValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({
        ...prev,
        [name]: cleanValue
      }));
      return;
    }
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert('Please fill out all required fields!');
      return;
    }

    if (nameError) {
      alert(nameError);
      return;
    }

    if (phoneError) {
      alert(phoneError);
      return;
    }

    if (emailError) {
      alert(emailError);
      return;
    }
    
    setIsSubmitting(true);
    // Simulate paper plane fly animation delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        role: 'Parent',
        message: ''
      });
    }, 1200);
  };

  const contactInfos = [
    {
      id: 1,
      icon: <Phone className="w-6 h-6 text-orange-accent" />,
      title: 'Call Campus Support',
      desc: 'Talk directly to our mentors',
      value: '+91 79871 65487',
      subValue: '+91 84500 50747',
      link: 'tel:+917987165487',
      subLink: 'tel:+918450050747',
      color: 'bg-orange-accent/10 border-orange-accent/30'
    },
    {
      id: 2,
      icon: <Mail className="w-6 h-6 text-[#10B981]" />,
      title: 'Email Admissions',
      desc: 'Send us queries anytime',
      value: 'visionplayschool12@gmail.com',
      link: 'mailto:visionplayschool12@gmail.com',
      color: 'bg-[#10B981]/10 border-[#10B981]/30'
    },
    {
      id: 3,
      icon: <Clock className="w-6 h-6 text-sky-accent" />,
      title: 'School Hours',
      desc: 'Visiting hours for parents',
      value: 'Mon - Sat: 08:00 AM - 02:00 PM',
      subValue: 'Sunday: Closed',
      color: 'bg-sky-accent/10 border-sky-accent/30'
    }
  ];

  return (
    <div className="contact-page-container pt-28 pb-16 px-4 md:px-8 relative">
      
      {/* Decorative School Doodles floating in background */}
      <span className="floating-doodle doodle-1">✏️</span>
      <span className="floating-doodle doodle-2">🎒</span>
      <span className="floating-doodle doodle-3">📐</span>
      <span className="floating-doodle doodle-4">🎨</span>
      <span className="floating-doodle lg:block hidden" style={{ position: 'absolute', top: '55%', left: '50%', opacity: 0.08, fontSize: '3rem' }}>📚</span>
      
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-1.5 text-orange-accent text-sm font-extrabold tracking-widest uppercase"
          >
            <Sparkles className="w-4 h-4 animate-spin-slow" /> Connect with us
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-primary tracking-tight leading-none"
          >
            Say Hello! Let's <br className="sm:hidden" />
            <span className="text-orange-accent relative inline-block">Start the Journey<span className="absolute bottom-[-6px] left-0 w-full h-[6px] bg-orange-accent/30 rounded-full" /></span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.25 }}
            className="text-slate-600 font-sans text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
          >
            Have a question about admissions, curriculums, or want to schedule a school tour? Send us a message below!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Side: Contact Information Cards & Map */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            <div className="space-y-4">
              {contactInfos.map((info, idx) => (
                <motion.div
                  key={info.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ x: 6 }}
                  className={`p-6 rounded-2xl border bg-white/60 backdrop-blur-sm flex gap-4 text-left shadow-sm hover:shadow-md transition-all duration-200`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${info.color}`}>
                    {info.icon}
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-slate-800 font-sans font-bold text-base">{info.title}</h3>
                    <p className="text-slate-500 font-sans text-xs">{info.desc}</p>
                    
                    <div className="pt-2">
                      {info.link ? (
                        <a href={info.link} className="text-primary hover:text-orange-accent font-sans font-extrabold text-sm block transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-slate-700 font-sans font-semibold text-sm block">
                          {info.value}
                        </span>
                      )}

                      {info.subValue && (
                        info.subLink ? (
                          <a href={info.subLink} className="text-primary hover:text-orange-accent font-sans font-extrabold text-sm block transition-colors">
                            {info.subValue}
                          </a>
                        ) : (
                          <span className="text-slate-500 font-sans text-xs block pt-0.5">
                            {info.subValue}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Polaroid Map Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="map-polaroid-frame"
            >
              <div className="w-full h-56 rounded-lg overflow-hidden bg-slate-100 relative">
                <iframe
                  title="Vision Play School Banjaritola Malanjkhand Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.442111051515!2d80.7077651!3d22.0163351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2bc9004cb740d1%3A0xeab493cd6ff025d5!2sBanjaritola%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </div>
              <div className="pt-3.5 flex items-center justify-between text-left px-1">
                <div>
                  <h4 className="text-slate-800 font-handwritten text-xl font-bold leading-none">Our School Location</h4>
                  <p className="text-slate-500 font-sans text-[10px] uppercase tracking-wider mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-red-500" /> Banjaritola, Malanjkhand, MP
                  </p>
                </div>
                <div className="text-red-500 text-2xl font-handwritten">&hearts;</div>
              </div>
            </motion.div>

          </div>

          {/* Right Side: Notebook Style Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 flex"
          >
            <div className="notebook-card w-full flex flex-col p-6 sm:p-8 md:p-10 justify-between">
              
              {/* Spiral binding rings at the left edge */}
              <div className="notebook-binder">
                <div className="binder-ring"></div>
                <div className="binder-ring"></div>
                <div className="binder-ring"></div>
                <div className="binder-ring"></div>
                <div className="binder-ring"></div>
                <div className="binder-ring"></div>
                <div className="binder-ring"></div>
                <div className="binder-ring"></div>
                <div className="binder-ring"></div>
              </div>

              <AnimatePresence mode="wait">
                {!isSent ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-6 text-left relative"
                  >
                    <div className="border-b border-slate-100 pb-4 flex items-center justify-between pl-6">
                      <h2 className="font-handwritten text-slate-700 text-3xl font-extrabold">Write a Note to Us</h2>
                      <Smile className="w-6 h-6 text-orange-accent animate-pulse" />
                    </div>

                    <div className="paper-lines space-y-4">
                      
                      {/* Name field */}
                      <div className="space-y-1">
                        <div className="flex flex-col sm:flex-row sm:items-center border-b border-dashed border-slate-200 py-1.5">
                          <label className="w-32 font-sans font-bold text-slate-700 text-sm uppercase tracking-wide shrink-0">Your Name *</label>
                          <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Write your name here"
                            className="flex-1 bg-transparent border-0 outline-none text-slate-800 font-sans text-sm py-1 placeholder-slate-400"
                          />
                        </div>
                        {nameError && (
                          <div className="text-rose-500 font-sans font-semibold text-[11px] pl-6 sm:pl-32 text-left">
                            • {nameError}
                          </div>
                        )}
                      </div>

                      {/* Phone field */}
                      <div className="space-y-1">
                        <div className="flex flex-col sm:flex-row sm:items-center border-b border-dashed border-slate-200 py-1.5">
                          <label className="w-32 font-sans font-bold text-slate-700 text-sm uppercase tracking-wide shrink-0">Phone No. *</label>
                          <input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            placeholder="Your 10 digit number"
                            className="flex-1 bg-transparent border-0 outline-none text-slate-800 font-sans text-sm py-1 placeholder-slate-400"
                          />
                        </div>
                        {phoneError && (
                          <div className="text-rose-500 font-sans font-semibold text-[11px] pl-6 sm:pl-32 text-left">
                            • {phoneError}
                          </div>
                        )}
                      </div>

                      {/* Email field */}
                      <div className="space-y-1">
                        <div className="flex flex-col sm:flex-row sm:items-center border-b border-dashed border-slate-200 py-1.5">
                          <label className="w-32 font-sans font-bold text-slate-700 text-sm uppercase tracking-wide shrink-0">Email Id</label>
                          <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Your email address (optional)"
                            className="flex-1 bg-transparent border-0 outline-none text-slate-800 font-sans text-sm py-1 placeholder-slate-400"
                          />
                        </div>
                        {emailError && (
                          <div className="text-rose-500 font-sans font-semibold text-[11px] pl-6 sm:pl-32 text-left">
                            • {emailError}
                          </div>
                        )}
                      </div>

                      {/* Relation Role field */}
                      <div className="flex flex-col sm:flex-row sm:items-center border-b border-dashed border-slate-200 py-1.5">
                        <label className="w-32 font-sans font-bold text-slate-700 text-sm uppercase tracking-wide shrink-0">You Are A</label>
                        <select 
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          className="flex-1 bg-transparent border-0 outline-none text-slate-700 font-sans text-sm py-1"
                        >
                          <option value="Parent">Parent</option>
                          <option value="Guardian">Guardian</option>
                          <option value="Teacher">Teacher / Job Applicant</option>
                          <option value="Other">Well Wisher / Other</option>
                        </select>
                      </div>

                      {/* Message field */}
                      <div className="flex flex-col border-b border-dashed border-slate-200 py-2">
                        <label className="font-sans font-bold text-slate-700 text-sm uppercase tracking-wide mb-2">Your Message *</label>
                        <textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows="4"
                          placeholder="Write down your queries or messages..."
                          className="w-full bg-transparent border-0 outline-none text-slate-800 font-sans text-sm py-1 placeholder-slate-400 leading-8 resize-none"
                        ></textarea>
                      </div>

                    </div>

                    <div className="pt-6 flex justify-end pl-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3 bg-orange-accent hover:bg-orange-600 text-white font-sans font-bold text-sm rounded-full transition-all duration-200 shadow-md hover:shadow-orange-500/20 active:scale-97 flex items-center justify-center gap-2 cursor-pointer select-none overflow-hidden min-w-[170px]"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Note 
                            <Send className={`w-4 h-4 transition-transform duration-300 ${isSubmitting ? 'paper-plane-fly' : 'group-hover:translate-x-0.5'}`} />
                          </>
                        )}
                      </button>
                    </div>

                  </motion.form>
                ) : (
                  // CUTE LETTER SUBMISSION COMPLETED SCREEN
                  <motion.div 
                    key="sent"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-6 pl-6"
                  >
                    <motion.div 
                      initial={{ scale: 0.5 }}
                      animate={{ scale: [0.5, 1.1, 1] }}
                      transition={{ duration: 0.4 }}
                      className="w-20 h-20 bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] rounded-full flex items-center justify-center shadow-lg"
                    >
                      <CheckCircle className="w-10 h-10" />
                    </motion.div>

                    <div className="space-y-2">
                      <h3 className="font-handwritten text-slate-800 text-3xl font-bold leading-none">Note Slipped Into Our Mailbox!</h3>
                      <p className="text-slate-500 font-sans text-xs max-w-sm mx-auto leading-relaxed pt-1">
                        Thank you for reaching out! We have successfully received your message in our notebook. A coordinator will get back to you shortly.
                      </p>
                    </div>

                    <div className="p-4 border border-dashed border-slate-200 bg-slate-50/50 rounded-2xl w-full max-w-xs font-handwritten text-left text-slate-700 text-lg leading-relaxed select-none relative">
                      <span className="absolute -top-3 right-3 text-xl">📬</span>
                      <p className="font-semibold text-slate-800 mb-1 border-b border-slate-200/60 pb-1">Note Sent Info:</p>
                      <p>• Message logged</p>
                      <p>• Ticket: #VPS-{(Math.floor(Math.random() * 9000) + 1000)}</p>
                      <p>• Estimated response: &lt; 12 hrs</p>
                    </div>

                    <button
                      onClick={() => setIsSent(false)}
                      className="px-6 py-2.5 rounded-full border border-slate-200 text-primary font-bold text-xs hover:bg-slate-50 transition-all cursor-pointer"
                    >
                      Write Another Note
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>

    </div>
  );
}
