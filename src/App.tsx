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

// Main page
import Main from './pages/Main';
import ServiceIntro from './pages/services/ServiceIntro';
import FreeApplication from './pages/application/FreeApplication';
import Community from './pages/community/Community';
import Support from './pages/support/Support';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/center/greeting" element={<Greeting />} />
            <Route path="/center/location" element={<Location />} />
            <Route path="/center/contact" element={<Contact />} />
            <Route path="/services/intro" element={<ServiceIntro />} />
            <Route path="/application/free" element={<FreeApplication />} />
            <Route path="/community" element={<Community />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;