import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
