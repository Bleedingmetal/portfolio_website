import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  publication?: string;
}

const experienceData: ExperienceItem[] = [
  {
    title: 'Research Intern for the DRDO',
    company: 'LFOVIA, IIT Hyderabad',
    location: 'Hyderabad, Telangana, India',
    period: 'May 2025 - August 2025',
    description: [
      'Built an in-lab robotic vision prototype from scratch for DRDO\'s biped robot project, covering CAD design, fabrication, embedded control on Arduino and NVIDIA Orin, and vision system integration with mesh network for data relay.',
      'Evaluated and fine-tuned object detection, segmentation, and NIR models across varied environments to track multiple subjects, identify persons of interest, and detect potentially dangerous objects.',
      'Built LFOVIA\'s first functional in-lab robot in over two years, enabling on-site testing and accelerating DRDO\'s vision model validation timeline by several months.'
    ]
  },
  {
    title: 'Research for WPI IQP',
    company: 'FUNDESTEAM / Worcester Polytechnic Institute',
    location: 'Panama City, Panama',
    period: 'August 2025 - October 2025',
    description: [
      'Built a full-stack AI tutor for the World Robot Olympiad in collaboration with FUNDESTEAM, using React, TypeScript, Python (Flask), and OpenAI APIs.',
      'Designed and implemented adaptive logic for personalized robotics and coding guidance.',
      'Co-authored Bridging Educational Gaps in Panama: AI-Powered Coach for the World Robot Olympiad (2025), a published research paper through WPI\'s Global Projects Program.',
      'Collaborated with FUNDESTEAM mentors to align the AI system with real competition training and educational goals.'
    ],
    publication: 'https://digital.wpi.edu/concern/student_works/5999n819m?locale=en'
  },
  {
    title: 'Software Development Intern',
    company: 'Cognida.ai',
    location: 'Hyderabad, TG, India',
    period: 'May 2024 - August 2024',
    description: [
      'Developed a chatbot to provide managers direct access to internal documents like financial reports and legal documents.',
      'Built an ingestion pipeline using llama_index for document transformation and context-based vector search.',
      'Created a vector database using Chroma and Azure OpenAI, reducing query time from 5 minutes to 6 seconds.',
      'Implemented a streaming query engine for uninterrupted access to large datasets.'
    ]
  },
  {
    title: 'Software Development Intern',
    company: 'Talitrix',
    location: 'Remote',
    period: 'June 2022 - August 2022',
    description: [
      'Developed backend software for an ex-inmate monitoring watch tracking vitals and location.',
      'Increased data processing speed and reliability by 67% using parallel processing for sensor input.',
      'Built and optimized mesh network communication between watches, enabling multi-device coordination for more accurate tracking and improved system reliability.'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-apple-blue-light/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-tl from-apple-blue-light/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Professional Experience</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-apple-blue-light to-apple-teal-light opacity-30"></div>

          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-apple-blue-light to-apple-teal-light shadow-lg z-10"></div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass-effect rounded-2xl shadow-xl p-6 md:p-8 ml-8 md:ml-0">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-apple-blue-light/10 rounded-lg mr-4">
                        <FiBriefcase size={20} className="text-apple-blue-light" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-apple-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-apple-blue-light font-medium">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center text-sm text-apple-gray-600 mb-4 gap-3">
                      <div className="flex items-center">
                        <FiCalendar size={14} className="mr-1" />
                        <span>{item.period}</span>
                      </div>
                      <div className="hidden sm:block">•</div>
                      <div className="flex items-center">
                        <FiMapPin size={14} className="mr-1" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 text-apple-gray-800 mt-4">
                      {item.description.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-apple-blue-light mt-2 mr-2 flex-shrink-0"></div>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    {item.publication && (
                      <div className="mt-4 pt-4 border-t border-apple-gray-200">
                        <a
                          href={item.publication}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-apple-blue-light hover:text-apple-blue-dark transition-colors font-medium"
                        >
                          <span className="mr-2">View Publication</span>
                          <FiExternalLink size={16} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty div for layout on desktop */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
