import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiYoutube, FiArrowLeft } from 'react-icons/fi';

const Arena: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Intersection Observer to highlight the sidebar as you scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.3, rootMargin: '0px 0px -50% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navItems = [
    { id: 'overview', label: 'What it does' },
    { id: 'inspiration', label: 'Inspiration' },
    { id: 'design', label: 'How we built it' },
    { id: 'challenges', label: 'Challenges we ran into' },
    { id: 'accomplishments', label: "Accomplishments that we're proud of" },
    { id: 'learned', label: 'What we learned' },
    { id: 'next', label: "What's next for ARena" },
    { id: 'built-with', label: 'Built With' },
  ];

  return (
      <div className="min-h-screen bg-white text-apple-gray-900 relative">
        {/* STATIONARY GRADIENT BACKGROUND
          Fixed position keeps the 'glow' visible even during long scrolls to match Hero.tsx
      */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gradient-to-br from-apple-blue-light/15 to-transparent rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-gradient-to-tl from-apple-teal-light/15 to-transparent rounded-full blur-[100px]" />
          <div className="absolute top-[40%] right-[10%] w-[20%] h-[20%] bg-apple-blue-light/5 rounded-full blur-[80px]" />
        </div>

        {/* Hero Image Section - Hard Line with subtle border */}
        <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden bg-black border-b border-apple-gray-100">
          <img
              src="/portfolio_website/ARena.jpg"
              alt="ARena"
              className="w-full h-full object-cover scale-105 blur-[1px]"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

          <div className="absolute inset-0 flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full px-6">
              <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl"
              >
                ARena
              </motion.h1>

              {/* Functional Project Links */}
              <div className="flex gap-4 flex-wrap">
                <a href="https://devpost.com/software/arena-a5qyuc" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium border border-white/30 hover:bg-white/30 transition-all">
                  <FiExternalLink /> Devpost
                </a>
                <a href="https://github.com/AdityaManojKrishna/ARena" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium border border-white/30 hover:bg-white/30 transition-all">
                  <FiGithub /> GitHub
                </a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium border border-white/30 hover:bg-white/30 transition-all">
                  <FiYoutube /> Demo Video
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Sticky Sidebar with Navigation and Integrated Back Link */}
          <aside className="hidden md:block md:col-span-3">
            <nav className="sticky top-12 space-y-8">
              <div>
                <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-apple-blue-light hover:underline group mb-4">
                  <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                  Back to Projects
                </Link>
                <div className="h-px w-full bg-apple-gray-100 mt-2" />
              </div>

              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-widest text-apple-gray-400 mb-4 px-3">Project Details</p>
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block py-2 px-3 rounded-lg text-sm transition-all duration-200 ${
                            activeSection === item.id
                                ? 'bg-apple-blue-light/10 text-apple-blue-light font-semibold translate-x-1'
                                : 'text-apple-gray-500 hover:bg-apple-gray-100'
                        }`}
                    >
                      {item.label}
                    </a>
                ))}
              </div>
            </nav>
          </aside>

          {/* Content Area - Uses exact user wording */}
          <article className="md:col-span-9 space-y-16">

            <section id="overview" className="scroll-mt-16">

              <h2 className="text-4xl font-bold mb-4 text-apple-gray-900">What it does</h2>
              <p className="text-xl text-apple-gray-700 leading-relaxed font-light">
                ARena is a shared AR experience built for stadiums and live venues. With AR glasses, spectators can see e-sports games brought into vivid reality, projected right over the existing field. Instead of watching on a screen, fans experience the match as if it’s happening live before them, sharing reactions and energy together. It combines the excitement of traditional sports with the creativity of modern gaming for a new kind of live event.
              </p>
            </section>

            <section id="inspiration" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-4 text-apple-gray-900">Inspiration</h2>
              <div className="space-y-4 text-apple-gray-700 leading-relaxed font-light">
                <p>Watching e-sports in person doesn’t capture the same social energy as traditional sports. With the rapid growth of AR and VR technology and the rise of e-sports, we saw a chance to bring that missing sense of connection back. Our generation values real experiences and shared moments, and we wanted to create a way for e-sports fans to feel that same excitement together in person.</p>
                <p>Meta’s recent advances in AR, like the Meta Display Glasses and Orion prototypes, inspired us to use their hardware to build our first prototype. As AR technology becomes as common as smartphones, we believe experiences like ARena will redefine how people watch, play, and connect.</p>
              </div>
            </section>

            <section id="design" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-4 text-apple-gray-900">How we built it</h2>
              <div className="space-y-4 text-apple-gray-700 leading-relaxed font-light">
                <p>We used Meta’s latest AR tools to create a shared environment that feels natural and accurate. Our main innovation was an image tracking system that maps the virtual arena in 3D space relative to each user.</p>
                <p>Instead of placing large, costly markers on the field, we used small markers at audience seats. The headset tracks these to anchor the arena for every viewer, keeping everything lined up perfectly. This method makes setup easy, affordable, and highly accurate, giving users a stable and immersive experience.</p>
              </div>
            </section>

            <section id="challenges" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-4 text-apple-gray-900">Challenges we ran into</h2>
              <p className="text-apple-gray-700 leading-relaxed font-light">
                Getting all users to see the same arena playing at the same time in the same place was tricky. Fine-tuning the tracking system and networking so multiple devices stayed synced took a lot of trial and error. On top of that, Meta’s development tools came with a steep learning curve and plenty of setup hurdles. But after a lot of testing and problem solving, we built a version that works smoothly and reliably in real time.
              </p>
            </section>

            <section id="accomplishments" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-4 text-apple-gray-900">Accomplishments that we're proud of</h2>
              <p className="text-apple-gray-700 leading-relaxed font-light">
                We’re proud of finding creative ways to combine familiar technology with emerging tools to create something new. Despite a tough development process, we adapted quickly and learned how to make complex AR systems work together. Building a working prototype in such a new environment was a real achievement for our team.
              </p>
            </section>

            <section id="learned" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-4 text-apple-gray-900">What we learned</h2>
              <p className="text-apple-gray-700 leading-relaxed font-light">
                We learned that AR development is still a challenging space. Current tools are not very developer friendly, and even AI support has limited knowledge of how to work with them. It showed us how much room there is for growth in this field and how early we are in its evolution.
              </p>
            </section>

            <section id="next" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-4 text-apple-gray-900">What's next for ARena</h2>
              <p className="text-apple-gray-700 leading-relaxed font-light">
                We have plenty of ideas for the future. Imagine concerts where artists can perform across the entire country in one day, or AI commentators bringing live personality to every match. We’re also exploring the possibility of capturing live 3D footage of real sporting events and streaming them anywhere in the world through AR. The possibilities are endless, and ARena is just the start.
              </p>
            </section>

            <section id="built-with" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-6 text-apple-gray-900">Built With</h2>
              <div className="flex flex-wrap gap-3">
                {['Blender','C','C++','MetaXR','OpenXR','Python','Unity'].map((tech) => (
                    <span key={tech} className="px-4 py-2 rounded-xl bg-apple-gray-50 text-apple-gray-600 text-sm font-medium border border-apple-gray-200">
                  {tech}
                </span>
                ))}
              </div>
            </section>

          </article>
        </div>
      </div>
  );
};

export default Arena;