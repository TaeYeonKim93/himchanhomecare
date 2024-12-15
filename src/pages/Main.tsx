import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Partners from '../components/Partners';

export default function Main() {
  return (
    <div className="w-full">
      <Hero />
      <div className="w-full">
        <Services />
        <Contact />
        <Partners />
      </div>
    </div>
  );
} 