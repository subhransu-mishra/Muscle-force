import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="h-[75px] mb-5 z-50">
      <div className="flex items-center justify-between py-6 px-5 bg-gradient-to-r from-purple-500 to-indigo-600 shadow-gray-500 shadow-2xl">
        <Link to="/">
          <h1 className="text-xl font-bold text-white">MUSCLE FORCE</h1>
        </Link>
        <div className="gap-10 font-medium text-white hidden lg:flex">
          <Link to="/BmiCalculator">BMI Calculator</Link>
          <Link to="/CaloriesCalculator">Calorie Calculator</Link>
          <Link to="/Courses">Courses</Link>
          <Link to="/Community">Community</Link>
        </div>
        <div className="gap-10 lg:flex font-medium hidden text-white">
          <Link to="/Login">Login</Link>
          <Link to="/Register">Register</Link>
        </div>
        <div className="cursor-pointer md:hidden text-white" onClick={toggleMenu}>
          <AiOutlineMenu size={24} />
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="bg-white fixed top-[75px] left-0 right-0 shadow-md p-4 z-40"
          >
            {/* Centered menu items */}
            <div className="menu-items-container flex flex-col items-center">
              <motion.div variants={menuItemVariants} className="menu-item">
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className="text-gray-800 block py-2"
                >
                  HOME
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants} className="menu-item">
                <Link
                  to="/BmiCalculator"
                  onClick={toggleMenu}
                  className="text-gray-800 block py-2"
                >
                  BMI CALCULATOR
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants} className="menu-item">
                <Link
                  to="/CaloriesCalculator"
                  onClick={toggleMenu}
                  className="text-gray-800 block py-2"
                >
                  CALORIE CALCULATOR
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants} className="menu-item">
                <Link
                  to="/Courses"
                  onClick={toggleMenu}
                  className="text-gray-800 block py-2"
                >
                  Courses
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
