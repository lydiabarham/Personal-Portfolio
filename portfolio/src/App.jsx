import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import ProjectGallery from './components/pages/ProjectGallery/ProjectGallery';
import Contact from './components/pages/Contact/Contact';
import Header from './components/header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<ProjectGallery />} />
        <Route path="contact/*" element={<Contact />} />
      </Routes>
    </Router>
  );
}



export default App;
