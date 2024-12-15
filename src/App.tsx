import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Main from './pages/Main';
import CenterIntro from './pages/center/CenterIntro';
import Greeting from './pages/center/Greeting';
import Location from './pages/center/Location';
import Contact from './pages/center/Contact';
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
            <Route path="/center">
              <Route index element={<CenterIntro />} />
              <Route path="intro" element={<CenterIntro />} />
              <Route path="greeting" element={<Greeting />} />
              <Route path="location" element={<Location />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="/services">
              <Route index element={<ServiceIntro />} />
              <Route path="intro" element={<ServiceIntro />} />
            </Route>
            <Route path="/application">
              <Route index element={<FreeApplication />} />
              <Route path="free" element={<FreeApplication />} />
            </Route>
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