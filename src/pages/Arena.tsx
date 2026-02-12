import React from 'react';
import { Link } from 'react-router-dom';

const Arena: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative">
        <img
          src="/portfolio_website/ARena.jpg"
          alt="ARena"
          className="w-full h-[60vh] md:h-[75vh] object-cover"
        />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-5xl mx-auto w-full px-6 pb-12 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">ARena: Shared AR Experience</h1>
            <p className="mt-3 text-apple-gray-300 max-w-2xl">ARena is a shared AR experience built for stadiums and live venues — spectators see e-sports games projected into vivid reality, projected right over the existing field. Instead of watching on a screen, fans experience the match as if it’s happening live before them, sharing reactions and energy together. It combines the excitement of traditional sports with the creativity of modern gaming for a new kind of live event.</p>
            <div className="mt-4 flex justify-center md:justify-start gap-2 flex-wrap">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/6 text-xs">Meta XR</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/6 text-xs">Image Tracking</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/6 text-xs">Real-time Sync</span>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black" />

        <div className="sticky top-0 z-30">
          <div className="backdrop-blur-md bg-white/6 dark:bg-black/20 border-b border-white/6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
              <div className="text-sm font-semibold">Aditya Manoj Krishna</div>
              <div className="flex items-center gap-6 text-sm opacity-90">
                <a href="#overview" className="hover:underline">Overview</a>
                <a href="#inspiration" className="hover:underline">Inspiration</a>
                <a href="#design" className="hover:underline">How We Built It</a>
                <a href="#challenges" className="hover:underline">Challenges</a>
                <Link to="/" className="ml-4 text-xs opacity-80">Back</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
        <aside className="md:col-span-3">
          <nav className="sticky top-28 space-y-3">
            <ul className="text-sm text-apple-gray-400">
              <li><a href="#overview" className="block py-2 px-3 rounded hover:bg-white/3">Overview</a></li>
              <li><a href="#inspiration" className="block py-2 px-3 rounded hover:bg-white/3">Inspiration</a></li>
              <li><a href="#design" className="block py-2 px-3 rounded hover:bg-white/3">How We Built It</a></li>
              <li><a href="#challenges" className="block py-2 px-3 rounded hover:bg-white/3">Challenges</a></li>
              <li><a href="#accomplishments" className="block py-2 px-3 rounded hover:bg-white/3">Accomplishments</a></li>
              <li><a href="#learned" className="block py-2 px-3 rounded hover:bg-white/3">What We Learned</a></li>
              <li><a href="#next" className="block py-2 px-3 rounded hover:bg-white/3">What's Next</a></li>
              <li><a href="#built-with" className="block py-2 px-3 rounded hover:bg-white/3">Built With</a></li>
            </ul>
          </nav>
        </aside>

        <article className="md:col-span-9 max-w-none">
          <div className="mb-6">
            <div className="rounded-lg border border-amber-700 bg-amber-900/10 p-4">
              <strong className="block font-semibold text-amber-300">Project Status</strong>
              <p className="text-sm text-apple-gray-300">Work in progress — this engineering writeup will be expanded with details, diagrams, and measured results.</p>
            </div>
          </div>

          <section id="overview" className="mb-10">
            <h2 className="text-3xl font-bold mb-4">Overview</h2>
            <p className="text-apple-gray-300 mb-4">ARena is a shared AR experience built for stadiums and live venues. With AR glasses, spectators can see e-sports games brought into vivid reality, projected right over the existing field. Instead of watching on a screen, fans experience the match as if it’s happening live before them, sharing reactions and energy together. It combines the excitement of traditional sports with the creativity of modern gaming for a new kind of live event.</p>
          </section>

          <section id="inspiration" className="mb-10">
            <h2 className="text-3xl font-bold mb-4">Inspiration</h2>
            <p className="text-apple-gray-300 mb-4">Watching e-sports in person doesn’t capture the same social energy as traditional sports. With the rapid growth of AR and VR technology and the rise of e-sports, we saw a chance to bring that missing sense of connection back. Our generation values real experiences and shared moments, and we wanted to create a way for e-sports fans to feel that same excitement together in person.</p>
            <p className="text-apple-gray-300">Meta’s recent advances in AR, like the Meta Display Glasses and Orion prototypes, inspired us to use their hardware to build our first prototype. As AR technology becomes as common as smartphones, we believe experiences like ARena will redefine how people watch, play, and connect.</p>
          </section>

          <section id="design" className="mb-10">
            <h2 className="text-3xl font-bold mb-4">How We Built It</h2>
            <p className="text-apple-gray-300 mb-4">We used Meta’s latest AR tools to create a shared environment that feels natural and accurate. Our main innovation was an image tracking system that maps the virtual arena in 3D space relative to each user.</p>
            <p className="text-apple-gray-300 mb-4">Instead of placing large, costly markers on the field, we used small markers at audience seats. The headset tracks these to anchor the arena for every viewer, keeping everything lined up perfectly. This method makes setup easy, affordable, and highly accurate, giving users a stable and immersive experience.</p>
          </section>

          <section id="challenges" className="mb-10">
            <h2 className="text-3xl font-bold mb-4">Challenges</h2>
            <p className="text-apple-gray-300 mb-4">Getting all users to see the same arena playing at the same time in the same place was tricky. Fine-tuning the tracking system and networking so multiple devices stayed synced took a lot of trial and error. On top of that, Meta’s development tools came with a steep learning curve and plenty of setup hurdles. But after a lot of testing and problem solving, we built a version that works smoothly and reliably in real time.</p>
          </section>

          <section id="accomplishments" className="mb-10">
            <h2 className="text-3xl font-bold mb-4">Accomplishments</h2>
            <p className="text-apple-gray-300 mb-4">We’re proud of finding creative ways to combine familiar technology with emerging tools to create something new. Despite a tough development process, we adapted quickly and learned how to make complex AR systems work together. Building a working prototype in such a new environment was a real achievement for our team.</p>
          </section>

          <section id="learned" className="mb-10">
            <h2 className="text-3xl font-bold mb-4">What We Learned</h2>
            <p className="text-apple-gray-300 mb-4">We learned that AR development is still a challenging space. Current tools are not very developer friendly, and even AI support has limited knowledge of how to work with them. It showed us how much room there is for growth in this field and how early we are in its evolution.</p>
          </section>

          <section id="next" className="mb-10">
            <h2 className="text-3xl font-bold mb-4">What's Next for ARena</h2>
            <p className="text-apple-gray-300 mb-4">We have plenty of ideas for the future. Imagine concerts where artists can perform across the entire country in one day, or AI commentators bringing live personality to every match. We’re also exploring the possibility of capturing live 3D footage of real sporting events and streaming them anywhere in the world through AR. The possibilities are endless, and ARena is just the start.</p>
          </section>

          <section id="built-with" className="mb-10">
            <h2 className="text-3xl font-bold mb-4">Built With</h2>
            <div className="flex flex-wrap gap-2">
              {['Blender','C','C++','MetaXR','OpenXR','Python','Unity'].map((tech) => (
                <span key={tech} className="inline-flex items-center px-3 py-1 rounded-full bg-white/6 text-sm">{tech}</span>
              ))}
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Arena;
