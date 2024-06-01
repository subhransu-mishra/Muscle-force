import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 text-white py-4 text-center mt-10"
    >
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MUSCLE FORCE. All rights reserved.
        </p>
        {/* <p className="text-sm mt-2">Designed with ❤️ by Your Name</p> */}
        <div className="flex justify-center mt-4">
          <a href="#" className="mx-2 text-gray-300 hover:text-white">Terms of Service</a>
          <span className="text-gray-300">|</span>
          <a href="#" className="mx-2 text-gray-300 hover:text-white">Privacy Policy</a>
          <span className="text-gray-300">|</span>
          <a href="#" className="mx-2 text-gray-300 hover:text-white">Contact Us</a>
        </div>
        <p className="text-sm mt-4">123 Fitness Avenue, City, State, ZIP Code, Country</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
