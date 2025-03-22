'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { title: "Custom Kitchen Design", value: "custom-design" },
  { title: "Kitchen Renovation", value: "renovation" },
  { title: "Modular Solutions", value: "modular" },
  { title: "Material Selection", value: "material" }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <header className="fixed w-full bg-black shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex justify-between items-center py-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Section: Text Logo */}
          <motion.div 
            className="flex-shrink-0 hidden md:block"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/" className="text-2xl font-serif text-[#C9A66B] relative group">
              RAKSHAN KITCHEN
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A66B] group-hover:w-full transition-all duration-300"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </Link>
          </motion.div>

          {/* Center Section: Logo Image */}
          <motion.div 
            className="flex-1 flex justify-center mx-4"
            variants={itemVariants}
          >
            <Link href="/" className="block relative group">
              <motion.div 
                className="relative w-[320px] h-[120px] sm:w-[400px] sm:h-[150px] flex items-center justify-center"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.4, 0, 0.2, 1]
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-[#C9A66B]/10 rounded-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  whileHover={{
                    opacity: 1,
                    scale: 1.05,
                    boxShadow: '0 0 50px rgba(201, 166, 107, 0.4), 0 0 20px rgba(201, 166, 107, 0.3) inset'
                  }}
                />
                <Image
                  src="/images/logo.png"
                  alt="RAKSHAN KITCHEN & LIGHT Logo"
                  width={400}
                  height={150}
                  className="object-contain w-full h-full relative z-10"
                  priority
                />
                <motion.div
                  className="absolute inset-0 pointer-events-none z-20"
                  initial={{ opacity: 0 }}
                  whileHover={{ 
                    opacity: 1,
                    boxShadow: '0 0 40px rgba(201, 166, 107, 0.5), 0 0 80px rgba(201, 166, 107, 0.3)'
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-[#C9A66B]/0 via-[#C9A66B]/20 to-[#C9A66B]/0 z-0 rounded-lg"
                  initial={{ opacity: 0, x: -200 }}
                  animate={{
                    opacity: [0, 1, 0],
                    x: [200, 0, -200],
                  }}
                  transition={{
                    duration: 2.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0.5
                  }}
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Right Section: Navigation */}
          <motion.div 
            className="flex items-center"
            variants={itemVariants}
          >
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href="/"
                  className="text-white hover:text-[#C9A66B] transition-colors duration-200 relative group"
                >
                  Home
                  <motion.span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A66B] group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href="/about"
                  className="text-white hover:text-[#C9A66B] transition-colors duration-200 relative group"
                >
                  About
                  <motion.span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A66B] group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className="text-white hover:text-[#C9A66B] transition-colors duration-200 relative group flex items-center"
                >
                  Services
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                  <motion.span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A66B] group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="absolute left-0 mt-2 w-64 bg-black border border-[#C9A66B]/20 shadow-xl rounded-sm"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.value}
                          href={`/contact?service=${service.value}`}
                          className="block px-4 py-3 text-white hover:bg-[#C9A66B]/10 hover:text-[#C9A66B] transition-colors duration-200"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href="/contact"
                  className="text-white hover:text-[#C9A66B] transition-colors duration-200 relative group"
                >
                  Contact
                  <motion.span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A66B] group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
            </nav>

            {/* Mobile menu button */}
            <motion.div 
              className="md:hidden"
              variants={itemVariants}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? "auto" : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-white block px-3 py-2 hover:text-[#C9A66B] transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white block px-3 py-2 hover:text-[#C9A66B] transition-colors duration-200"
            >
              About
            </Link>
            <div className="space-y-1">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-white w-full text-left px-3 py-2 hover:text-[#C9A66B] transition-colors duration-200 flex items-center justify-between"
              >
                Services
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-6 space-y-1"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.value}
                        href={`/contact?service=${service.value}`}
                        className="text-white/80 block px-3 py-2 hover:text-[#C9A66B] transition-colors duration-200"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link
              href="/contact"
              className="text-white block px-3 py-2 hover:text-[#C9A66B] transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header; 