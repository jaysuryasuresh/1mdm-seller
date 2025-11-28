import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { Process } from './components/Process';
import { VideoSection } from './components/VideoSection';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <VideoSection />
        <Process />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
