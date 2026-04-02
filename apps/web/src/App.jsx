import React from 'react';
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

function App() {
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
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 pl-6 pr-4 py-3 bg-forest text-cream rounded-full shadow-xl hover:bg-forest/90 transition-all duration-500 hover:scale-110 group border border-cream/10"
      >
        <span className="font-sans text-[10px] tracking-widest uppercase font-semibold">Shop Now</span>
        <div className="w-7 h-7 rounded-full bg-cream/20 flex items-center justify-center group-hover:bg-cream/40 transition-colors">
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </a>

      <Toaster />
    </Router>
  );
}

export default App;