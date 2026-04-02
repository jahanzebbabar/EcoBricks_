import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, useInView, animate } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ArrowLeft } from 'lucide-react';

const Counter = ({ value, suffix = "", duration = 2, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        delay,
        ease: "easeOut",
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration, delay]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const HomePage = () => {
  const projects = [
    {
      id: 1,
      title: 'SMME, NUST',
      image: '/images/project-1.png',
      description: 'In collaboration with the NUST School of Mechanical & Manufacturing Engineering, SMME (our beloved institute), introducing Eco Friendly Tiles on a staircase. ♻️ CO2 Reduction: Cut 78 kg CO2 equivalent ♻️ Plastic Waste Reduction: Eliminated 100 kg of plastic bags waste ♻️ Water Conservation: Saved 207 liters',
    },
    {
      id: 2,
      title: 'F9 Park CDA',
      image: '/images/project-2.png',
      description: 'Commercial deployment in collaboration with National University of Sciences and Technology (NUST) and Capital Development Authority (CDA), introducing 500 Eco-Tiles at F9 Park. Key Impact: CO2 Reduction: Cut 225 kg CO2 equivalent. Plastic Waste Reduction: Eliminate 100 kg of plastic bags waste. Water Conservation: Save 207 liters.',
    },
    {
      id: 3,
      title: 'HCCS School',
      image: '/images/project-3.png',
      description: 'Emerald Data Solutions is revolutionizing the way schools and universities manage their facilities. Our intuitive maintenance management system enhances operational efficiency, allowing educational institutions to dedicate more time to student instruction.'
    }
  ];

  return (
    <div className="bg-cream min-h-screen relative">
      <Helmet>
        <title>Ecobricks | Engineered From Waste. Built For Tomorrow.</title>
        <meta name="description" content="Our advanced material systems convert waste into durable, scalable construction solutions." />
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
                Our advanced material systems convert waste into durable, scalable construction solutions.
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
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight">Turning non-recyclable waste into durable eco-tiles and furniture  for real-world applications.</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 lg:col-start-7"
            >
              <p className="font-sans font-light text-charcoal/80 text-lg md:text-xl leading-relaxed mb-8">
                Ecobricks exists to solve the construction industry's dual crisis: resource depletion and carbon emissions. We engineer high-performance structural materials, creating a closed-loop system that builds the future without destroying the present.
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
              { value: 2, suffix: 'M+', label: 'Tons of Waste Diverted', desc: 'Industrial by-products repurposed into premium materials.' },
              { value: 65, suffix: '%', label: 'Carbon Reduction', desc: 'Lower embodied carbon compared to traditional clay masonry.' },
              { value: 50, suffix: '+', label: 'Year Lifespan', desc: 'Engineered for extreme durability and structural longevity.' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="text-center border border-cream/20 p-12 bg-charcoal/20 backdrop-blur-sm"
              >
                <div className="text-6xl md:text-7xl font-serif text-sand mb-6">
                  <Counter value={stat.value} suffix={stat.suffix} duration={2} delay={i * 0.2} />
                </div>
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
      <section className="section-padding relative bg-cream overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-10"></div>
        <div className="bg-faded-text">
          <span>PORTFOLIO</span>
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <div className="font-sans text-xs tracking-widest uppercase text-clay mb-4">Selected Case Studies</div>
              <h2 className="text-4xl md:text-5xl text-charcoal font-serif">Featured Projects</h2>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="geometric-frame bg-white/50 backdrop-blur-sm p-4">
                  <div className="relative overflow-hidden mb-8 bg-charcoal">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto opacity-90 transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <div className="flex flex-col">
                    <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-clay mb-3">Project 0{project.id}</div>
                    <h3 className="text-2xl mb-4 text-charcoal leading-tight">{project.title}</h3>
                    <p className="font-sans font-light text-charcoal/70 text-sm leading-relaxed mb-8">
                      {project.description}
                    </p>

                    <Link to="/services" className="inline-flex items-center text-xs tracking-widest uppercase text-charcoal font-medium hover:text-clay transition-colors">
                      Case Study <ArrowUpRight className="ml-2 w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;