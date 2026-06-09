import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Send, CheckCircle2, User, PhoneCall, GraduationCap, Baby } from 'lucide-react';

export default function Admission() {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    childName: '',
    grade: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone || !formData.childName || !formData.grade) return;
    
    setLoading(true);
    // Simulate API storage
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Reset form
      setFormData({ parentName: '', phone: '', childName: '', grade: '' });
    }, 1500);
  };

  return (
    <section 
      id="admission" 
      className="relative py-16 sm:py-24 w-full bg-primary text-white overflow-hidden border-t border-slate-900"
    >
      {/* Background Subtle Graphic elements */}
      <div className="absolute top-[30%] left-[10%] w-[300px] h-[300px] bg-orange-accent/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-sky-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: CTA Title & Child Image */}
          <div className="lg:col-span-5 flex items-center gap-6 text-left">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-orange-accent shrink-0 hidden sm:block shadow-lg bg-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=400" 
                alt="Happy child thumbs up" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-1">
              <h2 className="text-white font-sans font-black text-3xl sm:text-4xl tracking-tight leading-none uppercase">
                Admissions
              </h2>
              <span className="text-orange-accent font-sans font-black text-4xl sm:text-5xl tracking-tight leading-none uppercase block">
                Open Now
              </span>
              <p className="text-white/80 font-sans text-sm font-light leading-relaxed pt-1.5 max-w-sm">
                Give your child the best start for a bright and confident future.
              </p>
            </div>
          </div>

          {/* Middle Column: Contacts (Phone, WhatsApp) */}
          <div className="lg:col-span-3 space-y-6 text-left border-t border-b lg:border-t-0 lg:border-b-0 border-white/10 py-6 lg:py-0 lg:px-6">
            
            {/* Phone numbers */}
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-orange-accent mt-1 shrink-0" />
              <div>
                <h4 className="text-xs text-white/50 font-bold uppercase tracking-wider">Call Us Now</h4>
                <a href="tel:7987165487" className="text-lg font-bold text-white hover:text-orange-accent transition-colors block mt-0.5">7987165487</a>
                <a href="tel:8450050747" className="text-lg font-bold text-white hover:text-orange-accent transition-colors block">8450050747</a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-emerald-400 mt-1 shrink-0 fill-current" />
              <div>
                <h4 className="text-xs text-white/50 font-bold uppercase tracking-wider">WhatsApp Us</h4>
                <a 
                  href="https://wa.me/917987165487" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm font-bold text-white hover:text-emerald-400 transition-colors block mt-0.5"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="lg:col-span-4 w-full">
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-2xl text-slate-800">
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4 text-left"
                  >
                    <h3 className="text-primary font-sans font-black text-xl text-center sm:text-left">Enquire Now</h3>

                    <div className="space-y-3">
                      {/* Parent Name */}
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="Parent Name"
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm font-sans focus:outline-none focus:border-primary transition-all"
                      />

                      {/* Mobile Number */}
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Mobile Number"
                        required
                        pattern="[0-9]{10}"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm font-sans focus:outline-none focus:border-primary transition-all"
                      />

                      {/* Child Name */}
                      <input
                        type="text"
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        placeholder="Child's Name"
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm font-sans focus:outline-none focus:border-primary transition-all"
                      />

                      {/* Select Grade */}
                      <select
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 text-sm font-sans focus:outline-none focus:border-primary transition-all"
                      >
                        <option value="">Select Class</option>
                        <option value="playgroup">Playgroup</option>
                        <option value="nursery">Nursery</option>
                        <option value="lkg">LKG</option>
                        <option value="ukg">UKG</option>
                      </select>
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 bg-orange-accent hover:bg-orange-600 disabled:bg-orange-400 text-white font-sans font-bold rounded-xl transition-all shadow-md active:scale-99 cursor-pointer flex items-center justify-center gap-2 text-sm mt-2"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Enquiry"
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-8 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <div className="w-16 h-16 bg-emerald-100 border border-emerald-200 text-emerald-500 rounded-full flex items-center justify-center shadow-md animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-primary font-sans font-extrabold text-xl">Enquiry Submitted!</h3>
                      <p className="text-slate-500 font-sans text-xs max-w-xs leading-relaxed">
                        We have logged your request and our admission officer will contact you shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2 rounded-full border border-slate-200 text-primary font-semibold text-xs hover:bg-slate-100 transition-all cursor-pointer"
                    >
                      Submit another enquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
