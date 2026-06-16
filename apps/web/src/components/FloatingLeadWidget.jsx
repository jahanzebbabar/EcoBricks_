import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';

const messages = [
  'Contact Us for Waste Management Consultation',
  'Ask About Bulk Order Discounts',
  "Get Expert Guidance for Your Project",
];

function saveLead(lead) {
  try {
    const existing = JSON.parse(localStorage.getItem('ecobricks_leads') || '[]');
    existing.push(lead);
    localStorage.setItem('ecobricks_leads', JSON.stringify(existing));
  } catch (e) {
    console.error('saveLead error', e);
  }
}

export default function FloatingLeadWidget() {
  const [idx, setIdx] = useState(0);
  const [anim, setAnim] = useState(true);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [errorMessage, setErrorMessage] = useState('');
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);

  useEffect(() => {
    const iv = setInterval(() => {
      setAnim(false);
      setTimeout(() => {
        setIdx(i => (i + 1) % messages.length);
        setAnim(true);
      }, 300);
    }, 3500);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof document === 'undefined') return;
      const x = 80; // near left floating widget
      const y = window.innerHeight - 50;
      const elements = document.elementsFromPoint(x, y);
      const overDark = elements.some(el => el.classList && (el.classList.contains('bg-forest') || el.classList.contains('bg-charcoal')));
      setIsOverDarkSection(overDark);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    setTimeout(handleScroll, 100);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const value = (email || '').trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setErrorMessage('Please enter your email.');
      setStatus('error');
      return;
    }
    if (!emailRegex.test(value)) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setErrorMessage('');
    setStatus('sending');

    const lead = {
      email: value,
      page: typeof window !== 'undefined' ? window.location.pathname : '',
      message: messages[idx],
      ts: new Date().toISOString(),
    };

    // store locally first
    try {
      saveLead(lead);
    } catch (e) {
      // non-fatal
      console.warn('local save failed', e);
    }

      try {
      await fetch('https://script.google.com/macros/s/AKfycbyPkgVDQXZ7JowJlC038jJWcJVPga_qkqj1dpvqc7ZWq-uPmfyiWfsh_H0518brvPvwPQ/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({ email: value })
      });

      // With `no-cors` the response is opaque; treat fetch resolving as success
      setStatus('success');
      setEmail('');
    } catch (err) {
      console.error('submit error', err);
      setErrorMessage("Something went wrong. Please try again.");
      setStatus('error');
    }
  }

  return (
    <>
      {/* Floating widget */}
      <div className="fixed bottom-6 left-6 z-50 flex items-center">
        <button
          onClick={() => setOpen(true)}
          aria-label="Contact us"
          className={`flex items-center gap-3 pl-4 pr-5 py-3 rounded-full shadow-xl transition-all duration-500 transform hover:scale-105 focus:outline-none focus:ring-2 ${
            isOverDarkSection
              ? 'bg-cream text-forest hover:bg-cream/90 border-forest/10'
              : 'bg-forest text-cream hover:bg-forest/90 border-cream/10'
          }`}
        >
          <span className={`text-sm font-semibold tracking-tight max-w-xs block truncate transition-all duration-500 ${anim ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
            {messages[idx]}
          </span>
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div style={{ zIndex: 99999 }} className="fixed inset-0 flex items-center justify-center p-4">
          <div style={{ zIndex: 99990 }} className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div style={{ zIndex: 100000 }} className="relative bg-cream rounded-lg shadow-xl w-full max-w-md mx-auto p-6">
            {status === 'success' ? (
              <div className="text-center py-6">
                <h3 className="text-lg font-bold">Thank you! We'll be in touch soon.</h3>
                <div className="mt-4">
                  <Button variant="default" onClick={() => { setStatus('idle'); setOpen(false); }}>Close</Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold">Let's Talk</h3>
                  <p className="text-sm mt-1 text-muted-foreground">Leave your email and we'll reach out to you.</p>
                </div>
                <div>
                  <label className="sr-only">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-forest"
                    placeholder="you@example.com"
                  />
                  {status === 'error' && errorMessage && (
                    <p className="mt-2 text-sm text-destructive">{errorMessage}</p>
                  )}
                </div>
                <div className="flex justify-end gap-2">
                  <button type="button" className="px-4 py-2 rounded-md" onClick={() => setOpen(false)}>Cancel</button>
                  <Button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Contact Me'}</Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
