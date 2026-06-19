import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import EcorePage from './pages/EcorePage.jsx';
import { Toaster } from '@/components/ui/toaster';
import FloatingLeadWidget from './components/FloatingLeadWidget';

function App() {
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof document !== 'undefined') {
        const x = window.innerWidth - 80;
        const y = window.innerHeight - 50;
        const elements = document.elementsFromPoint(x, y);
        // Turn the button white when hovering over dark sections like forest (green) or charcoal
        const overDark = elements.some(el => el.classList && (el.classList.contains('bg-forest') || el.classList.contains('bg-charcoal')));
        setIsOverDarkSection(overDark);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-cream text-charcoal font-sans selection:bg-forest selection:text-cream">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/ecocore" element={<EcorePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      
      {/* Floating Shop Button */}
      <a 
        href="https://ecobricks-106.myshopify.com/" 
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex items-center gap-2 sm:gap-3 pl-4 sm:pl-8 pr-3 sm:pr-5 py-2 sm:py-4 rounded-full shadow-xl transition-all duration-500 hover:scale-110 group border ${
          isOverDarkSection 
            ? 'bg-cream text-forest hover:bg-cream/90 border-forest/10' 
            : 'bg-forest text-cream hover:bg-forest/90 border-cream/10'
        }`}
      >
        <span className="font-sans text-[10px] sm:text-xs tracking-widest uppercase font-semibold">Shop Now</span>
        <div className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors ${
          isOverDarkSection ? 'bg-forest/10 group-hover:bg-forest/20' : 'bg-cream/20 group-hover:bg-cream/40'
        }`}>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5" />
        </div>
      </a>

      <Toaster />
      {/* Floating Lead Widget */}
      <FloatingLeadWidget />
    </Router>
  );
}

export default App;