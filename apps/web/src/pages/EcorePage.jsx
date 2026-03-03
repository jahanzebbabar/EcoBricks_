import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const EcorePage = () => {
  const specs = [
    { label: 'Compression Strength', value: '22 MPa', traditional: '15 MPa' },
    { label: 'Thermal Resistance', value: 'R-3.5', traditional: 'R-2.0' },
    { label: 'Water Absorption', value: '< 5%', traditional: '12%' },
    { label: 'Carbon Footprint', value: '0.12 kg CO₂/kg', traditional: '0.34 kg CO₂/kg' },
    { label: 'Density', value: '1800 kg/m³', traditional: '2000 kg/m³' },
  ];

  return (
    <div className="bg-charcoal text-cream min-h-screen pt-24 relative selection:bg-cream selection:text-charcoal">
      <Helmet>
        <title>EcoCore™ Composite | Ecobricks</title>
        <meta name="description" content="Technical specifications and material science behind EcoCore™ composite technology." />
      </Helmet>

      {/* Global Background Elements */}
      <div className="fixed inset-0 bg-noise opacity-20 pointer-events-none z-0"></div>
      <div className="fixed inset-0 blueprint-grid-dark opacity-5 pointer-events-none z-0"></div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center border-b border-cream/10 overflow-hidden z-10">
        <div className="bg-faded-text opacity-[0.02]">
          <span>COMPOSITE</span>
        </div>
        
        <div className="container-custom relative w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <div className="font-sans text-xs tracking-widest uppercase text-sand mb-8 flex items-center">
              <span className="w-8 h-[1px] bg-sand mr-4"></span>
              Proprietary Material Science
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] mb-8 tracking-tighter">
              EcoCore™<br/>Composite.
            </h1>
            <p className="font-sans font-light text-cream/70 text-xl md:text-2xl max-w-2xl leading-relaxed">
              A paradigm shift in structural engineering. 65% lower embodied carbon, superior thermal mass, and uncompromising load-bearing capacity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Material Breakdown - Blueprint Style */}
      <section className="section-padding relative z-10 border-b border-cream/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl mb-12">Molecular Architecture</h2>
              
              <div className="space-y-10">
                <div className="relative pl-8 border-l border-cream/20">
                  <div className="absolute left-[-4px] top-2 w-[7px] h-[7px] bg-sand"></div>
                  <h3 className="text-xl mb-2 font-sans uppercase tracking-widest text-sand text-sm">01. Recycled Mineral Aggregates</h3>
                  <p className="font-sans font-light text-cream/60 leading-relaxed">
                    Post-industrial mineral waste forms the structural foundation, reducing landfill burden while maintaining superior strength characteristics through optimized particle packing.
                  </p>
                </div>
                
                <div className="relative pl-8 border-l border-cream/20">
                  <div className="absolute left-[-4px] top-2 w-[7px] h-[7px] bg-cream"></div>
                  <h3 className="text-xl mb-2 font-sans uppercase tracking-widest text-cream text-sm">02. Geopolymer Binders</h3>
                  <p className="font-sans font-light text-cream/60 leading-relaxed">
                    Alkali-activated industrial by-products replace traditional Portland cement. This creates a dense, highly cross-linked aluminosilicate matrix with exceptional chemical resistance.
                  </p>
                </div>
                
                <div className="relative pl-8 border-l border-cream/20">
                  <div className="absolute left-[-4px] top-2 w-[7px] h-[7px] bg-clay"></div>
                  <h3 className="text-xl mb-2 font-sans uppercase tracking-widest text-clay text-sm">03. Micro-Fiber Stabilizers</h3>
                  <p className="font-sans font-light text-cream/60 leading-relaxed">
                    Dispersed polymer reinforcement improves tensile strength, crack resistance, and impact tolerance, ensuring structural integrity under dynamic loading.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Graphic Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square border border-cream/20 p-8 geometric-frame"
            >
              <div className="w-full h-full border border-cream/10 relative flex items-center justify-center">
                {/* Abstract Blueprint Graphic */}
                <div className="absolute inset-0 flex items-center justify-center opacity-50">
                  <div className="w-64 h-64 border border-sand rounded-full absolute animate-[spin_20s_linear_infinite]"></div>
                  <div className="w-48 h-48 border border-cream border-dashed rounded-full absolute animate-[spin_15s_linear_infinite_reverse]"></div>
                  <div className="w-32 h-32 border border-clay rounded-full absolute"></div>
                  <div className="w-[1px] h-full bg-cream/20 absolute"></div>
                  <div className="h-[1px] w-full bg-cream/20 absolute"></div>
                </div>
                <div className="relative z-10 text-center bg-charcoal/80 backdrop-blur-sm p-6 border border-cream/10">
                  <div className="font-serif text-3xl text-cream mb-1">Matrix</div>
                  <div className="font-sans text-[10px] tracking-widest uppercase text-cream/50">Cross-Linked Structure</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Performance Specs Table */}
      <section className="section-padding relative z-10">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Technical Specifications</h2>
            <p className="font-sans font-light text-cream/60">Comparative analysis against traditional clay masonry.</p>
          </div>

          <div className="border border-cream/20 bg-charcoal/50 backdrop-blur-md">
            <div className="grid grid-cols-3 border-b border-cream/20 p-6 font-sans text-xs tracking-widest uppercase text-cream/50">
              <div>Metric</div>
              <div>EcoCore™</div>
              <div className="text-cream/30">Traditional</div>
            </div>
            
            {specs.map((spec, index) => (
              <motion.div 
                key={spec.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="grid grid-cols-3 p-6 border-b border-cream/10 last:border-0 items-center hover:bg-cream/5 transition-colors"
              >
                <div className="font-serif text-lg md:text-xl">{spec.label}</div>
                <div className="font-sans font-medium text-sand text-lg">{spec.value}</div>
                <div className="font-sans font-light text-cream/40">{spec.traditional}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href="/products" className="btn-architectural-dark border-cream text-cream hover:bg-cream hover:text-charcoal">
              View Product Applications
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcorePage;