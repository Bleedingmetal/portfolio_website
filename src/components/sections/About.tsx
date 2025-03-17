import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';

const About: React.FC = () => {
  // Education data from resume
  const education = {
    school: "Worcester Polytechnic Institute",
    degree: "Bachelor's in Computer Science",
    period: "August 2023 - May 2027",
    gpa: "3.8",
  };

  // Languages from resume
  const languages = ["Hindi", "Gujarati", "Tamil", "Telugu"];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gradient-to-tr from-purple-100/30 to-transparent dark:from-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-transparent dark:from-blue-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">About Me</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-2xl p-6 md:p-8 shadow-xl h-full">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                My Journey
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  I'm a Computer Science student at Worcester Polytechnic Institute with a passion for artificial intelligence, machine learning, and software development. My academic journey has equipped me with a strong foundation in both theoretical concepts and practical applications.
                </p>
                
                <p>
                  My experience spans from developing AI-powered chatbots and building vector databases to creating backend systems for monitoring applications. I enjoy solving complex problems and turning innovative ideas into functional software solutions.
                </p>
                
                <p>
                  When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or expanding my knowledge in areas like neural networks and natural language processing. I believe in continuous learning and pushing the boundaries of what's possible with technology.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education & Languages */}
          <div className="space-y-6">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 md:p-8 shadow-xl"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl mr-4">
                  {React.createElement(FiIcons.FiBook, { size: 24, className: "text-purple-600 dark:text-purple-400" })}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Education
                </h3>
              </div>
              
              <div className="pl-2 border-l-2 border-purple-200 dark:border-purple-800/30 ml-6">
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  {education.degree}
                </h4>
                <p className="text-purple-600 dark:text-purple-400 font-medium">
                  {education.school}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 dark:text-gray-400 mt-1 gap-2 sm:gap-3">
                  <span>{education.period}</span>
                  <span className="hidden sm:block">•</span>
                  <span>GPA: {education.gpa}</span>
                </div>
              </div>
            </motion.div>

            {/* Honors */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 md:p-8 shadow-xl"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mr-4">
                  {React.createElement(FiIcons.FiAward, { size: 24, className: "text-blue-600 dark:text-blue-400" })}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Honors
                </h3>
              </div>
              
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span>WPI Dean's List Academic Excellence Award (Fall 2023, Spring 2024)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span>WPI Presidential Scholarship</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span>Second Place and Youngest CEO - TiE Young Entrepreneurs Competition</span>
                </li>
              </ul>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 md:p-8 shadow-xl"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl mr-4">
                  {React.createElement(FiIcons.FiGlobe, { size: 24, className: "text-green-600 dark:text-green-400" })}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Languages
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {languages.map((language) => (
                  <span 
                    key={language}
                    className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-medium"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
