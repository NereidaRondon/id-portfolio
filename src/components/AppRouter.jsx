import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Approach from './Approach';
import Projects from './Projects';
import Videos from './Videos';
import Contact from './Contact';
import AdultLearning from './AdultLearning';
import Phishing from './Phishing';
import Parallel from './Parallel';
import Addie from './Addie';
import Tour from './Tour';
import Sam from './Sam';

export default function AppRouter() {

  
  return (
    <Routes>

      <Route exact path="/" element={<Home />} />

      <Route path="/approach" element={<Approach />} />

      <Route path="/projects" element={<Projects />} />

      <Route path="/videos" element={<Videos />} />

      <Route path="/contact" element={<Contact />} />



      <Route path="/adultlearning" element={<AdultLearning />} />
      <Route path="/phishing" element={<Phishing />} />
      <Route path="/parallel" element={<Parallel />} />
      <Route path="/addie" element={<Addie />} />
      <Route path="/sam" element={<Sam />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/approach" element={<Approach />} />
      <Route path="/approach" element={<Approach />} />
      <Route path="/approach" element={<Approach />} />

    </Routes>
  );
}