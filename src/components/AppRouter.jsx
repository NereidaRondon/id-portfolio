import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

export default function AppRouter() {
  return (
    <Routes>

      <Route exact path="/" element={<Home />} />

      {/* <Route path="/about" element={<About />} /> */}

      <Route path="/projects" element={<Projects />} />

      <Route path="/contact" element={<Contact />} />

    </Routes>
  );
}