import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useGoogleAnalytics, trackPageView } from './hooks/useGoogleAnalytics';
import TrustStrip from './components/TrustStrip';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function AppContent() {
  const location = useLocation();
  useGoogleAnalytics();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <TrustStrip />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
