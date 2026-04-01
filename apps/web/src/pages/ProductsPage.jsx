import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ProductsPage = () => {
  const { toast } = useToast();

  const products = [
    {
      id: 1,
      name: 'EcoPots',
      category: 'Gardening & Decor',
      image: '/images/ecopots3.jpg',
      description: 'Made from recycled plastic and minerals, EcoPots are lightweight, durable, and weatherproof, perfect for modern landscaping and sustainable home decor. Upgrade your garden with eco-friendly pots that combine style, durability, and sustainability.',
      specs: {
        'Eco-friendly': 'Made from 100% recycled plastic waste.',
        'Durable Design': 'Lightweight yet sturdy enough for large plants.',
        'Versatile': 'Available in multiple configurations to suit your planting needs.',
      },
    },
    {
      id: 2,
      name: 'Park Bench',
      category: 'Outdoor Furniture',
      image: '/images/park_bench.JPG',
      description: 'Made from recycled plastic and minerals, Park Benches are lightweight, durable, and weatherproof, perfect for modern public spaces and sustainable urban design. Upgrade your community areas with eco-friendly seating that combines comfort, durability, and sustainability.',
      specs: {
        'Eco-friendly': 'Made from 100% recycled plastic waste.',
        'Durable Design': 'Robust construction meant to withstand heavy public use.',
        'Versatile': 'Available in multiple configurations to suit community needs.',
      },
    },
    {
      id: 3,
      name: 'School Bench',
      category: 'Educational Furniture',
      image: '/images/school_bench.JPG',
      description: 'Made from recycled plastic and minerals, School Benches are lightweight, durable, and weatherproof, perfect for modern educational facilities and sustainable classrooms. Upgrade your campus with eco-friendly desks that combine function, durability, and sustainability.',
      specs: {
        'Eco-friendly': 'Made from 100% recycled plastic waste.',
        'Durable Design': 'Sturdy enough for daily student use while remaining safe.',
        'Versatile': 'Available in multiple configurations to suit classroom sizes.',
      },
    },
    {
      id: 4,
      name: 'Tea Coasters',
      category: 'Home Accessories',
      image: '/images/tea_coaster2.jpg',
      description: 'Made from recycled plastic and minerals, Tea Coasters are lightweight, durable, and weatherproof, perfect for modern dining settings and sustainable home decor. Upgrade your home with eco-friendly coasters that combine style, durability, and sustainability.',
      specs: {
        'Eco-friendly': 'Made from 100% recycled plastic waste.',
        'Durable Design': 'Heat-resistant and sturdy for holding hot beverages safely.',
        'Versatile': 'Available in multiple patterns to suit your dining aesthetics.',
      },
    },
    {
      id: 5,
      name: 'Eco-Tiles',
      category: 'Building Materials',
      image: '/images/tiles3.jpg',
      description: 'Made from recycled plastic and minerals, Eco-Tiles are lightweight, durable, and weatherproof, perfect for modern flooring and sustainable structural finishing. Upgrade your property with eco-friendly tiles that combine aesthetics, durability, and sustainability.',
      specs: {
        'Eco-friendly': 'Made from 100% recycled plastic waste.',
        'Durable Design': 'High impact resistance sturdy enough for heavy foot traffic.',
        'Versatile': 'Available in multiple colors to suit varied design needs.',
      },
    },
    {
      id: 6,
      name: 'Corporate Packaging',
      category: 'Commercial Solutions',
      image: '/images/corporate_packaging.jpg',
      description: 'Made from recycled plastic and minerals, Corporate Packaging boxes are lightweight, durable, and weatherproof, perfect for sustainable shipping and brand presentation. Upgrade your logistics with eco-friendly packaging that combines security, durability, and sustainability.',
      specs: {
        'Eco-friendly': 'Made from 100% recycled plastic waste.',
        'Durable Design': 'Protective structure sturdy enough for safe product transit.',
        'Versatile': 'Available in multiple dimensions to suit shipping demands.',
      },
    },
    {
      id: 7,
      name: 'Eco-Shields',
      category: 'Protective Materials',
      image: '/images/Shields.jpg',
      description: 'Made from recycled plastic and minerals, Eco-Shields are lightweight, durable, and weatherproof, perfect for modern safety applications and sustainable structural protection. Upgrade your facility with eco-friendly shields that combine protection, durability, and sustainability.',
      specs: {
        'Eco-friendly': 'Made from 100% recycled plastic waste.',
        'Durable Design': 'High-tensile material sturdy enough for demanding environments.',
        'Versatile': 'Available in multiple structural configurations for safety.',
      },
    }
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
            <h1 className="text-5xl md:text-7xl mb-6">Sustainable Product Catalog</h1>
            <p className="font-sans font-light text-charcoal/70 text-lg md:text-xl leading-relaxed mb-10">
              Discover our range of eco-friendly, durable, and stylish products crafted from 100% recycled plastics and minerals. Designed to meet the rigorous demands of modern sustainable living.
            </p>
            <a 
              href="https://ecobricks-106.myshopify.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-forest text-cream rounded-full font-sans text-sm tracking-widest uppercase hover:bg-forest/90 transition-colors shadow-sm"
            >
              Visit Our Shop Now <ArrowRight className="ml-3 w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>



      {/* Products List - Asymmetrical Split Layout */}
      <section className="pb-24">
        {products.map((product, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={product.id} className="border-b border-charcoal/10">
              <div className="container-custom py-12 md:py-16">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center lg:items-start`}>
                  
                  {/* Image Side */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="relative shrink-0 max-w-full"
                  >
                    <div className="geometric-frame p-4 md:p-5 inline-block w-full sm:w-auto">
                      <div className="relative bg-charcoal overflow-hidden flex justify-center items-center">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="h-[300px] md:h-[400px] lg:h-[450px] w-auto max-w-full object-contain opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000"
                        />
                        <div className="absolute top-4 left-4 bg-cream text-charcoal font-sans text-[10px] tracking-widest uppercase px-3 py-1 z-10">
                          {product.category}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Specs Side */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="w-full lg:flex-1 max-w-3xl"
                  >
                    <div className="font-sans text-xs tracking-widest uppercase text-clay mb-4">Product No. 0{product.id}</div>
                    <h2 className="text-4xl mb-6">{product.name}</h2>
                    <p className="font-sans font-light text-charcoal/70 leading-relaxed mb-10">
                      {product.description}
                    </p>

                    <div className="space-y-0 border-t border-charcoal/20">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-6 py-4 border-b border-charcoal/10 font-sans text-sm">
                          <span className="text-charcoal/50 uppercase tracking-wider text-xs whitespace-nowrap">{key}</span>
                          <span className="font-medium text-charcoal">{value}</span>
                        </div>
                      ))}
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