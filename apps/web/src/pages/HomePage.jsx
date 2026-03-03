import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const HomePage = () => {
  const projects = [
    {
      id: 1,
      title: 'The Green Tower',
      image: 'https://images.unsplash.com/photo-1690410386740-bd9219e74eb2?w=1200',
      description: 'A 40-story commercial high-rise utilizing our advanced interlocking structural blocks to achieve LEED Platinum certification.',
      materials: 'EcoCore™ High-Density, EcoShell™ Facade',
      impact: '2,000 tons of waste diverted',
      location: 'Commercial / Seattle, WA'
    },
    {
      id: 2,
      title: 'Eco-Industrial Park',
      image: 'https://images.unsplash.com/photo-1568201635633-989f64b31c57?w=1200',
      description: 'A sprawling manufacturing complex built entirely from recycled mineral aggregates, setting a new standard for industrial construction.',
      materials: 'Heavy-Duty Industrial Block',
      impact: '50% carbon reduction vs traditional concrete',
      location: 'Industrial / Austin, TX'
    },
    {
      id: 3,
      title: 'Sustainable Housing Estate',
      image: 'https://images.unsplash.com/photo-1521275247082-8e7931abe658?w=1200',
      description: 'A 200-unit residential development focusing on thermal efficiency and rapid construction timelines using our insulated core blocks.',
      materials: 'Standard EcoBrick, Insulated Core Block',
      impact: '40% improvement in thermal efficiency',
      location: 'Residential / Portland, OR'
    }
  ];

  return (
    <div className="bg-cream min-h-screen relative">
      <Helmet>
        <title>Ecobricks | Engineered From Waste. Built For Tomorrow.</title>
        <meta name="description" content="Our advanced material systems convert manufacturing waste into durable, scalable construction solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-end pb-24 overflow-hidden bg-charcoal">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558052643-9a9e9ea8e50a?w=1920&q=80" 
            alt="Sustainable green building construction" 
            className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/20"></div>
          <div className="absolute inset-0 bg-noise opacity-20"></div>
        </div>

        {/* Animated Blueprint Lines */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-20">
          <div className="absolute left-[20%] top-0 bottom-0 w-[1px] bg-cream animate-draw-line-v" style={{ animationDelay: '0s' }}></div>
          <div className="absolute left-[60%] top-0 bottom-0 w-[1px] bg-cream animate-draw-line-v" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-[40%] left-0 right-0 h-[1px] bg-cream animate-draw-line-h" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="container-custom relative z-10 w-full">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-cream text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-8">
                Engineered From Waste.<br />
                <span className="text-sand italic">Built For Tomorrow.</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
            >
              <p className="text-cream/80 font-sans font-light text-lg md:text-xl max-w-2xl leading-relaxed">
                Our advanced material systems convert manufacturing waste into durable, scalable construction solutions.
              </p>
              <Link to="/products" className="btn-architectural-dark group whitespace-nowrap shrink-0">
                View Products
                <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding relative bg-cream border-b border-charcoal/10">
        <div className="bg-faded-text">
          <span>MISSION</span>
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="font-sans text-xs tracking-widest uppercase text-clay mb-6">Corporate Mission</div>
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight">Transforming the foundation of modern architecture.</h2>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 lg:col-start-7"
            >
              <p className="font-sans font-light text-charcoal/80 text-lg md:text-xl leading-relaxed mb-8">
                Ecobricks exists to solve the construction industry's dual crisis: resource depletion and carbon emissions. We engineer high-performance structural materials entirely from industrial by-products, creating a closed-loop system that builds the future without destroying the present.
              </p>
              <Link to="/about" className="inline-flex items-center font-sans text-sm tracking-widest uppercase hover:text-clay transition-colors border-b border-charcoal pb-1">
                Read Our Story <ArrowUpRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact & Metrics */}
      <section className="bg-forest text-cream relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-dark opacity-10"></div>
        <div className="absolute inset-0 bg-noise opacity-20"></div>
        
        <div className="container-custom section-padding relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-6">Measurable Impact</h2>
            <p className="font-sans font-light text-cream/70 max-w-2xl mx-auto">
              Our proprietary manufacturing process delivers uncompromising structural integrity while radically reducing environmental footprint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              { metric: '2M+', label: 'Tons of Waste Diverted', desc: 'Industrial by-products repurposed into premium materials.' },
              { metric: '65%', label: 'Carbon Reduction', desc: 'Lower embodied carbon compared to traditional clay masonry.' },
              { metric: '100+', label: 'Year Lifespan', desc: 'Engineered for extreme durability and structural longevity.' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="text-center border border-cream/20 p-12 bg-charcoal/20 backdrop-blur-sm"
              >
                <div className="text-6xl md:text-7xl font-serif text-sand mb-6">{stat.metric}</div>
                <h3 className="text-xl mb-4 font-sans uppercase tracking-widest text-sm">{stat.label}</h3>
                <p className="font-sans font-light text-cream/60 text-sm leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values & Why Choose Us */}
      <section className="section-padding relative bg-sand text-charcoal">
        <div className="absolute inset-0 bg-noise opacity-30"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl mb-12">Why Choose Ecobricks</h2>
              <div className="space-y-12">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-[1px] bg-charcoal mr-4"></div>
                    <h3 className="text-2xl">Structural Superiority</h3>
                  </div>
                  <p className="font-sans font-light text-charcoal/80 leading-relaxed pl-12">
                    Our geopolymer binders create a dense, highly cross-linked matrix that outperforms traditional Portland cement in compression strength and chemical resistance.
                  </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-[1px] bg-charcoal mr-4"></div>
                    <h3 className="text-2xl">Architectural Flexibility</h3>
                  </div>
                  <p className="font-sans font-light text-charcoal/80 leading-relaxed pl-12">
                    Available in custom dimensions, textures, and finishes. We provide architects the freedom to design without constraints while meeting strict LEED certification standards.
                  </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-[1px] bg-charcoal mr-4"></div>
                    <h3 className="text-2xl">Scalable Supply Chain</h3>
                  </div>
                  <p className="font-sans font-light text-charcoal/80 leading-relaxed pl-12">
                    With localized manufacturing hubs, we ensure precision-timed delivery networks that keep your construction schedule on track while minimizing transport emissions.
                  </p>
                </motion.div>
              </div>
            </div>
            
            <div className="relative h-full min-h-[400px] geometric-frame bg-cream/50 backdrop-blur-sm p-8 flex flex-col justify-center">
              <div className="absolute inset-0 blueprint-grid opacity-20"></div>
              <div className="relative z-10 text-center">
                <div className="font-serif text-4xl md:text-5xl mb-6 text-forest">Ready to build?</div>
                <p className="font-sans font-light text-charcoal/70 mb-10 max-w-md mx-auto">
                  Consult with our engineering team to integrate sustainable materials into your next architectural endeavor.
                </p>
                <Link to="/services" className="btn-architectural bg-charcoal text-cream hover:bg-forest hover:text-cream border-none">
                  Request Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects (Case Studies) */}
      <section className="section-padding relative bg-cream">
        <div className="bg-faded-text">
          <span>PROJECTS</span>
        </div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <h2 className="text-4xl md:text-6xl text-charcoal max-w-2xl">
              Featured Projects
            </h2>
            <span className="font-sans text-xs tracking-widest uppercase text-charcoal/50 mt-4 md:mt-0">
              Real-world applications
            </span>
          </div>

          <div className="space-y-32">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                >
                  {/* Image Side */}
                  <div className="w-full lg:w-7/12 relative">
                    <div className="geometric-frame p-4">
                      <div className="aspect-[4/3] overflow-hidden bg-charcoal relative">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000 mix-blend-luminosity hover:mix-blend-normal"
                        />
                        <div className="absolute top-4 left-4 bg-cream text-charcoal font-sans text-[10px] tracking-widest uppercase px-3 py-1">
                          {project.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Text Side */}
                  <div className="w-full lg:w-5/12">
                    <div className="font-sans text-xs tracking-widest uppercase text-clay mb-4">Case Study 0{project.id}</div>
                    <h3 className="text-3xl md:text-4xl mb-6">{project.title}</h3>
                    <p className="font-sans font-light text-charcoal/80 leading-relaxed mb-8">
                      {project.description}
                    </p>
                    
                    <div className="space-y-4 border-t border-charcoal/10 pt-6 font-sans text-sm">
                      <div className="flex flex-col sm:flex-row sm:justify-between border-b border-charcoal/5 pb-4 gap-2">
                        <span className="text-charcoal/50 uppercase tracking-wider text-xs">Materials Used</span>
                        <span className="font-medium text-charcoal text-right">{project.materials}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between border-b border-charcoal/5 pb-4 gap-2">
                        <span className="text-charcoal/50 uppercase tracking-wider text-xs">Key Impact</span>
                        <span className="font-medium text-forest text-right">{project.impact}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;