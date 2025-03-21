import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiGithub, FiExternalLink } from 'react-icons/fi'; // Import individual icons

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
  { name: 'C/C++', category: 'programming', level: 4, description: 'Systems programming and algorithm implementation' },
  { name: 'SQL', category: 'programming', level: 4, description: 'Database design, querying, and optimization' },
  { name: 'Node.js', category: 'programming', level: 3, description: 'Backend development and API creation' },
  { name: 'R', category: 'programming', level: 3, description: 'Statistical analysis and data visualization' },
  { name: 'MATLAB', category: 'programming', level: 3, description: 'Numerical computing and algorithm development' },
  
  // Concepts
  { name: 'Machine Learning', category: 'concepts', level: 3, description: 'Neural networks, supervised/unsupervised learning, and model evaluation' },
  { name: 'NLP', category: 'concepts', level: 3, description: 'Text processing, sentiment analysis, and language models with SpaCy' },
  { name: 'Data Structures', category: 'concepts', level: 5, description: 'Implementation and application of various data structures' },
  { name: 'Algorithms', category: 'concepts', level: 4, description: 'Algorithm design, analysis, and optimization' },
  { name: 'OOP', category: 'concepts', level: 5, description: 'Object-oriented design principles and patterns' },
  { name: 'Linear Algebra', category: 'concepts', level: 4, description: 'Vector spaces, matrices, and transformations' },
  { name: 'Statistics', category: 'concepts', level: 5, description: 'Probability theory, hypothesis testing, and statistical modeling' },
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
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-apple-gray-200/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-tl from-apple-gray-200/30 to-transparent rounded-full blur-3xl" />
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
                  ? 'bg-apple-blue-light text-white shadow-md'
                  : 'bg-apple-gray-200 text-apple-gray-700 hover:bg-apple-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-effect rounded-xl p-4 cursor-pointer"
              onClick={() => setActiveSkill(skill)}
            >
              <h3 className="text-lg font-semibold text-apple-gray-900 mb-2">{skill.name}</h3>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 w-full rounded-full mx-0.5 ${
                      i < skill.level 
                        ? 'bg-gradient-to-r from-apple-blue-light to-apple-teal-light' 
                        : 'bg-apple-gray-200'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-apple-gray-600 line-clamp-2">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Skill Detail Modal */}
        {activeSkill && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setActiveSkill(null)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-apple-gray-900 mb-2">{activeSkill.name}</h3>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-full rounded-full mx-0.5 ${
                      i < activeSkill.level 
                        ? 'bg-gradient-to-r from-apple-blue-light to-apple-teal-light' 
                        : 'bg-apple-gray-200'
                    }`}
                  />
                ))}
              </div>
              <p className="text-apple-gray-700 mb-4">{activeSkill.description}</p>
              <div className="flex justify-end">
                <button 
                  onClick={() => setActiveSkill(null)}
                  className="px-4 py-2 bg-apple-gray-200 text-apple-gray-800 rounded-lg hover:bg-apple-gray-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}

        <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-center mt-16"
                >
                  <p className="text-apple-gray-600 mb-6">
                    These are just a few of my recent projects. Check out my GitHub for more!
                  </p>
                  <a 
                    href="https://github.com/Bleedingmetal" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white text-apple-gray-800 font-medium rounded-lg shadow-md hover:shadow-lg border border-apple-gray-200 transition-all"
                  >
                    <span className="mr-2">
                      <FiGithub />
                    </span>
                    View More on GitHub
                  </a>
                </motion.div>
      </div>
    </section>
  );
};

export default Skills;
