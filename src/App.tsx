import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Arena from './pages/Arena';

// Import your new Home page and the ProjectDetail page
import Home from './pages/Home';
import ProjectDetail from './components/sections/ProjectDetail';

function App() {
    return (
        <ThemeProvider>
            <Layout>
                <Routes>
                    {/* With basename set in index.tsx, "/" matches "/portfolio_website/" */}
                    <Route path="/" element={<Home />} />

                    {/* This matches "/portfolio_website/project/:id" */}
                    <Route path="/project/:id" element={<ProjectDetail />} />
                    <Route path="/projects/arena" element={<Arena />} />
                </Routes>
            </Layout>
        </ThemeProvider>
    );
}

export default App;