import React from 'react';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Features } from './components/Features';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Banner />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;