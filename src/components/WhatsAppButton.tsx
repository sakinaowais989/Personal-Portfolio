import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "923132034268";
  const message = "Hi! I'm interested in working with you.";

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className="fixed z-[9999]"
      style={{ 
        bottom: '24px', 
        right: '24px'
      }}
    >
      <motion.button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600 text-white shadow-xl transition-all flex items-center justify-center"
        style={{
          width: '55px',
          height: '55px',
          borderRadius: '50%'
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: ['0 0 0 0 rgba(34, 197, 94, 0.7)', '0 0 0 10px rgba(34, 197, 94, 0)'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <FaWhatsapp size={28} />
      </motion.button>
    </motion.div>
  );
};

export default WhatsAppButton;