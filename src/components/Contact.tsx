import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { SiEtsy } from 'react-icons/si';
import { useTheme } from './ThemeProvider';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:sakinaowais2@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  const socialLinks = [
    { icon: FiGithub, url: "https://github.com/sakinaowais989", label: "GitHub", color: "#181717" },
    { icon: FiLinkedin, url: "https://www.linkedin.com/in/sakina-owais-2aab4132b/", label: "LinkedIn", color: "#0077B5" },
    { icon: SiEtsy, url: "https://skfashionscrafts.etsy.com", label: "Etsy", color: "#F16521" },
    { icon: FiInstagram, url: "https://www.instagram.com/colourful_creations106/", label: "Instagram", color: "#E4405F" },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            <span className={isDark ? "text-white" : "text-gray-900"}>Contact</span>
            <span className={isDark ? "text-white" : "text-gray-900"}>&nbsp;</span>
            <span className="text-neon-cyan">Me</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-neon-cyan to-electric-blue mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p className={`${isDark ? 'text-text-light' : 'text-gray-600'} text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-4`}>
            Have a project in mind? Let's work together!
          </p>
        </motion.div>

        {/* VIP Social Icons - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12"
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <div 
                  className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg"
                  style={{
                    background: isDark ? 'rgba(5, 38, 61, 0.8)' : 'rgba(255, 255, 255, 0.9)',
                    border: `1px solid ${social.color}40`,
                    boxShadow: `0 0 10px ${social.color}30`
                  }}
                >
                  <Icon size={16} style={{ color: social.color }} />
                </div>
                <span className={`absolute -bottom-7 left-1/2 -translate-x-1/2 text-white text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none ${
                  isDark ? 'bg-gray-900' : 'bg-gray-800'
                }`}>
                  {social.label}
                </span>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Contact Form & Info - Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-3 sm:space-y-4"
          >
            <div className="glass-card rounded-xl p-3 sm:p-4 md:p-5 flex items-center gap-3 sm:gap-4 hover:neon-glow transition-all duration-300">
              <div className="p-2 sm:p-3 bg-neon-cyan/10 rounded-lg neon-border">
                <FiMail className="text-neon-cyan" size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className={`${isDark ? 'text-text-light' : 'text-gray-500'} text-xs sm:text-sm`}>Email</h3>
                <p className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium text-xs sm:text-sm md:text-base truncate`}>sakinaowais2@gmail.com</p>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-3 sm:p-4 md:p-5 flex items-center gap-3 sm:gap-4 hover:neon-glow transition-all duration-300">
              <div className="p-2 sm:p-3 bg-neon-cyan/10 rounded-lg neon-border">
                <FiPhone className="text-neon-cyan" size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className={`${isDark ? 'text-text-light' : 'text-gray-500'} text-xs sm:text-sm`}>Phone</h3>
                <p className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium text-xs sm:text-sm md:text-base`}>+92 313 2034268</p>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-3 sm:p-4 md:p-5 flex items-center gap-3 sm:gap-4 hover:neon-glow transition-all duration-300">
              <div className="p-2 sm:p-3 bg-neon-cyan/10 rounded-lg neon-border">
                <FiMapPin className="text-neon-cyan" size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className={`${isDark ? 'text-text-light' : 'text-gray-500'} text-xs sm:text-sm`}>Location</h3>
                <p className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium text-xs sm:text-sm md:text-base`}>Karachi, Pakistan</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-3 sm:space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 bg-dark-navy/50 rounded-xl neon-border focus:outline-none focus:ring-2 focus:ring-neon-cyan text-white placeholder-text-light text-sm sm:text-base transition-all"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 bg-dark-navy/50 rounded-xl neon-border focus:outline-none focus:ring-2 focus:ring-neon-cyan text-white placeholder-text-light text-sm sm:text-base transition-all"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <textarea
              placeholder="Your Message"
              required
              rows={4}
              className="w-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 bg-dark-navy/50 rounded-xl neon-border focus:outline-none focus:ring-2 focus:ring-neon-cyan text-white placeholder-text-light resize-none text-sm sm:text-base transition-all"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full flex items-center justify-center gap-2 rounded-xl py-2 sm:py-2.5 md:py-3 text-sm sm:text-base font-semibold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <FiSend size={16} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;