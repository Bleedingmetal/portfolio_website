import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks: SocialLink[] = [
    { 
      name: 'GitHub', 
      icon: <FiGithub size={20} />, 
      url: 'https://github.com/Bleedingmetal' 
    },
    { 
      name: 'LinkedIn', 
      icon: <FiLinkedin size={20} />, 
      url: 'https://www.linkedin.com/in/aditya-manoj275/' 
    },
    { 
      name: 'Email', 
      icon: <FiMail size={20} />, 
      url: 'mailto:amkrishna@wpi.edu' 
    }
  ];

  return (
    <footer className="py-8 mt-16 relative overflow-hidden bg-gradient-to-b from-white/50 via-white/20 to-gray-50">
      {/* Gradient background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-apple-gray-300 to-transparent opacity-30"></div>
        <div className="absolute bottom-1/2 left-1/4 w-64 h-64 bg-gradient-to-tr from-apple-purple-light/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-tl from-apple-blue-light/10 to-transparent rounded-full blur-3xl"></div>
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
            {socialLinks.map((link) => {
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-apple-gray-700 hover:text-apple-blue-light hover:shadow-lg transition-all"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              );
            })}
          </motion.div>
          
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-apple-gray-600 text-sm">
              &copy; {currentYear} Aditya. All rights reserved.
            </p>
            <p className="text-apple-gray-500 text-xs mt-1">
              Built with React, Tailwind CSS, and Framer Motion
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
