import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{backgroundImage: "url('/hero.jpeg')"}}>
      <div className="absolute inset-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white"
        >
          <motion.h1 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
            className="text-8xl font-bold mb-4 mt-20 text-stone-200" // Added mt-20 to move the text above the center
          >
            Welcome to Muscle Force
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-5xl font-bold text-green-600"
          >
            Unlock your potential!
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
