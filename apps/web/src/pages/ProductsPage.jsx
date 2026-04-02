import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Star, ArrowLeft } from 'lucide-react';
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

  const testimonialsData = [
    {
      id: 1,
      name: 'Ammara',
      role: 'Marketing Manager, Agile NextPak Solutions',
      text: 'My worktable just got a green upgrade! These eco-friendly pots from EcoBricks are not just stylish but also super sustainable.'
    },
    {
      id: 2,
      name: 'Hina Shahrukh',
      role: 'Managing Partner, Hina Shahrukh & Co. Pvt Ltd.',
      text: 'A special thanks to Kashaf Akhtar for designing these wonderful giveaways that perfectly align with our values and vision.'
    },
    {
      id: 3,
      name: 'Jane Marriott, CMG OBE',
      role: 'UK High Commissioner',
      text: "It's a green product so I absolutely love it."
    },
    {
      id: 4,
      name: 'Deepa Lama',
      role: 'Program Assistant, FAO, Nepal',
      text: 'Sustainable yet beautiful looking product'
    },
    {
      id: 5,
      name: 'Haider Jalal',
      role: 'Automation Engineer, CodeHuddle',
      text: "I'm loving this EcoPot made from recycled plastic courtesy of Kashaf Akhtar and the team at EcoBricks. Transforming waste into functional art is truly inspiring!"
    }
  ];

  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData, ...testimonialsData];
  const [testimonialIndex, setTestimonialIndex] = useState(5); // Start at the middle set

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => prev + 1);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => prev - 1);
  };

  // Logic for wraparound jump
  useEffect(() => {
    if (testimonialIndex >= testimonialsData.length * 2) {
      setTimeout(() => setTestimonialIndex(testimonialIndex - testimonialsData.length), 500);
    } else if (testimonialIndex < testimonialsData.length) {
      setTimeout(() => setTestimonialIndex(testimonialIndex + testimonialsData.length), 500);
    }
  }, [testimonialIndex]);



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
                          className="h-[300px] md:h-[400px] lg:h-[450px] w-auto max-w-full object-contain opacity-90 transition-all duration-1000"
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
      <section className="pt-8 pb-20 bg-sand relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30"></div>
        <div className="absolute inset-0 blueprint-grid opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="text-center md:text-left flex-1">
              <h2 className="text-4xl md:text-5xl mb-4 text-charcoal">What Our Partners Say</h2>
              <p className="font-sans font-light text-charcoal/70">Trusted by leading architects and engineers worldwide.</p>
            </div>
            <div className="flex gap-4 mt-8 md:mt-0">
              <button 
                onClick={prevTestimonial}
                className="flex items-center justify-center w-12 h-12 border border-charcoal/20 rounded-full hover:bg-charcoal hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="flex items-center justify-center w-12 h-12 border border-charcoal/20 rounded-full hover:bg-charcoal hover:text-white transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <motion.div 
              animate={{ x: `-${testimonialIndex * (100 / (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3))}%` }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="flex gap-0"
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div 
                  key={`${testimonial.id}-${index}`}
                  className="px-2 shrink-0 w-full md:w-1/3"
                >
                  <div className="geometric-frame bg-cream/80 backdrop-blur-sm p-4 md:p-5 h-full">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-clay fill-current mr-1" />
                      ))}
                    </div>
                    <p className="font-serif text-sm md:text-base text-charcoal leading-relaxed mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t border-charcoal/10 pt-3">
                      <div className="font-sans font-medium text-xs text-charcoal">{testimonial.name}</div>
                      <div className="font-sans text-[10px] tracking-widest uppercase text-charcoal/50 mt-1">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;