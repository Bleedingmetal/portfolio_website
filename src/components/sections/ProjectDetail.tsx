import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from './Projects';
import { FiExternalLink } from 'react-icons/fi';

function slugify(title: string) {
  return title.replace(/\s+/g, '-').toLowerCase();
}

const ProjectDetail: React.FC = () => {
  const { slug } = useParams();
  const project = projectsData.find(p => slugify(p.title) === slug);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto py-20">
        <p className="text-center">Project not found.</p>
        <div className="text-center mt-4"><Link to="/" className="text-apple-blue-light">Back home</Link></div>
      </div>
    );
  }

  return (
    <section className="relative">
      {/* Hero */}
      <div className="relative h-80 md:h-[36rem] w-full overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        {/* Dan fade filter: bottom-heavy gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white" style={{pointerEvents: 'none'}} />

        {/* Glassy text overlay */}
        <div className="absolute left-6 bottom-6 p-4 rounded-lg bg-white/40 backdrop-blur-md max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold text-apple-gray-900">{project.title}</h1>
          <p className="mt-2 text-apple-gray-700">{project.period}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sticky sidebar */}
          <aside className="md:col-span-1">
            <div className="sticky top-28 space-y-4">
              <nav className="space-y-2">
                <a href="#overview" className="block text-apple-gray-700 hover:text-apple-blue-light">Overview</a>
                <a href="#design" className="block text-apple-gray-700 hover:text-apple-blue-light">Design</a>
                <a href="#features" className="block text-apple-gray-700 hover:text-apple-blue-light">Features</a>
              </nav>
              <div className="mt-6">
                <a href={project.github || '#'} target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-2 bg-apple-blue-light text-white rounded-md">
                  <FiExternalLink className="mr-2" /> View Repository
                </a>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="md:col-span-3">
            <div id="overview" className="mb-6">
              <div className="border border-apple-gray-100 p-4 rounded-md bg-white/50">
                <strong className="text-apple-gray-800">Project Status:</strong>
                <p className="mt-2 text-apple-gray-700">Heads Up! This project is a prototype and actively maintained.</p>
              </div>
            </div>

            <section id="description" className="prose max-w-none text-apple-gray-700">
              <h2>Overview</h2>
              <p>{project.description}</p>
            </section>

            <section id="design" className="mt-8">
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-apple-gray-700">Design notes and images go here.</p>
            </section>

            <section id="features" className="mt-8">
              <h3 className="text-xl font-semibold mb-2">Features</h3>
              <p className="text-apple-gray-700">Feature list and technical details go here.</p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
