import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Video from './Videos';
import Contact from './Contact';

export default function AppRouter() {
  return (
    <Routes>

      <Route exact path="/" element={<Home />} />

      <Route path="/approach" element={<Approach />} />

      <Route path="/videos" element={<Videos />} />

      <Route path="/projects" element={<Projects />} />

      <Route path="/contact" element={<Contact />} />

    </Routes>
  );
}