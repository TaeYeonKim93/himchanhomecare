import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Partners from './components/Partners';
import Footer from './components/Footer';

// Center pages
import CenterIntro from './pages/center/CenterIntro';
import Greeting from './pages/center/Greeting';
import Location from './pages/center/Location';

// Service pages
import LongTermCare from './pages/services/LongTermCare';
import HomeCare from './pages/services/HomeCare';
import BathService from './pages/services/BathService';

// Community pages
import News from './pages/community/News';
import Gallery from './pages/community/Gallery';
import Inquiry from './pages/community/Inquiry';
import Jobs from './pages/community/Jobs';

// Support pages
import Donation from './pages/support/Donation';
import Volunteer from './pages/support/Volunteer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Contact />
              <Partners />
            </>
          } />
          
          {/* Center Routes */}
          <Route path="/center" element={<CenterIntro />} />
          <Route path="/greeting" element={<Greeting />} />
          <Route path="/location" element={<Location />} />
          
          {/* Service Routes */}
          <Route path="/long-term-care" element={<LongTermCare />} />
          <Route path="/home-care" element={<HomeCare />} />
          <Route path="/bath-service" element={<BathService />} />
          
          {/* Community Routes */}
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/jobs" element={<Jobs />} />
          
          {/* Support Routes */}
          <Route path="/donation" element={<Donation />} />
          <Route path="/volunteer" element={<Volunteer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;