import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { FloatingContacts } from './components/FloatingContacts';
import { Home } from './pages/Home'; // This now includes the marquee
import { BreedDetail } from './pages/BreedDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { AdoptionProcess } from './pages/AdoptionProcess';
import { LoadingScreen } from './components/LoadingScreen';
import { Footer } from './components/Footer';
import './index.css';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-cream">
        <ScrollToTop />
        <Header />
        <main className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/breed/:slug" element={<BreedDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/adoption-process" element={<AdoptionProcess />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContacts />
      </div>
    </Router>
  );
}

export default App;