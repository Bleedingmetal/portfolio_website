import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <Experience />
        <About />
        <Projects />
        <Skills />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
