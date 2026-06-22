import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi';
import { SiEtsy } from 'react-icons/si';
import { useTheme } from './ThemeProvider';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const stats = [
    { value: '6+', label: 'Projects' },
    { value: '2+', label: 'Hackathons' },
    { value: '1+', label: 'Experience' },
    { value: '4+', label: 'Certifications' },
  ];

  const socialLinks = [
    { icon: FiGithub, url: "https://github.com/sakinaowais989", label: "GitHub" },
    { icon: FiLinkedin, url: "https://www.linkedin.com/in/sakina-owais-2aab4132b/", label: "LinkedIn" },
    { icon: SiEtsy, url: "https://skfashionscrafts.etsy.com", label: "Etsy" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-20">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-center">
          
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center w-full lg:w-5/12"
          >
            <div className="relative">
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${isDark ? 'rgba(0, 194, 255, 0.2)' : 'rgba(0, 194, 255, 0.15)'}, transparent)`,
                  width: '130%',
                  height: '130%',
                  top: '-15%',
                  left: '-15%',
                  filter: 'blur(30px)',
                }}
              ></div>
              
              <motion.div 
                className="relative overflow-hidden mx-auto"
                style={{
                  width: 'clamp(180px, 50vw, 340px)',
                  height: 'clamp(200px, 55vw, 360px)',
                  borderRadius: '35% 65% 70% 30% / 40% 45% 55% 60%',
                  boxShadow: `0 0 35px ${isDark ? '#00C2FF' : '#008DFF'}`,
                  border: `2px solid ${isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 194, 255, 0.4)'}`,
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src="/profile.jpg" 
                  alt="Sakina Owais" 
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 30%' }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content - Light Mode Fixed */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-7/12 text-center lg:text-left"
          >
            <h2 className="text-neon-cyan font-semibold mb-1.5 sm:mb-2 text-[10px] sm:text-xs md:text-sm lg:text-base tracking-wider">
              HELLO, I'M
            </h2>
            
            {/* Name - Dark mode white, Light mode dark gray */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4">
              <span className={isDark ? "text-white" : "text-gray-900"}>Sakina Owais</span>
            </h1>
            
            {/* Frontend Developer - Fixed for light mode */}
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4">
              <span className={isDark ? "text-white" : "text-gray-700"}>And I'm a </span>
              <span className="text-neon-cyan font-medium">Frontend Developer</span>
            </h3>
            
            {/* Description - Light mode dark gray */}
            <div className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-5 md:mb-6">
              <p className={`leading-relaxed text-[11px] sm:text-xs md:text-sm lg:text-base px-2 lg:px-0 max-w-md mx-auto lg:mx-0 ${isDark ? 'text-white/90' : 'text-gray-600'}`}>
                I build responsive, scalable, and high-performance web applications using React.js, Next.js, and TypeScript.
              </p>
              <p className={`leading-relaxed text-[11px] sm:text-xs md:text-sm lg:text-base px-2 lg:px-0 max-w-md mx-auto lg:mx-0 ${isDark ? 'text-white/90' : 'text-gray-600'}`}>
                With expertise in frontend architectures, I transform complex requirements into elegant, user-friendly interfaces.
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-2 sm:gap-2.5 mb-4 sm:mb-5 md:mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg transition-all flex items-center justify-center ${
                      isDark 
                        ? 'bg-dark-navy/50 border border-neon-cyan/30 hover:border-neon-cyan' 
                        : 'bg-white/80 border border-neon-cyan/40 hover:shadow-md hover:border-neon-cyan'
                    }`}>
                      <Icon size={14} className={`${isDark ? 'text-white hover:text-neon-cyan' : 'text-gray-700 hover:text-neon-cyan'} transition-colors`} />
                    </div>
                  </motion.a>
                );
              })}
            </div>
            
            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2.5 border border-neon-cyan rounded-lg hover:bg-neon-cyan/10 transition-all text-[11px] sm:text-xs md:text-sm font-medium text-neon-cyan"
              whileHover={{ scale: 1.02, x: 3 }}
            >
              Get in touch
              <FiArrowRight size={10} className="sm:w-3 sm:h-3 md:w-4 md:h-4" />
            </motion.a>
          </motion.div>
        </div>

        {/* Stats - Light Mode Fixed */}
        <div className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 md:gap-5 lg:gap-6 w-full">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-sm sm:text-lg md:text-xl lg:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  {stat.value}
                </div>
                <div className={`text-[9px] sm:text-[10px] md:text-xs lg:text-sm mt-0.5 ${isDark ? 'text-white/70' : 'text-gray-500'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;