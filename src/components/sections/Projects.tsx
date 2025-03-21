import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiGithub, FiExternalLink } from 'react-icons/fi'; // Import individual icons
import githubLinks from '../../data/githubLinks';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  period: string;
  category: ('ai' | 'web' | 'simulation' | 'internship' | 'competition')[];
}

{/* for the love of god I need to figure out how to add more catagories to one item or imma have to delete catagories */}

const projectsData: Project[] = [
  {
    title: 'AI Chatbot & Vector Database',
    description: 'Developed an enterprise-grade chatbot at Cognida.ai using LangChain and LlamaIndex. Built a robust ingestion pipeline for document processing and created a vector database for efficient knowledge retrieval.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tags: ['LangChain', 'LlamaIndex', 'Vector Database', 'NLP', 'Python'],
    period: 'May 2024 - August 2024',
    category: ['internship', 'ai']
  },
  {
    title: 'Ex-Inmate Monitoring System',
    description: 'Developed backend software at Talitrix for monitoring ex-inmates, integrating real-time data collection and alert systems. Implemented secure API endpoints and database management for sensitive information.',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tags: ['Backend Development', 'API Design', 'Database Management', 'Security'],
    period: 'June 2022 - August 2022',
    category: ['internship' , 'web']
  },
  {
    title: 'MIT Battlecode 2025',
    description: 'Developed AI-controlled units in Java, optimizing decision-making for sieging, defense, and resource management. Implemented A* pathfinding with dynamic adjustments for obstacles and enemy positions. Designed paint relay and tower-building logic to control map influence and economy.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tags: ['Java', 'AI', 'Pathfinding', 'Game Strategy', 'Optimization'],
    github: githubLinks["battlecode"],
    period: 'January 2025',
    category: ['competition']
  },
  {
    title: 'Formula 1 AI Chat-Bot',
    description: 'Developed an AI-powered F1 chatbot using React, Next.js, Tailwind CSS, and ChromaDB for real-time race strategy insights. Built a RAG system with Node.js, Express, and OpenAI embeddings for context-aware retrieval of F1 radio messages.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'ChromaDB', 'OpenAI', 'RAG'],
    github: githubLinks["formula1-chatbot"],
    period: 'November 2024',
    category: ['ai', 'competition', 'web']
  },
  {
    title: 'Buoyancy Simulator',
    description: 'Developed Python code with Matplotlib, NumPy, and Pandas to simulate buoyancy effects based on temperature, volume, and density. Created as part of the IBDP Extended Essay.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tags: ['Python', 'Matplotlib', 'NumPy', 'Pandas', 'Physics Simulation'],
    github: githubLinks["buoyancy-simulator"],
    period: 'October 2022 - December 2022',
    category: ['simulation']
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'web' | 'simulation' | 'internship' | 'competition'>('all');


  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'internship', name: 'Internship Projects' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'competition', name: 'Competitions' },
    { id: 'web', name: 'Web Development' },
    { id: 'simulation', name: 'Simulation' },
  ];

  const filteredProjects = filter === 'all' 
  ? projectsData 
  : projectsData.filter(project => project.category.includes(filter));


  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gradient-to-tr from-apple-blue-light/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-bl from-apple-blue-light/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Projects</h2>
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
              onClick={() => setFilter(category.id as 'all' | 'ai' | 'web' | 'simulation' | 'internship' | 'competition')}

              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category.id
                  ? 'bg-gradient-to-r from-apple-blue-light to-apple-teal-light text-white shadow-md'
                  : 'bg-white text-apple-gray-700 hover:bg-apple-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="glass-effect rounded-2xl shadow-xl overflow-hidden h-full flex flex-col transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-apple-gray-800">
                      {project.title}
                    </h3>
                    <span className="text-xs text-apple-gray-500">{project.period}</span>
                  </div>
                  
                  <p className="text-apple-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-apple-gray-100 text-apple-gray-700"
                      >
                        <span className="mr-1">
                          <FiCode size={12} />
                        </span>
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-apple-blue-light text-white rounded-lg hover:bg-apple-blue-dark transition-colors"
                        aria-label="View GitHub Repository"
                      >
                        <span className="mr-2">
                          <FiGithub size={18} />
                        </span>
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-apple-gray-200 text-apple-gray-800 rounded-lg hover:bg-apple-gray-300 transition-colors"
                        aria-label="View Live Demo"
                      >
                        <span className="mr-2">
                          <FiExternalLink size={18} />
                        </span>
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
