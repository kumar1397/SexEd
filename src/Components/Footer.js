import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-pink-600 p-4 text-white mt-auto"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto text-center">
        &copy; 2024 Sex Education Hub. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
