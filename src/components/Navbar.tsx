import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiMenu,
  FiX,
  FiDownload,
  FiSun,
  FiMoon,
  FiHome,
  FiUser,
  FiCode,
  FiBriefcase,
  FiFolder,
  FiMail,
} from 'react-icons/fi';
import { useTheme } from './ThemeProvider';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? isDark
              ? 'bg-dark-navy shadow-lg'
              : 'bg-white shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-2">
            
            {/* Logo */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              className="text-xl sm:text-2xl font-bold z-50 shrink-0 truncate max-w-[55vw] sm:max-w-none"
            >
              <span className={isDark ? 'text-white' : 'text-gray-900'}>Sakina</span>
              <span className="text-cyan-400"> Owais</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className={`font-medium transition-all duration-300 text-sm lg:text-base ${
                    isDark
                      ? 'text-gray-200 hover:text-cyan-400'
                      : 'text-gray-700 hover:text-cyan-500'
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center gap-3">
              {/* Theme Toggle - Desktop (fixed-size switch, math matches track width) */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="relative w-14 h-7 shrink-0 rounded-full transition-all duration-300 hover:scale-105 flex items-center"
                style={{
                  backgroundColor: isDark ? '#1e293b' : '#e2e8f0',
                  boxShadow: isDark
                    ? '0 0 6px rgba(0,194,255,0.35)'
                    : '0 0 4px rgba(0,194,255,0.25)',
                }}
              >
                <motion.div
                  className="absolute left-0.5 w-6 h-6 shrink-0 aspect-square rounded-full bg-white flex items-center justify-center"
                  animate={{
                    x: isDark ? 28 : 0, // track 56px - thumb 24px - 2*2px padding = 28px travel
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                  }}
                  style={{
                    boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
                  }}
                >
                  {isDark ? (
                    <FiMoon size={13} className="text-cyan-500" />
                  ) : (
                    <FiSun size={13} className="text-yellow-500" />
                  )}
                </motion.div>
              </button>
              
              {/* Download CV Button */}
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium shadow-lg transition-all text-sm shrink-0"
              >
                <FiDownload size={14} />
                Download CV
              </motion.a>
            </div>

            {/* Mobile Controls - Hamburger Left */}
            <div className="flex items-center gap-3 md:hidden shrink-0">
              {/* Mobile Theme Toggle - smaller fixed switch, math matches track width */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="relative w-16 h-7 shrink-0 rounded-full transition-all duration-300 hover:scale-105 flex items-center"
                style={{
                  backgroundColor: isDark ? '#1e293b' : '#e2e8f0',
                  boxShadow: isDark
                    ? '0 0 4px rgba(0,194,255,0.3)'
                    : '0 0 3px rgba(0,194,255,0.2)',
                }}
              >
                <motion.div
                  className="absolute left-0.5 w-6 h-6 shrink-0 aspect-square rounded-full bg-white flex items-center justify-center"
                  animate={{
                    x: isDark ? 36 : 0, // track 64px - thumb 24px - 2*2px padding = 36px travel
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                  }}
                  style={{
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  }}
                >
                  {isDark ? (
                    <FiMoon size={13} className="text-cyan-500" />
                  ) : (
                    <FiSun size={13} className="text-yellow-500" />
                  )}
                </motion.div>
              </button>

              {/* Hamburger Button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle Menu"
                className={`relative flex items-center justify-center w-9 h-9 rounded-lg transition-all shrink-0 z-[60] ${
                  isDark
                    ? 'bg-white/10 hover:bg-white/20 text-white'
                    : 'bg-black/5 hover:bg-black/10 text-black'
                }`}
              >
                {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              />

              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-[78vw] max-w-xs sm:w-72 z-50 shadow-2xl md:hidden overflow-y-auto"
                style={{
                  background: isDark
                    ? 'rgba(5, 38, 61, 0.98)'
                    : 'rgba(255, 255, 255, 0.98)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div className="flex flex-col pt-20 px-4 space-y-1">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 5 }}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-base ${
                        isDark
                          ? 'text-gray-200 hover:bg-white/10 hover:text-cyan-400'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-cyan-500'
                      }`}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                  
                  {/* Download CV in Menu */}
                  <div className="pt-4 mt-2 border-t border-cyan-400/20">
                    <motion.a
                      href="/resume.pdf"
                      download
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all text-base ${
                        isDark
                          ? 'bg-pink-500/20 text-pink-400 hover:bg-pink-500/30'
                          : 'bg-pink-100 text-pink-600 hover:bg-pink-200'
                      }`}
                    >
                      <FiDownload size={16} />
                      Download CV
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;