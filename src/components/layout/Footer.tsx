import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: FiIcons.FiGithub, 
      url: 'https://github.com/Bleedingmetal' 
    },
    { 
      name: 'LinkedIn', 
      icon: FiIcons.FiLinkedin, 
      url: 'https://linkedin.com/in/aditya-krishna-wpi' 
    },
    { 
      name: 'Email', 
      icon: FiIcons.FiMail, 
      url: 'mailto:adityakrishna@wpi.edu' 
    }
  ];

  return (
    <footer className="py-8 mt-16 relative overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent opacity-30"></div>
        <div className="absolute bottom-1/2 left-1/4 w-64 h-64 bg-gradient-to-tr from-purple-100/20 to-transparent dark:from-purple-900/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-tl from-blue-100/20 to-transparent dark:from-blue-900/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex space-x-4 mb-6"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label={link.name}
              >
                {React.createElement(link.icon, { size: 20 })}
              </a>
            ))}
          </motion.div>

          {/* Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6 text-sm"
          >
            <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">About</a>
            <a href="#experience" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
          </motion.div>

          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 dark:text-gray-400 text-center"
          >
            <p> {currentYear} Aditya. All rights reserved.</p>
            <p className="mt-1">Built with React and </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
