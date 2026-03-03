import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ProductsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const { toast } = useToast();

  const filters = ['All', 'Residential', 'Commercial', 'Industrial'];

  const products = [
    {
      id: 1,
      name: 'Standard EcoBrick',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
      description: 'Engineered for residential load-bearing walls and partitions. Offers superior thermal mass and acoustic insulation compared to traditional masonry.',
      specs: {
        compression: '15 MPa',
        thermal: 'R-2.5',
        weight: '2.8 kg',
        dimensions: '230 x 110 x 76 mm',
      },
    },
    {
      id: 2,
      name: 'Interlocking Structural Block',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
      description: 'Precision-engineered interlocking design eliminates the need for mortar in certain applications, accelerating construction timelines by up to 30%.',
      specs: {
        compression: '18 MPa',
        thermal: 'R-3.0',
        weight: '3.2 kg',
        dimensions: '300 x 150 x 100 mm',
      },
    },
    {
      id: 3,
      name: 'Insulated Core Block',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
      description: 'Features an integrated high-density insulation core, providing exceptional thermal performance for passive house and net-zero building designs.',
      specs: {
        compression: '22 MPa',
        thermal: 'R-4.5',
        weight: '3.5 kg',
        dimensions: '390 x 190 x 190 mm',
      },
    },
    {
      id: 4,
      name: 'Heavy-Duty Industrial Block',
      category: 'Industrial',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200',
      description: 'Maximum strength formulation utilizing advanced geopolymer binders for industrial facilities requiring extreme load-bearing capacity and chemical resistance.',
      specs: {
        compression: '35 MPa',
        thermal: 'R-2.0',
        weight: '4.5 kg',
        dimensions: '390 x 190 x 190 mm',
      },
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      role: 'Lead Architect, Studio Green',
      text: 'Ecobricks completely transformed our approach to sustainable design. The structural integrity of the Insulated Core Block allowed us to achieve net-zero without compromising our aesthetic vision.'
    },
    {
      id: 2,
      name: 'Marcus Chen',
      role: 'Director of Construction, BuildCorp',
      text: 'The interlocking structural blocks accelerated our commercial project timeline by nearly 25%. The precision engineering means less waste on-site and a cleaner, faster build.'
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      role: 'Sustainability Consultant',
      text: 'When conducting lifecycle analyses for our clients, Ecobricks consistently outperforms traditional masonry. The 65% carbon reduction metric is real and verifiable.'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Principal Engineer, Apex Structures',
      text: 'I was initially skeptical of waste-derived materials for load-bearing applications. After rigorous testing of the Heavy-Duty Industrial Block, I am thoroughly convinced. Exceptional compression strength.'
    }
  ];

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  const handleAction = () => {
    toast({
      title: "🚧 Feature Coming Soon",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <div className="bg-cream min-h-screen pt-24">
      <Helmet>
        <title>Products | Ecobricks Architectural Materials</title>
        <meta name="description" content="Explore our range of architectural grade sustainable building materials." />
      </Helmet>

      {/* Page Header */}
      <section className="py-24 relative border-b border-charcoal/10 overflow-hidden">
        <div className="bg-faded-text">
          <span>CATALOG</span>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl mb-6">Material Specifications</h1>
            <p className="font-sans font-light text-charcoal/70 text-lg md:text-xl leading-relaxed">
              A comprehensive portfolio of engineered eco-materials designed to meet the rigorous demands of modern architectural projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-charcoal/10 sticky top-24 bg-cream/90 backdrop-blur-md z-30">
        <div className="container-custom">
          <div className="flex flex-wrap gap-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-sans text-xs tracking-widest uppercase pb-2 border-b-2 transition-colors duration-300 ${
                  activeFilter === filter
                    ? 'border-charcoal text-charcoal'
                    : 'border-transparent text-charcoal/50 hover:text-charcoal hover:border-charcoal/30'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products List - Asymmetrical Split Layout */}
      <section className="pb-24">
        {filteredProducts.map((product, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={product.id} className="border-b border-charcoal/10">
              <div className="container-custom py-24">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                  
                  {/* Image Side */}
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-7/12 relative"
                  >
                    <div className="geometric-frame p-4 md:p-6">
                      <div className="aspect-[4/3] overflow-hidden bg-charcoal relative">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000"
                        />
                        <div className="absolute top-4 left-4 bg-cream text-charcoal font-sans text-[10px] tracking-widest uppercase px-3 py-1">
                          {product.category}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Specs Side */}
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-5/12"
                  >
                    <div className="font-sans text-xs tracking-widest uppercase text-clay mb-4">Product No. 0{product.id}</div>
                    <h2 className="text-4xl mb-6">{product.name}</h2>
                    <p className="font-sans font-light text-charcoal/70 leading-relaxed mb-10">
                      {product.description}
                    </p>

                    <div className="space-y-0 border-t border-charcoal/20">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-4 border-b border-charcoal/10 font-sans text-sm">
                          <span className="text-charcoal/50 uppercase tracking-wider text-xs">{key}</span>
                          <span className="font-medium text-charcoal">{value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 flex gap-6">
                      <button onClick={handleAction} className="btn-architectural">
                        Request Sample
                      </button>
                      <button onClick={handleAction} className="flex items-center justify-center w-12 h-12 border border-charcoal/20 hover:bg-charcoal hover:text-cream transition-colors" aria-label="Download Specs">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-sand relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30"></div>
        <div className="absolute inset-0 blueprint-grid opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-4 text-charcoal">What Our Partners Say</h2>
            <p className="font-sans font-light text-charcoal/70">Trusted by leading architects and engineers worldwide.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="geometric-frame bg-cream/80 backdrop-blur-sm p-8 md:p-12"
              >
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-clay fill-current mr-1" />
                  ))}
                </div>
                <p className="font-serif text-xl md:text-2xl text-charcoal leading-relaxed mb-8 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-charcoal/10 pt-6">
                  <div className="font-sans font-medium text-charcoal">{testimonial.name}</div>
                  <div className="font-sans text-xs tracking-widest uppercase text-charcoal/50 mt-1">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;