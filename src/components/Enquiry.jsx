import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, User, Phone, Mail, GraduationCap, ArrowLeft, ArrowRight, CheckCircle, Smile } from 'lucide-react';
import logoImg from '../assets/logo.png';
import './Enquiry.css';

const ENQUIRY_STAGES = {
  early: {
    title: 'Early Years',
    desc: 'Play School & Nursery (Ages 2.5 - 5)',
    grades: ['Play Group', 'Nursery', 'L.K.G', 'U.K.G']
  },
  foundation: {
    title: 'Foundation Years',
    desc: 'Grades 1 & 2 (Ages 6 - 7)',
    grades: ['Grade 1', 'Grade 2']
  },
  preparatory: {
    title: 'Preparatory Years',
    desc: 'Grades 3 to 5 (Ages 8 - 10)',
    grades: ['Grade 3', 'Grade 4', 'Grade 5']
  },
  middle: {
    title: 'Middle School',
    desc: 'Grades 6 to 8 (Ages 11 - 13)',
    grades: ['Grade 6', 'Grade 7', 'Grade 8']
  }
};

export default function Enquiry() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    childName: '',
    dob: '',
    stage: 'early',
    grade: 'Nursery',
    parentName: '',
    phone: '',
    email: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dobError, setDobError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [childNameError, setChildNameError] = useState('');
  const [parentNameError, setParentNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  // Validate Child's Name dynamically
  useEffect(() => {
    if (!formData.childName) {
      setChildNameError('');
      return;
    }
    const namePattern = /^[a-zA-Z\s]*$/;
    if (!namePattern.test(formData.childName)) {
      setChildNameError('Child name can only contain letters and spaces.');
    } else if (formData.childName.trim().length < 2) {
      setChildNameError('Child name must be at least 2 characters.');
    } else {
      setChildNameError('');
    }
  }, [formData.childName]);

  // Validate Parent's Name dynamically
  useEffect(() => {
    if (!formData.parentName) {
      setParentNameError('');
      return;
    }
    const namePattern = /^[a-zA-Z\s]*$/;
    if (!namePattern.test(formData.parentName)) {
      setParentNameError('Parent name can only contain letters and spaces.');
    } else if (formData.parentName.trim().length < 2) {
      setParentNameError('Parent name must be at least 2 characters.');
    } else {
      setParentNameError('');
    }
  }, [formData.parentName]);

  // Validate Phone Number dynamically
  useEffect(() => {
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

  // Validate Date of Birth and Eligibility dynamically
  useEffect(() => {
    if (!formData.dob) {
      setDobError('');
      return;
    }
    
    const selectedDate = new Date(formData.dob);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // 1. Block future dates
    if (selectedDate > today) {
      setDobError('Date of birth cannot be in the future.');
      return;
    }
    
    // 2. Check eligibility (must be at least 3 years before current year)
    const currentYear = today.getFullYear();
    const birthYear = selectedDate.getFullYear();
    
    if (currentYear - birthYear < 3) {
      const studentName = formData.childName.trim() || 'child';
      setDobError(`your ${studentName} is no eligible for school`);
    } else {
      setDobError('');
    }
  }, [formData.dob, formData.childName]);

  // Validate Email Address dynamically
  useEffect(() => {
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
    
    if (name === 'childName' || name === 'parentName') {
      // Only text/letters and spaces allowed
      const cleanValue = value.replace(/[^a-zA-Z\s]/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: cleanValue
      }));
      return;
    }
    
    if (name === 'phone') {
      // Only numbers/digits allowed, max 10 digits
      const cleanValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({
        ...prev,
        [name]: cleanValue
      }));
      return;
    }
    
    if (name === 'stage') {
      // Auto pre-fill the first grade option when stage changes
      setFormData(prev => ({
        ...prev,
        stage: value,
        grade: ENQUIRY_STAGES[value].grades[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.childName || !formData.dob) {
        alert('Please fill out child details!');
        return;
      }
      if (dobError) {
        alert(dobError);
        return;
      }
      if (childNameError) {
        alert(childNameError);
        return;
      }
    }
    if (step === 2 && (!formData.stage || !formData.grade)) {
      alert('Please select stage and grade!');
      return;
    }
    setStep(prev => prev + 1);
  };

  const handlePrev = () => {
    setStep(prev => prev - 1);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone) {
      alert('Please fill out your contact details!');
      return;
    }
    
    if (parentNameError) {
      alert(parentNameError);
      return;
    }

    if (phoneError) {
      alert(phoneError);
      return;
    }

    if (formData.phone.length < 10) {
      alert('Phone number must be exactly 10 digits!');
      return;
    }

    if (emailError) {
      alert('Please correct the email format before submitting!');
      return;
    }
    
    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const getProgressPercentage = () => {
    if (step === 1) return 10;
    if (step === 2) return 50;
    if (step === 3) return 100;
    return 0;
  };

  return (
    <div className="enquiry-page-container pt-28 pb-16 px-4 md:px-8 relative" id="enquiry">
      
      {/* Floating background doodles */}
      <span className="floating-doodle doodle-1">🌸</span>
      <span className="floating-doodle doodle-2">⭐</span>
      <span className="floating-doodle doodle-3">📐</span>
      <span className="floating-doodle doodle-4">🎒</span>

      <div className="max-w-4xl mx-auto z-10 relative">
        
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="playful-cloud-badge">
            <Sparkles className="w-4 h-4 text-orange-accent animate-pulse" /> ADMISSION INQUIRY
          </span>
          <h1 className="font-sans font-black text-4xl sm:text-5xl text-primary tracking-tight leading-none">
            Enroll Your <span className="text-orange-accent relative inline-block">Child<span className="absolute bottom-[-6px] left-0 w-full h-[6px] bg-orange-accent/30 rounded-full" /></span>
          </h1>
          <p className="text-slate-500 font-sans text-xs sm:text-sm">
            Fill out this quick form, and our admissions committee will reach out to guide you through the process.
          </p>
        </div>

        {/* Stepper Progress Bar */}
        {!isSubmitted && (
          <div className="step-indicator-bar">
            <div className="step-indicator-track"></div>
            <div 
              className="step-indicator-fill" 
              style={{ width: `${getProgressPercentage()}%` }}
            ></div>
            
            <div className={`step-node ${step >= 1 ? 'active-node' : ''} ${step > 1 ? 'completed-node' : ''}`}>
              {step > 1 ? '✓' : '1'}
              <span className="step-label">Child</span>
            </div>
            
            <div className={`step-node ${step >= 2 ? 'active-node' : ''} ${step > 2 ? 'completed-node' : ''}`}>
              {step > 2 ? '✓' : '2'}
              <span className="step-label">Stage</span>
            </div>
            
            <div className={`step-node ${step >= 3 ? 'active-node' : ''}`}>
              {step > 3 ? '✓' : '3'}
              <span className="step-label">Parent</span>
            </div>
          </div>
        )}

        {/* Form Card */}
        <div className="enquiry-form-card">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form-stepper"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="w-full"
              >
                {/* Header */}
                <div className="enquiry-card-header flex items-center justify-center gap-4">
                  <img src={logoImg} alt="Vision Play School Logo" className="w-12 h-12 rounded-full border-2 border-white/80 bg-white object-cover" />
                  <div>
                    <h3 className="font-sans font-black text-xl leading-none">Vision Play School</h3>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-sky-accent">Banjaritola Campus</span>
                  </div>
                </div>

                {/* Body */}
                <form onSubmit={handleFormSubmit} className="enquiry-card-body">
                  
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h4 className="text-primary font-sans font-black text-lg text-left border-b border-dashed border-slate-100 pb-2">
                        Step 1: Child details
                      </h4>
                      
                      <div className="form-grid-two">
                        <div className="enquiry-input-group">
                          <label>Child's Full Name *</label>
                          <div className="relative">
                            <span className="absolute left-4 top-0 bottom-0 flex items-center pointer-events-none text-slate-400">
                              <User className="w-4 h-4" />
                            </span>
                            <input 
                              type="text" 
                              name="childName"
                              value={formData.childName}
                              onChange={handleInputChange}
                              placeholder="Enter child's full name"
                              required
                              className="enquiry-text-input pl-11"
                            />
                          </div>
                          {childNameError && (
                            <div className="enquiry-dob-error text-left mt-1 flex items-center gap-1.5 text-rose-500 font-sans font-semibold text-xs animate-shake">
                              <span className="error-dot"></span>
                              {childNameError}
                            </div>
                          )}
                        </div>

                        <div className="enquiry-input-group">
                          <label>Child's Date of Birth *</label>
                          <div className="relative">
                            <span className="absolute left-4 top-0 bottom-0 flex items-center pointer-events-none text-slate-400">
                              <Calendar className="w-4 h-4" />
                            </span>
                            <input 
                              type="date" 
                              name="dob"
                              value={formData.dob}
                              onChange={handleInputChange}
                              max={new Date().toISOString().split('T')[0]}
                              required
                              className="enquiry-text-input pl-11"
                            />
                          </div>
                          {dobError && (
                            <div className="enquiry-dob-error text-left mt-1 flex items-center gap-1.5 text-rose-500 font-sans font-semibold text-xs animate-shake">
                              <span className="error-dot"></span>
                              {dobError}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h4 className="text-primary font-sans font-black text-lg text-left border-b border-dashed border-slate-100 pb-2">
                        Step 2: Admission details
                      </h4>

                      <div className="form-grid-two">
                        <div className="enquiry-input-group">
                          <label>Applying For Educational Stage *</label>
                          <div className="relative">
                            <span className="absolute left-4 top-0 bottom-0 flex items-center pointer-events-none text-slate-400">
                              <GraduationCap className="w-4 h-4" />
                            </span>
                            <select 
                              name="stage"
                              value={formData.stage}
                              onChange={handleInputChange}
                              className="enquiry-select-input pl-11"
                            >
                              <option value="early">Early Years (Playgroup - UKG)</option>
                              <option value="foundation">Foundation Years (Grade 1 - 2)</option>
                              <option value="preparatory">Preparatory Years (Grade 3 - 5)</option>
                              <option value="middle">Middle School (Grade 6 - 8)</option>
                            </select>
                          </div>
                        </div>

                        <div className="enquiry-input-group">
                          <label>Specific Grade applying for *</label>
                          <div className="relative">
                            <span className="absolute left-4 top-0 bottom-0 flex items-center pointer-events-none text-slate-400">
                              <GraduationCap className="w-4 h-4" />
                            </span>
                            <select 
                              name="grade"
                              value={formData.grade}
                              onChange={handleInputChange}
                              className="enquiry-select-input pl-11"
                            >
                              {ENQUIRY_STAGES[formData.stage].grades.map((gr, idx) => (
                                <option key={idx} value={gr}>{gr}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h4 className="text-primary font-sans font-black text-lg text-left border-b border-dashed border-slate-100 pb-2">
                        Step 3: Parent & Contact Details
                      </h4>

                      <div className="form-grid-two">
                        <div className="enquiry-input-group">
                          <label>Parent/Guardian Name *</label>
                          <div className="relative">
                            <span className="absolute left-4 top-0 bottom-0 flex items-center pointer-events-none text-slate-400">
                              <User className="w-4 h-4" />
                            </span>
                            <input 
                              type="text" 
                              name="parentName"
                              value={formData.parentName}
                              onChange={handleInputChange}
                              placeholder="Enter parent's full name"
                              required
                              className="enquiry-text-input pl-11"
                            />
                          </div>
                          {parentNameError && (
                            <div className="enquiry-dob-error text-left mt-1 flex items-center gap-1.5 text-rose-500 font-sans font-semibold text-xs animate-shake">
                              <span className="error-dot"></span>
                              {parentNameError}
                            </div>
                          )}
                        </div>

                        <div className="enquiry-input-group">
                          <label>Primary Phone Number *</label>
                          <div className="relative">
                            <span className="absolute left-4 top-0 bottom-0 flex items-center pointer-events-none text-slate-400">
                              <Phone className="w-4 h-4" />
                            </span>
                            <input 
                              type="tel" 
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="10 digit mobile number"
                              required
                              className="enquiry-text-input pl-11"
                            />
                          </div>
                          {phoneError && (
                            <div className="enquiry-dob-error text-left mt-1 flex items-center gap-1.5 text-rose-500 font-sans font-semibold text-xs animate-shake">
                              <span className="error-dot"></span>
                              {phoneError}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="enquiry-input-group">
                        <label>Email Address</label>
                        <div className="relative">
                          <span className="absolute left-4 top-0 bottom-0 flex items-center pointer-events-none text-slate-400">
                            <Mail className="w-4 h-4" />
                          </span>
                          <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="parent@example.com (optional)"
                            className="enquiry-text-input pl-11"
                          />
                        </div>
                        {emailError && (
                          <div className="enquiry-dob-error text-left mt-1 flex items-center gap-1.5 text-rose-500 font-sans font-semibold text-xs animate-shake">
                            <span className="error-dot"></span>
                            {emailError}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="nav-buttons-row">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="px-6 py-2.5 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all font-sans font-bold text-xs cursor-pointer flex items-center gap-1.5"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" /> Back
                      </button>
                    ) : (
                      <div />
                    )}

                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="px-6 py-2.5 bg-primary hover:bg-primary-dark text-white font-sans font-bold text-xs rounded-full transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                      >
                        Next Step <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3 bg-orange-accent hover:bg-orange-600 disabled:bg-orange-400 text-white font-sans font-bold text-sm rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-md active:scale-97"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Registering...
                          </>
                        ) : (
                          <>
                            Submit Registration <CheckCircle className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    )}
                  </div>

                </form>
              </motion.div>
            ) : (
              // SUBMISSION SUCCESS CELEBRATION
              <motion.div
                key="success-screen"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="success-card-enquiry"
              >
                {/* Floating Success Balloons */}
                <div className="celebratory-balloons">
                  <div className="success-balloon b-gold">🎈</div>
                  <div className="success-balloon b-mint">🎈</div>
                  <div className="success-balloon b-blue">🎈</div>
                  <div className="success-balloon b-gold-light">🎈</div>
                  <div className="success-balloon b-mint-light">🎈</div>
                  <div className="success-balloon b-blue-light">🎈</div>
                  <div className="success-confetti cf-1">✨</div>
                  <div className="success-confetti cf-2">🎨</div>
                  <div className="success-confetti cf-3">🍎</div>
                  <div className="success-confetti cf-4">🎒</div>
                </div>

                <div className="success-badge-icon">🎉</div>
                
                <h3 className="success-title">Enquiry Registered!</h3>
                <span className="success-grade-pill" style={{ backgroundColor: '#eaf7f3', color: '#10B981' }}>
                  Registered Grade: {formData.grade} ({ENQUIRY_STAGES[formData.stage].title})
                </span>

                <div className="success-letter-body w-full max-w-lg mx-auto">
                  <p>Dear <strong>{formData.parentName}</strong>,</p>
                  <p>
                    We have successfully registered your child, <strong>{formData.childName}</strong>, in the <strong>Vision Play School admissions registry pool</strong> for Academic Session 2026-27.
                  </p>
                  <p>
                    Our admissions officer will contact you at <strong>{formData.phone}</strong> within the next 24 hours to coordinate campus visits and discuss child-parent developmental profiles.
                  </p>
                  <p className="success-closing">Warmly, <br /><strong>Admissions Team, Vision Play School</strong></p>
                </div>

                <button 
                  className="success-close-action-btn max-w-xs mx-auto mt-6"
                  onClick={() => {
                    setIsSubmitted(false);
                    setStep(1);
                  }}
                >
                  Write Another Enquiry Note
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}
