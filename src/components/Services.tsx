import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiSmartphone, FiGlobe, FiServer, FiShoppingCart } from 'react-icons/fi';
import { useTheme } from './ThemeProvider';

const Services: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const services = [
    { icon: FiCode, title: 'Web Development', desc: 'Custom websites and web applications' },
    { icon: FiLayout, title: 'UI/UX Design', desc: 'Beautiful, user-friendly interfaces' },
    { icon: FiSmartphone, title: 'Responsive Design', desc: 'Mobile-first, responsive layouts' },
    { icon: FiGlobe, title: 'SEO Optimization', desc: 'Improve search engine visibility' },
    { icon: FiServer, title: 'Backend Integration', desc: 'API integration and databases' },
    { icon: FiShoppingCart, title: 'E-commerce', desc: 'Online stores and payment integration' },
  ];

  return (
    <section id="services" className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            <span className={isDark ? "text-white" : "text-gray-900"}>My</span>
            <span className={isDark ? "text-white" : "text-gray-900"}>&nbsp;</span>
            <span className="text-neon-cyan">Services</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-neon-cyan to-electric-blue mx-auto mb-5 md:mb-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 text-center cursor-pointer group"
              >
                <div className="inline-flex p-3 rounded-xl bg-neon-cyan/10 neon-border mb-4 group-hover:neon-glow transition-all">
                  <Icon className="text-neon-cyan" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className={`${isDark ? 'text-text-light' : 'text-gray-600'}`}>{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;