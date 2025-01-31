import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GoogleAnalytics from './components/GoogleAnalytics';

// Pages
import Main from './pages/Main';
import CenterIntro from './pages/center/CenterIntro';
import Greeting from './pages/center/Greeting';
import Location from './pages/center/Location';
import Contact from './pages/center/Contact';
import ServiceIntro from './pages/services/ServiceIntro';
import LongTermCare from './pages/services/LongTermCare';
import HomeCare from './pages/services/HomeCare';
import BathService from './pages/services/BathService';
import FreeApplication from './pages/application/FreeApplication';
import Community from './pages/community/Community';
import Gallery from './pages/community/Gallery';
import Board from './pages/community/Board';
import Volunteer from './pages/volunteer/Volunteer';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <GoogleAnalytics />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/center">
              <Route index element={<CenterIntro />} />
              <Route path="greeting" element={<Greeting />} />
              <Route path="location" element={<Location />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="/services">
              <Route index element={<ServiceIntro />} />
              <Route path="long-term-care" element={<LongTermCare />} />
              <Route path="home-care" element={<HomeCare />} />
              <Route path="bath-service" element={<BathService />} />
            </Route>
            <Route path="/application">
              <Route index element={<FreeApplication />} />
              <Route path="free" element={<FreeApplication />} />
            </Route>
            <Route path="/community">
              <Route index element={<Community />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="board" element={<Board />} />
            </Route>
            <Route path="/volunteer" element={<Volunteer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}