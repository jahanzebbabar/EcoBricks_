import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isDarkPage = location.pathname === '/ecocore';
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'EcoCore™', path: '/ecocore' },
  ];

  const isActive = (path) => location.pathname === path;

  // Determine header text color based on page and scroll state
  let headerTextColor = 'text-foreground';
  if (isDarkPage) {
    headerTextColor = 'text-cream';
  } else if (isHomePage && !isScrolled) {
    headerTextColor = 'text-cream';
  }

  const headerBg = isScrolled 
    ? (isDarkPage ? 'bg-forest/95 backdrop-blur-md border-b border-cream/10' : 'bg-cream/95 backdrop-blur-md border-b border-charcoal/10') 
    : 'bg-transparent border-b border-transparent';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${headerBg} ${headerTextColor}`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center group z-50">
            <img 
              src="https://horizons-cdn.hostinger.com/f627cceb-b15f-480f-b293-26ac2f095787/1343c70e6ab2fff7fbf98ed2bbfbc5f0.png" 
              alt="Ecobricks Logo" 
              className="h-10 md:h-12 w-auto mr-3 object-contain transition-transform duration-500 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-widest uppercase leading-none">Ecobricks</span>
              <span className="w-full h-[1px] bg-current transform origin-left transition-transform duration-500 group-hover:scale-x-100 mt-1 scale-x-0"></span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden z-50 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${mobileMenuOpen ? 'text-cream' : ''}`} strokeWidth={1} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={1} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 bg-charcoal text-cream flex flex-col justify-center items-center z-40 h-screen"
            >
              <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>
              <div className="space-y-8 text-center relative z-10">
                {navLinks.map((link) => (
                  <div key={link.path} className="overflow-hidden">
                    <motion.div
                      initial={{ y: 40 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block font-serif text-4xl tracking-widest uppercase hover:text-sand transition-colors ${
                          isActive(link.path) ? 'text-sand' : ''
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;