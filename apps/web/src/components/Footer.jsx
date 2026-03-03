import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>
      <div className="absolute inset-0 blueprint-grid-dark opacity-5 pointer-events-none"></div>
      
      <div className="container-custom pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-block mb-8">
              <span className="font-serif text-3xl tracking-widest uppercase">Ecobricks</span>
            </Link>
            <p className="font-sans text-cream/70 max-w-sm leading-relaxed font-light">
              Engineered eco-conscious materials. Building the future with structural integrity and sustainable precision.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="font-sans text-xs tracking-widest uppercase text-cream/50 mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Products', 'Services', 'About', 'EcoCore™'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace('™', '')}`} className="font-serif text-lg hover:text-sand transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 md:col-start-10">
            <h4 className="font-sans text-xs tracking-widest uppercase text-cream/50 mb-6">Contact</h4>
            <ul className="space-y-4 font-sans font-light text-cream/80">
              <li>123 Sustainable Way<br/>Green City, EC 12345</li>
              <li><a href="mailto:info@ecobricks.com" className="hover:text-sand transition-colors">info@ecobricks.com</a></li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs tracking-widest text-cream/50 uppercase">
            © {currentYear} Ecobricks. All rights reserved.
          </p>
          <div className="flex space-x-8 font-sans text-xs tracking-widest text-cream/50 uppercase">
            <a href="#" className="hover:text-cream transition-colors">Privacy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms</a>
            <a href="#" className="hover:text-cream transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;