import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  category: 'programming' | 'concepts' | 'tools';
  level: number; // 1-5
  description?: string;
}

const skillsData: Skill[] = [
  // Programming Languages & Frameworks
  { name: 'Python', category: 'programming', level: 5, description: 'Advanced proficiency with libraries like Django, SciPy, Matplotlib, and data science tools' },
  { name: 'React.js', category: 'programming', level: 4, description: 'Building interactive UIs with modern React patterns and hooks' },
  { name: 'Java', category: 'programming', level: 4, description: 'Object-oriented programming and application development' },
  { name: 'C/C++', category: 'programming', level: 3, description: 'Systems programming and algorithm implementation' },
  { name: 'SQL', category: 'programming', level: 4, description: 'Database design, querying, and optimization' },
  { name: 'Node.js', category: 'programming', level: 3, description: 'Backend development and API creation' },
  { name: 'R', category: 'programming', level: 3, description: 'Statistical analysis and data visualization' },
  { name: 'MATLAB', category: 'programming', level: 3, description: 'Numerical computing and algorithm development' },
  
  // Concepts
  { name: 'Machine Learning', category: 'concepts', level: 4, description: 'Neural networks, supervised/unsupervised learning, and model evaluation' },
  { name: 'NLP', category: 'concepts', level: 4, description: 'Text processing, sentiment analysis, and language models with SpaCy' },
  { name: 'Data Structures', category: 'concepts', level: 5, description: 'Implementation and application of various data structures' },
  { name: 'Algorithms', category: 'concepts', level: 4, description: 'Algorithm design, analysis, and optimization' },
  { name: 'OOP', category: 'concepts', level: 5, description: 'Object-oriented design principles and patterns' },
  { name: 'Linear Algebra', category: 'concepts', level: 4, description: 'Vector spaces, matrices, and transformations' },
  { name: 'Statistics', category: 'concepts', level: 4, description: 'Probability theory, hypothesis testing, and statistical modeling' },
  { name: 'Databases', category: 'concepts', level: 4, description: 'Relational and vector database design and optimization' },
  
  // Tools & Technologies
  { name: 'Git', category: 'tools', level: 4, description: 'Version control and collaborative development' },
  { name: 'LangChain', category: 'tools', level: 4, description: 'Building applications with large language models' },
  { name: 'Llama Index', category: 'tools', level: 4, description: 'Data ingestion and retrieval for LLM applications' },
  { name: 'Linux', category: 'tools', level: 3, description: 'Command line operations and system administration' },
  { name: 'Django', category: 'tools', level: 4, description: 'Full-stack web development with Python' },
  { name: 'Vector Databases', category: 'tools', level: 4, description: 'Implementing and optimizing vector search systems' },
];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'programming', name: 'Programming' },
    { id: 'concepts', name: 'Concepts' },
    { id: 'tools', name: 'Tools & Tech' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-purple-100/30 to-transparent dark:from-purple-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-tl from-blue-100/30 to-transparent dark:from-blue-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Skills & Expertise</h2>
          <div className="section-divider"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.05 }}
              onClick={() => setActiveSkill(skill)}
              className="cursor-pointer"
            >
              <div className="glass-effect rounded-xl shadow-md hover:shadow-xl p-4 h-full flex flex-col items-center justify-center text-center transition-all">
                <div className="w-full mb-2">
                  <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
                      style={{ width: `${skill.level * 20}%` }}
                    ></div>
                  </div>
                </div>
                <h3 className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 capitalize">{skill.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill detail modal */}
        {activeSkill && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setActiveSkill(null)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="glass-effect rounded-2xl shadow-2xl p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{activeSkill.name}</h3>
                  <p className="text-sm text-purple-600 dark:text-purple-400 capitalize">{activeSkill.category}</p>
                </div>
                <button 
                  onClick={() => setActiveSkill(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  ✕
                </button>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{activeSkill.level}/5</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
                    style={{ width: `${activeSkill.level * 20}%` }}
                  ></div>
                </div>
              </div>
              
              {activeSkill.description && (
                <p className="text-gray-600 dark:text-gray-400">{activeSkill.description}</p>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
