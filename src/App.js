import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import { Home, About, Portfolio,Contact,Social,Services,Blog, Testimonials } from './pages';
import { Header } from './components';
export default function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
      <Route path="/blog" element={<Blog />} />
      <Route path="/testimonals" element={<Testimonials />} />
      <Route path="/services" element={<Services />} />
      <Route path="/social" element={<Social />} />
      <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
