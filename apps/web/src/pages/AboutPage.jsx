import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const timeline = [
    { year: '2018', title: 'Foundation', desc: 'Established with a vision to disrupt traditional masonry.' },
    { year: '2020', title: 'EcoCore™ Patent', desc: 'Successful development of our proprietary geopolymer binder.' },
    { year: '2022', title: 'Facility Expansion', desc: 'Opening of our first net-zero manufacturing plant.' },
    { year: '2024', title: 'Global Reach', desc: 'Supplying architectural projects across three continents.' },
  ];

  const leadership = [
    { name: 'Dr. Sarah Chen', role: 'Chief Executive Officer', img: 'https://images.unsplash.com/photo-1572891458752-1fde7b8074b6?w=800' },
    { name: 'Michael Rodriguez', role: 'Head of Engineering', img: 'https://images.unsplash.com/photo-1649162959584-50571b33c693?w=800' },
  ];

  return (
    <div className="bg-cream min-h-screen pt-24">
      <Helmet>
        <title>About | Ecobricks Architectural Materials</title>
        <meta name="description" content="Our mission, vision, and the team behind sustainable architectural materials." />
      </Helmet>

      {/* Page Header */}
      <section className="py-24 relative border-b border-charcoal/10 overflow-hidden">
        <div className="bg-faded-text">
          <span>MANIFESTO</span>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl mb-8">Redefining the Built Environment</h1>
            <p className="font-sans font-light text-charcoal/70 text-xl md:text-2xl leading-relaxed">
              We exist at the intersection of material science and architectural design, engineering solutions that respect both structural demands and planetary boundaries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision Color Block */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-forest text-cream p-16 md:p-24 relative">
          <div className="absolute inset-0 blueprint-grid-dark opacity-10"></div>
          <div className="relative z-10 max-w-md ml-auto">
            <div className="font-sans text-xs tracking-widest uppercase text-sand mb-6">Our Mission</div>
            <h2 className="text-3xl md:text-4xl mb-6 leading-tight">To engineer materials that regenerate rather than deplete.</h2>
            <p className="font-sans font-light text-cream/70 leading-relaxed">
              We provide high-performance, sustainable building materials that reduce environmental impact without compromising on architectural quality, durability, or aesthetic flexibility.
            </p>
          </div>
        </div>
        <div className="bg-charcoal text-cream p-16 md:p-24 relative">
          <div className="absolute inset-0 bg-noise opacity-20"></div>
          <div className="relative z-10 max-w-md mr-auto">
            <div className="font-sans text-xs tracking-widest uppercase text-clay mb-6">Our Vision</div>
            <h2 className="text-3xl md:text-4xl mb-6 leading-tight">A future where every structure acts as a carbon sink.</h2>
            <p className="font-sans font-light text-cream/70 leading-relaxed">
              We envision a construction industry operating in harmony with nature, utilizing materials that stand as testaments to human ingenuity and environmental responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline & Core Values */}
      <section className="section-padding container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Timeline */}
          <div className="lg:col-span-4">
            <h3 className="text-3xl mb-12 border-b border-charcoal/20 pb-4">Chronology</h3>
            <div className="relative border-l border-charcoal/20 ml-2">
              {timeline.map((item, index) => (
                <motion.div 
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 pb-12 last:pb-0"
                >
                  <div className="absolute left-[-4px] top-1 w-[7px] h-[7px] bg-charcoal"></div>
                  <div className="font-serif text-2xl text-clay mb-2">{item.year}</div>
                  <div className="font-sans font-medium text-charcoal mb-1">{item.title}</div>
                  <div className="font-sans font-light text-sm text-charcoal/60">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div className="lg:col-span-7 lg:col-start-6">
            <h3 className="text-3xl mb-12 border-b border-charcoal/20 pb-4">Core Principles</h3>
            <div className="space-y-12">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h4 className="text-2xl mb-3">Structural Integrity First</h4>
                <p className="font-sans font-light text-charcoal/70 leading-relaxed">Sustainability means nothing if the material fails. We engineer for extreme durability, ensuring our products meet or exceed all international building codes for load-bearing applications.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h4 className="text-2xl mb-3">Radical Transparency</h4>
                <p className="font-sans font-light text-charcoal/70 leading-relaxed">From raw material sourcing to embodied carbon calculations, we provide complete lifecycle analysis data to architects and engineers, enabling informed design decisions.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h4 className="text-2xl mb-3">Circular Manufacturing</h4>
                <p className="font-sans font-light text-charcoal/70 leading-relaxed">Our facilities operate on closed-loop systems. Water is recycled, energy is renewable, and our primary raw materials are diverted from industrial waste streams.</p>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-sand relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30"></div>
        <div className="container-custom relative z-10">
          <div className="flex justify-between items-end mb-16 border-b border-charcoal/20 pb-6">
            <h2 className="text-4xl md:text-5xl">Leadership</h2>
            <span className="font-sans text-xs tracking-widest uppercase text-charcoal/50 hidden md:block">Board of Directors</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <motion.div 
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden bg-charcoal mb-6 relative">
                  <img 
                    src={leader.img} 
                    alt={leader.name} 
                    className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 border border-charcoal/10 m-4 pointer-events-none"></div>
                </div>
                <h4 className="text-2xl mb-1">{leader.name}</h4>
                <p className="font-sans text-sm tracking-widest uppercase text-charcoal/60">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;