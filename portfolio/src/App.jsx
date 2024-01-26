import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import ProjectGallery from './components/pages/ProjectGallery/ProjectGallery';
import Contact from './components/pages/Contact/Contact';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <NavTabs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<ProjectGallery />} />
        <Route path="contact/*" element={<Contact />} />
      </Routes>
    </Router>
  );
}



export default App;
