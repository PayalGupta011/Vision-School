import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';
import './Admission.css';

// Levels Progression Data matching Vision Play School
const ADMISSION_LEVELS = [
  {
    id: 1,
    key: 'early',
    title: 'Early Years',
    gradeLabel: 'Play School & Nursery',
    ageRange: 'Ages 2.5 - 5 Years',
    image: '/happy-kids.jpg',
    themeColor: '#f0ab26', // Sunshine Gold
    bgLight: '#fef6e5',
    tagline: '🎒 Nurturing Happy Beginnings',
    desc: 'Our Early Years program is a warm, sensory wonderland designed to stimulate curiosity. Through block play, storytelling, drawing, and interactive play sessions, children develop key motor and social skills in a secure environment.',
    highlights: ['🎨 Creative Arts & Drawing', '🧩 Fine Motor Block Play', '🧸 Circle Time & Empathy', '🎶 Music & Rhymes'],
    grades: ['Play Group', 'Nursery', 'L.K.G', 'U.K.G']
  },
  {
    id: 2,
    key: 'foundation',
    title: 'Foundation Years',
    gradeLabel: 'Grades 1 & 2',
    ageRange: 'Ages 6 - 7 Years',
    image: '/activity-learning.jpg',
    themeColor: '#48b38f', // Growth Mint Green
    bgLight: '#eaf7f3',
    tagline: '🌱 Bridging Play with Logic',
    desc: 'In the Foundation Years, children bridge creative sensory learning with early concrete concepts. We introduce writing flow, arithmetic reasoning, basic environmental studies, and collaborative games to foster logic and friendship.',
    highlights: ['✍️ Language & Reading Flow', '🧮 Primary Mathematics', '🌱 Environmental Studies (EVS)', '🎭 Primary Drama & Expression'],
    grades: ['Grade 1', 'Grade 2']
  },
  {
    id: 3,
    key: 'preparatory',
    title: 'Preparatory Years',
    gradeLabel: 'Grades 3 to 5',
    ageRange: 'Ages 8 - 10 Years',
    image: '/caring-teachers.jpg',
    themeColor: '#2c5bd6', // Deep Royal Blue Accent
    bgLight: '#eef3ff',
    tagline: '💻 Critical Inquiry & Discovery',
    desc: 'The Preparatory phase fosters independent critical thinking, abstract math (fractions, geometry), computer science foundations, and creative science projects in a collaborative learning setup.',
    highlights: ['💻 Computer Science Basics', '🔬 Science Experiments', '🧠 Mathematics & Geometry', '🗣️ Speech, Debates & Presentations'],
    grades: ['Grade 3', 'Grade 4', 'Grade 5']
  },
  {
    id: 4,
    key: 'middle',
    title: 'Middle School',
    gradeLabel: 'Grades 6 to 8',
    ageRange: 'Ages 11 - 13 Years',
    image: '/safe-secure.jpg',
    themeColor: '#13327a', // Warm Navy Brand
    bgLight: '#f2f6ff',
    tagline: '🤖 Fostering Tomorrow\'s Leaders',
    desc: 'Middle school prepares students for secondary academic benchmarks through intensive physics, chemistry, pre-algebra, introductory coding, sports activities, and structured leadership exercises.',
    highlights: ['🤖 Basic Robotics & Electronics', '📐 Pre-Algebra & Equations', '🧪 Science Lab Experiments', '🏆 Structured Sports & Leadership'],
    grades: ['Grade 6', 'Grade 7', 'Grade 8']
  }
];

export default function Admission() {
  const [activeSection, setActiveSection] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Registration Form State
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedGradeKey, setSelectedGradeKey] = useState('early');
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    phone: '',
    email: '',
    dob: '',
    grade: 'Nursery'
  });
  
  // Form submission success
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form input validation states
  const [childNameError, setChildNameError] = useState('');
  const [parentNameError, setParentNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

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

  // Validate Phone dynamically
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

  // Validate Email dynamically
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

  // Track scroll progress relative to the progression timeline bounds on window
  useEffect(() => {
    const handleScroll = () => {
      const section1 = document.getElementById('level-section-1');
      const section4 = document.getElementById('level-section-4');
      if (!section1 || !section4) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;
      const halfViewport = viewportHeight * 0.5;

      const rect1 = section1.getBoundingClientRect();
      const rect4 = section4.getBoundingClientRect();

      // Absolute offsetTop relative to document
      const start = rect1.top + scrollTop + rect1.height * 0.5 - halfViewport;
      const end = rect4.top + scrollTop + rect4.height * 0.5 - halfViewport;

      if (end > start) {
        const raw = (scrollTop - start) / (end - start);
        const percent = Math.min(100, Math.max(0, raw * 100));
        setScrollProgress(percent);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run initially

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Spying on active stages using IntersectionObserver in Viewport
  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: '-20% 0px -30% 0px',
      threshold: 0.15
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = parseInt(entry.target.getAttribute('data-level-id'));
          if (id) setActiveSection(id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    ADMISSION_LEVELS.forEach((level) => {
      const el = document.getElementById(`level-section-${level.id}`);
      if (el) observer.observe(el);
    });

    return () => {
      ADMISSION_LEVELS.forEach((level) => {
        const el = document.getElementById(`level-section-${level.id}`);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Action hook to trigger pre-filled glass form
  const triggerApplication = (levelKey) => {
    const matchingLevel = ADMISSION_LEVELS.find(l => l.key === levelKey);
    setSelectedGradeKey(levelKey);
    setFormData(prev => ({
      ...prev,
      grade: matchingLevel ? matchingLevel.grades[0] : 'Nursery'
    }));
    setIsFormOpen(true);
    setIsSubmitted(false);
  };

  // Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'childName' || name === 'parentName') {
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

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.parentName || !formData.childName || !formData.phone) {
      alert('Please fill out all mandatory fields!');
      return;
    }

    if (childNameError) {
      alert(childNameError);
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

    if (emailError) {
      alert(emailError);
      return;
    }

    setIsSubmitted(true);
  };

  // Scroll smoothly down to the progression timeline ladder
  const scrollToLadder = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById('level-section-1');
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const selectedLevelData = ADMISSION_LEVELS.find(l => l.key === selectedGradeKey) || ADMISSION_LEVELS[0];

  // Reusable dynamic card renderer
  const renderDetailsCard = (level, isActive) => (
    <div 
      className={`level-details-card ${isActive ? 'card-glow' : ''}`}
      style={{ borderLeftColor: level.themeColor }}
    >
      <span className="level-tagline" style={{ color: level.themeColor }}>{level.tagline}</span>
      
      <div className="level-card-title-row">
        <div>
          <span className="level-badge" style={{ backgroundColor: level.bgLight, color: level.themeColor }}>
            Level 0{level.id}
          </span>
          <h3 className="level-title-text">{level.title}</h3>
          <span className="level-grade-range">{level.gradeLabel}</span>
        </div>
        <span className="level-age-badge" style={{ backgroundColor: level.themeColor }}>
          {level.ageRange}
        </span>
      </div>

      <p className="level-card-desc">{level.desc}</p>

      {/* Co-curricular/Academic Highlights tags */}
      <div className="level-card-highlights">
        <span className="hl-heading">🎯 Developmental Highlights:</span>
        <div className="hl-cloud">
          {level.highlights.map((h, i) => (
            <span key={i} className="hl-pill" style={{ backgroundColor: level.bgLight, border: `1px solid ${level.themeColor}33` }}>
              {h}
            </span>
          ))}
        </div>
      </div>

      <div className="level-card-action">
        <button 
          className="btn-apply-level" 
          style={{ 
            backgroundColor: level.themeColor,
            boxShadow: `0 6px 20px ${level.themeColor}33` 
          }}
          onClick={() => triggerApplication(level.key)}
        >
          Apply for {level.title} Admissions →
        </button>
      </div>
    </div>
  );

  // Reusable kid circle container with decorative rotating outline rings
  const renderKidCircle = (level, isActive) => (
    <div className="visual-circle-wrapper">
      {/* Floating level badge/label above the circle */}
      <span 
        className={`image-floating-label ${isActive ? 'active-floating-label' : ''}`}
        style={{ 
          '--accent-color': level.themeColor,
          '--bg-light': level.bgLight
        }}
      >
        {level.title}
      </span>

      {/* Decorative dashed outer boundary ring */}
      <div 
        className={`visual-ring-decor ${isActive ? 'rotate-ring' : ''}`} 
        style={{ borderColor: `${level.themeColor}44` }}
      ></div>
      
      <div 
        className="level-image-halo" 
        style={{ 
          backgroundColor: level.bgLight,
          borderColor: level.themeColor 
        }}
      >
        {/* Bubbly particles floating behind active kid illustration */}
        {isActive && (
          <div className="active-card-particles">
            <div className="part-bubble p-1" style={{ '--bg-bubble': level.themeColor }}></div>
            <div className="part-bubble p-2" style={{ '--bg-bubble': level.themeColor }}></div>
            <div className="part-bubble p-3" style={{ '--bg-bubble': level.themeColor }}></div>
          </div>
        )}
        
        <img 
          src={level.image} 
          alt={`${level.title} student`} 
          className="level-student-img" 
        />
      </div>
    </div>
  );

  return (
    <div className="admissions-page" id="admission">
      
      {/* ── 1. HERO HEADER ── */}
      <section className="admissions-hero">
        <div className="hero-glowing-glows">
          <div className="circle-glow glow-1"></div>
          <div className="circle-glow glow-2"></div>
        </div>
        <div className="admissions-hero-inner">
          <span className="hero-mini-lbl">🌱 ADMISSIONS OPEN FOR ACADEMIC YEAR 2026-27</span>
          <h1 className="hero-title">
            Watch Them Grow, <br />
            <span className="serif-italic">Lead, and Succeed</span>
          </h1>
          <p className="hero-desc">
            Our admissions pathway follows your child's organic developmental milestones. Experience a premium, nurturing education model designed for Play School through Grade 8. Scroll down to explore our levels and secure your seat.
          </p>
          <div className="hero-actions">
            <a href="#admissions-ladder" className="btn-primary-gold" onClick={scrollToLadder}>
              VIEW PROGRESSION LADDER ↓
            </a>
            <button className="btn-secondary-glass" onClick={() => triggerApplication('early')}>
              APPLY DIRECTLY NOW ↗
            </button>
          </div>

          {/* Core Trust Counters */}
          <div className="hero-stats-banner">
            <div className="hero-stat-item">
              <span className="stat-num">4 Levels</span>
              <span className="stat-lbl">Early - Middle Journey</span>
            </div>
            <div className="hero-stat-item">
              <span className="stat-num">1:15 Ratio</span>
              <span className="stat-lbl">Personalized Attention</span>
            </div>
            <div className="hero-stat-item">
              <span className="stat-num">100% Secure</span>
              <span className="stat-lbl">Nurturing Environment</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. THE LADDER TIMELINE ROAD ── */}
      <section className="admissions-ladder-section" id="admissions-ladder">
        <div className="ladder-header-block">
          <span className="section-label">CHILD PROGRESSION JOURNEY</span>
          <h2 className="ladder-main-title">The Foundation Progression</h2>
          <p className="ladder-desc">
            Notice how our learning logic grows organically with your child's age, fostering critical thinking, confidence, and emotional empathy.
          </p>
          <div className="header-divider"></div>
        </div>

        <div className="ladder-container">
          
          {/* THE GLOWING INTERACTIVE CENTER ROAD */}
          <div className="ladder-progress-pipeline">
            <div className="pipeline-track"></div>
            {/* The active filling bar */}
            <div 
              className="pipeline-fill-active" 
              style={{ 
                height: `${scrollProgress}%`,
                background: `linear-gradient(to bottom, #f0ab26 0%, #48b38f 50%, #2c5bd6 100%)`
              }}
            ></div>
            
            {/* Pulsing nodes */}
            {ADMISSION_LEVELS.map((level) => (
              <div 
                key={level.id} 
                className={`pipeline-node node-${level.id} ${activeSection >= level.id ? 'active-node' : ''}`}
                style={{ '--node-color': level.themeColor }}
              >
                <span className="node-num">{level.id}</span>
              </div>
            ))}
          </div>

          {/* STAGGERED LEVEL ROW ITEMS */}
          <div className="ladder-levels-list">
            {ADMISSION_LEVELS.map((level) => {
              const isActive = activeSection === level.id;
              const isEven = level.id % 2 === 0;
              
              return (
                <div 
                  key={level.id} 
                  id={`level-section-${level.id}`} 
                  data-level-id={level.id}
                  className={`level-row-item ${isActive ? 'level-active' : ''}`}
                >
                  
                  {/* Left Column Cell */}
                  <div className={`level-left-cell ${!isEven ? 'cell-circle' : 'cell-card'}`}>
                    {!isEven ? renderKidCircle(level, isActive) : renderDetailsCard(level, isActive)}
                  </div>

                  {/* Right Column Cell */}
                  <div className={`level-right-cell ${isEven ? 'cell-circle' : 'cell-card'}`}>
                    {isEven ? renderKidCircle(level, isActive) : renderDetailsCard(level, isActive)}
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 3. INTERACTIVE APPLICATION GLASS FORM MODAL ── */}
      {isFormOpen && (
        <div className="admissions-form-overlay" onClick={() => setIsFormOpen(false)}>
          <div className="admissions-form-modal" onClick={e => e.stopPropagation()}>
            <button className="form-close-btn" onClick={() => setIsFormOpen(false)}>×</button>
            
            {!isSubmitted ? (
              <>
                <div className="form-header">
                  <img src={logoImg} alt="Vision Play School Logo" className="form-logo" />
                  <span className="form-subtitle">VISION PLAY SCHOOL ADMISSION PORTAL</span>
                  <h3 className="form-title">Enroll Your Child</h3>
                  <p className="form-desc">Please fill out this registration pool form. Our admissions committee will contact you within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="admissions-glass-form">
                  
                  {/* Select Level Dropdown */}
                  <div className="form-group">
                    <label>Applying For Educational Stage *</label>
                    <select 
                      value={selectedGradeKey} 
                      onChange={(e) => triggerApplication(e.target.value)}
                      className="form-select-input"
                    >
                      <option value="early">Early Years (Play School - Nursery)</option>
                      <option value="foundation">Foundation Years (Grades 1 - 2)</option>
                      <option value="preparatory">Preparatory Years (Grades 3 - 5)</option>
                      <option value="middle">Middle School (Grades 6 - 8)</option>
                    </select>
                  </div>

                  {/* Dynamic Grade selection */}
                  <div className="form-group">
                    <label>Specific Grade applying for *</label>
                    <select 
                      name="grade"
                      value={formData.grade} 
                      onChange={handleInputChange}
                      className="form-select-input"
                    >
                      {selectedLevelData.grades.map((gr, idx) => (
                        <option key={idx} value={gr}>{gr}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-row-two">
                    {/* Child Name */}
                    <div className="form-group">
                      <label>Child's Full Name *</label>
                      <input 
                        type="text" 
                        name="childName"
                        value={formData.childName}
                        onChange={handleInputChange}
                        placeholder="John Doe Jr"
                        required
                        className="form-text-input"
                      />
                      {childNameError && (
                        <span className="text-rose-500 font-sans font-semibold text-[11px] mt-0.5 text-left">
                          • {childNameError}
                        </span>
                      )}
                    </div>

                    {/* Child DOB */}
                    <div className="form-group">
                      <label>Child's Date of Birth *</label>
                      <input 
                        type="date" 
                        name="dob"
                        value={formData.dob}
                        onChange={handleInputChange}
                        required
                        className="form-text-input"
                      />
                    </div>
                  </div>

                  <div className="form-row-two">
                    {/* Parent Name */}
                    <div className="form-group">
                      <label>Parent/Guardian Name *</label>
                      <input 
                        type="text" 
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        placeholder="John Doe Sr"
                        required
                        className="form-text-input"
                      />
                      {parentNameError && (
                        <span className="text-rose-500 font-sans font-semibold text-[11px] mt-0.5 text-left">
                          • {parentNameError}
                        </span>
                      )}
                    </div>

                    {/* Parent Phone */}
                    <div className="form-group">
                      <label>Primary Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="7987165487"
                        required
                        className="form-text-input"
                      />
                      {phoneError && (
                        <span className="text-rose-500 font-sans font-semibold text-[11px] mt-0.5 text-left">
                          • {phoneError}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Parent Email */}
                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="parent@example.com"
                      className="form-text-input"
                    />
                    {emailError && (
                      <span className="text-rose-500 font-sans font-semibold text-[11px] mt-0.5 text-left">
                        • {emailError}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="form-submit-btn"
                    style={{ 
                      backgroundColor: selectedLevelData.themeColor,
                      boxShadow: `0 6px 20px ${selectedLevelData.themeColor}44` 
                    }}
                  >
                    Submit Admissions Pool Application →
                  </button>

                </form>
              </>
            ) : (
              // CELEBRATORY SUCCESS CARD WITH BALLOONS
              <div className="form-success-card">
                
                {/* FLOATING SUCCESS BALLOONS */}
                <div className="celebratory-balloons">
                  <div className="success-balloon b-gold">🎈</div>
                  <div className="success-balloon b-mint">🎈</div>
                  <div className="success-balloon b-blue">🎈</div>
                  <div className="success-balloon b-gold-light">🎈</div>
                  <div className="success-balloon b-mint-light">🎈</div>
                  <div className="success-balloon b-blue-light">🎈</div>
                  <div className="success-confetti cf-1">✨</div>
                  <div className="success-confetti cf-2">🎨</div>
                  <div className="success-confetti cf-3">🤖</div>
                  <div className="success-confetti cf-4">🧮</div>
                </div>

                <div className="success-badge-icon">🎉</div>
                
                <h3 className="success-title">Application Received!</h3>
                <span className="success-grade-pill" style={{ backgroundColor: selectedLevelData.bgLight, color: selectedLevelData.themeColor }}>
                  Registered Grade: {formData.grade} ({selectedLevelData.title})
                </span>

                <div className="success-letter-body">
                  <p>Dear <strong>{formData.parentName}</strong>,</p>
                  <p>
                    We have successfully registered your child, <strong>{formData.childName}</strong>, in the <strong>Vision Play School {selectedLevelData.title} admissions registry pool</strong> for Academic Session 2026-27.
                  </p>
                  <p>
                    A foundational mentor from the {selectedLevelData.title} department will reach out to you at <strong>{formData.phone}</strong> within the next 24 hours to schedule a campus walkthrough and interactive child-parent sensory session.
                  </p>
                  <p className="success-closing">Welcome to the Vision Play School family! Warmly, <br /><strong>Admissions Committee, Vision Play School</strong></p>
                </div>

                <button className="success-close-action-btn" onClick={() => setIsFormOpen(false)}>
                  Go Back to Admissions Journey
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ── 4. FAQS AND SUPPORT FOOTER ── */}
      <section className="admissions-footer-faqs">
        <div className="faqs-inner">
          <h3 className="faqs-title">Admissions Support</h3>
          <p className="faqs-desc">Have questions about seat availability, fees, or documents required? We are here to help!</p>
          <div className="faqs-buttons">
            <a href="tel:+917987165487" className="faq-contact-btn">📞 Call +91 79871 65487</a>
            <a href="tel:+918450050747" className="faq-contact-btn">📞 Call +91 84500 50747</a>
            <a href="mailto:visionplayschool12@gmail.com" className="faq-contact-btn">✉️ visionplayschool12@gmail.com</a>
          </div>
          <p className="faq-closing-text">Vision Play School is fully verified, government recognized, and strictly follows play-based early foundation models.</p>
        </div>
      </section>

    </div>
  );
}
