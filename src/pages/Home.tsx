import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Skills />
        </>
    );
};

export default Home;