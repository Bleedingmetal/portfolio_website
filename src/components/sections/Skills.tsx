import React from 'react';
import { motion } from 'framer-motion';

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['C', 'Java', 'C++', 'Python', 'R', 'Matlab', 'TypeScript', 'SQL', 'HDL Verilog', 'FPGA']
  },
  {
    name: 'Technologies & Frameworks',
    skills: ['React.js', 'Node.js', 'Django', 'Express', 'Tailwind CSS', 'Prisma ORM', 'LangChain', 'SpaCy', 'Llama Index', 'TensorFlow', 'SciPy', 'Matplotlib', 'JWT', 'OAuth2', 'Web Speech API', 'HTML & CSS']
  },
  {
    name: 'Tools & Platforms',
    skills: ['Git', 'PostgreSQL', 'AWS (ECR, RDS, CloudFront, ECS)', 'Linux', 'Docker', 'Computer Vision', 'Object Detection & Segmentation']
  },
  {
    name: 'Hardware & Specialized',
    skills: ['Arduino', 'Nvidia Jetson Orin', 'Embedded Systems', 'Control Electronics', 'Sensor Integration', 'NIR Imaging', 'Fusion360']
  }
];

const Skills: React.FC = () => {
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
          className="text-center mb-20"
        >
          <h2 className="section-heading">Skills</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="flex flex-col gap-10 max-w-3xl mx-auto">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-apple-gray-900 mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-apple-gray-100 text-apple-gray-800 hover:bg-apple-blue-light hover:text-white transition-colors cursor-default">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
