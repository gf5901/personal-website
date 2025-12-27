import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Experience from './pages/Experience';
import Work from './pages/Work';
import Articles from './pages/Articles';
import About from './pages/About';
import BlogPost from './pages/BlogPost';
import ProjectDetail from './pages/ProjectDetail';
import { ScrollToTop } from './components/layout/ScrollToTop';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element not found');
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/work" element={<Work />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<BlogPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        {/* Legacy routes for backward compatibility */}
        <Route path="/blog" element={<Articles />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

