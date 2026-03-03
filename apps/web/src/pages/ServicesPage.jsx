import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ServicesPage = () => {
  const { toast } = useToast();

  const services = [
    {
      id: '01',
      title: 'Consultation & Material Planning',
      description: 'Expert architectural guidance on selecting the right sustainable materials for your project. We analyze structural requirements, thermal goals, and LEED certification objectives to recommend optimal material configurations.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200',
    },
    {
      id: '02',
      title: 'Custom Block Engineering',
      description: 'Tailored material formulations engineered to exact architectural specifications. We develop custom dimensions, finishes, and performance characteristics to meet unique structural demands and aesthetic visions.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200',
    },
    {
      id: '03',
      title: 'Logistics & Distribution',
      description: 'Precision supply chain management ensuring timely delivery to construction sites. Our logistics network is optimized for minimal carbon footprint during transport, maintaining the sustainability integrity of the project.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?w=1200',
    },
  ];

  const workflow = [
    { step: 'Phase I', title: 'Architectural Review', desc: 'Analysis of blueprints and structural requirements.' },
    { step: 'Phase II', title: 'Material Specification', desc: 'Selection and custom formulation of EcoCore™ materials.' },
    { step: 'Phase III', title: 'Precision Manufacturing', desc: 'Production utilizing our low-carbon manufacturing process.' },
    { step: 'Phase IV', title: 'Site Integration', desc: 'Delivery and technical support during the construction phase.' },
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
        <title>Services | Ecobricks Professional Solutions</title>
        <meta name="description" content="Professional architectural services, custom engineering, and sustainability consulting." />
      </Helmet>

      {/* Page Header */}
      <section className="py-24 relative border-b border-charcoal/10 overflow-hidden">
        <div className="bg-faded-text">
          <span>EXPERTISE</span>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl mb-6">Professional Services</h1>
            <p className="font-sans font-light text-charcoal/70 text-lg md:text-xl leading-relaxed">
              Comprehensive support from initial architectural consultation through custom manufacturing and site delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Full-Width Blocks */}
      <section>
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={service.id} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} min-h-[600px] border-b border-charcoal/10`}>
              {/* Image Half */}
              <div className="w-full md:w-1/2 relative overflow-hidden bg-charcoal">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-noise opacity-20"></div>
              </div>
              
              {/* Text Half */}
              <div className={`w-full md:w-1/2 flex items-center p-12 md:p-24 ${isEven ? 'bg-cream' : 'bg-sand'}`}>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="max-w-lg"
                >
                  <div className="font-sans text-xs tracking-widest uppercase text-charcoal/50 mb-6 border-b border-charcoal/20 pb-2 inline-block">
                    Service {service.id}
                  </div>
                  <h2 className="text-3xl md:text-4xl mb-6 text-charcoal">{service.title}</h2>
                  <p className="font-sans font-light text-charcoal/80 leading-relaxed mb-10">
                    {service.description}
                  </p>
                  <button onClick={handleAction} className="font-sans text-sm tracking-widest uppercase flex items-center hover:text-clay transition-colors group">
                    Request Consultation <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </button>
                </motion.div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Workflow Diagram */}
      <section className="section-padding bg-charcoal text-cream relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-dark opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-4xl md:text-5xl mb-6">Project Methodology</h2>
              <p className="font-sans font-light text-cream/70 leading-relaxed">
                A structured, linear approach ensuring architectural precision and material integrity at every phase of development.
              </p>
            </div>
            
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="relative border-l border-cream/20 ml-4 md:ml-0 py-8">
                {workflow.map((item, index) => (
                  <motion.div 
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative pl-12 pb-16 last:pb-0"
                  >
                    {/* Marker */}
                    <div className="absolute left-[-5px] top-1 w-[9px] h-[9px] bg-cream"></div>
                    <div className="absolute left-0 top-1 w-8 h-[1px] bg-cream/20"></div>
                    
                    <div className="font-sans text-xs tracking-widest uppercase text-sand mb-2">{item.step}</div>
                    <h3 className="text-2xl mb-3">{item.title}</h3>
                    <p className="font-sans font-light text-cream/60">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;