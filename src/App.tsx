import React from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative">
        <Navbar />
        <main className="pt-16 pb-20">
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Contact />
        </main>
        <footer className="py-8 text-center border-t border-neon-cyan/20">
          <p className="text-text-light text-sm">&copy; 2024 Sakina Owais. All rights reserved.</p>
        </footer>
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
}

export default App;