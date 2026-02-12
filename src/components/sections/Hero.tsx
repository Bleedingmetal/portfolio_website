import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-apple-blue-light/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-tl from-apple-teal-light/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-3 py-1 rounded-full bg-apple-gray-200 text-apple-gray-800 text-sm font-medium mb-4"
            >
              Computer Science Student
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-apple-gray-900 mb-4"
            >
               <span className="bg-gradient-to-r from-apple-blue-light to-apple-teal-light bg-clip-text text-transparent">Aditya Manoj Krishna</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-apple-gray-700 mb-8 max-w-lg"
            >
              A Computer Science Student at WPI.
            </motion.p>
          </motion.div>
          
          {/* Profile Image */}
          {/*
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">

              <div className="absolute -top-6 -left-6 w-24 h-24 bg-apple-blue-light/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-apple-teal-light/10 rounded-full blur-xl"></div>
              <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden p-1">
                <img 
                  src="/profile_photo.jpg" 
                  alt="Aditya" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </motion.div> 
          */}
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-apple-gray-600 mb-2">Scroll Down</span>
          <svg className="text-apple-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M19 12l-7 7-7-7"/></svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
