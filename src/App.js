import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import { Home, About, Portfolio } from './pages';
import { Header } from './components';
export default function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
