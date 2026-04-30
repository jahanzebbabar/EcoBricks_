import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="bg-cream min-h-screen pt-24">
      <Helmet>
        <title>Services | Ecobricks</title>
        <meta name="description" content="Corporate engagement activities and waste consultation & recycling services by Ecobricks." />
      </Helmet>

      {/* Page Header */}
      <section className="py-24 relative border-b border-charcoal/10 overflow-hidden">
        <div className="bg-faded-text">
          <span>SERVICES</span>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="font-sans text-xs tracking-widest uppercase text-clay mb-6">What We Offer</div>
            <h1 className="text-5xl md:text-7xl mb-6 leading-tight">Our Services</h1>
            <p className="font-sans font-normal text-charcoal/90 text-lg md:text-xl leading-relaxed mb-10">
              Two core offerings designed to make sustainability practical, engaging, and impactful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service 01 — Corporate Engagement */}
      <section className="border-b border-charcoal/10">
        <div className="flex flex-col md:flex-row min-h-[520px]">

          {/* Image 1 — Left */}
          <div className="w-full md:w-1/2 min-h-[300px] md:min-h-0 bg-charcoal/5 border-r border-charcoal/10 flex items-center justify-center relative overflow-hidden group">
            <img 
              src="/images/activity1.jpg" 
              onError={(e) => { e.currentTarget.src = "/images/activity1.png"; e.currentTarget.onerror = null; }}
              alt="Corporate Engagement Activity" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
          </div>

          {/* Text — Right */}
          <div className="w-full md:w-1/2 flex items-center py-16 px-8 md:px-20 bg-cream">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-lg"
            >
              <div className="font-sans text-xs tracking-widest uppercase text-charcoal/65 mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-charcoal/40 inline-block"></span>
                Service 01
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 text-charcoal leading-tight">
                Corporate Engagement Activity
              </h2>
              <p className="font-sans font-light text-charcoal/85 leading-relaxed mb-4 text-lg">
                A hands-on team experience built around sustainability.
              </p>
              <p className="font-sans font-normal text-charcoal/75 leading-relaxed text-lg">
                Bring your team together through guided ecobrick-making workshops. Paint pots and create something lasting, a tangible symbol of your organization's commitment to the environment.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Second image row for Service 01 — activity2, activity3, activity4 */}
        <div className="flex flex-col md:flex-row min-h-[300px] border-t border-charcoal/10">
          <div className="w-full md:w-1/3 min-h-[200px] bg-sand/40 border-r border-charcoal/10 flex items-center justify-center relative overflow-hidden group">
            <img 
              src="/images/activity2.jpg" 
              onError={(e) => { e.currentTarget.src = "/images/activity2.png"; e.currentTarget.onerror = null; }}
              alt="Hands-on ecobrick making" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
          </div>
          <div className="w-full md:w-1/3 min-h-[200px] bg-cream border-r border-charcoal/10 flex items-center justify-center relative overflow-hidden group">
            <img 
              src="/images/activity3.jpg" 
              onError={(e) => { e.currentTarget.src = "/images/activity3.png"; e.currentTarget.onerror = null; }}
              alt="Team collaboration" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
          </div>
          <div className="w-full md:w-1/3 min-h-[200px] bg-sand/20 flex items-center justify-center relative overflow-hidden group">
            <img 
              src="/images/activity4.jpg" 
              onError={(e) => { e.currentTarget.src = "/images/activity4.png"; e.currentTarget.onerror = null; }}
              alt="Sustainable corporate building" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Service 02 — Waste Consultation */}
      <section className="border-b border-charcoal/10">
        <div className="flex flex-col md:flex-row min-h-[520px]">

          {/* Text — Left */}
          <div className="w-full md:w-1/2 flex items-center py-16 px-8 md:px-20 bg-sand/30">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-lg"
            >
              <div className="font-sans text-xs tracking-widest uppercase text-charcoal/65 mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-charcoal/40 inline-block"></span>
                Service 02
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 text-charcoal leading-tight">
                Waste Consultation & Recycling
              </h2>
              <p className="font-sans font-light text-charcoal/85 leading-relaxed mb-4 text-lg">
                Turning your plastic problem into a resource.
              </p>
              <p className="font-sans font-normal text-charcoal/75 leading-relaxed text-lg">
                We assess your organization's plastic waste streams, develop a structured collection plan, and convert that waste into high-quality ecobricks products for day to day use. A complete, closed-loop solution.
              </p>
            </motion.div>
          </div>

          {/* Image 4 — Right */}
          <div className="w-full md:w-1/2 min-h-[300px] md:min-h-0 bg-forest/5 border-l border-charcoal/10 flex items-center justify-center relative overflow-hidden group">
            <img 
              src="/images/service4.png" 
              onError={(e) => { e.currentTarget.src = "/images/service4.jpg"; e.currentTarget.onerror = null; }}
              alt="Waste recycling activity"
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
          </div>
        </div>

        {/* Three supporting images under Service 02 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-charcoal/10">
          {[1, 2, 3].map((index) => (
            <div key={index} className="min-h-[300px] bg-cream/60 border-b border-charcoal/10 sm:border-b-0 sm:border-r last:border-r-0 flex items-center justify-center relative overflow-hidden group">
              <img
                src={`/images/service${index}.png`}
                onError={(e) => { e.currentTarget.src = `/images/service${index}.jpg`; e.currentTarget.onerror = null; }}
                alt={`Waste recycling ${index}`}
                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA — Contact */}
      <section className="bg-forest text-cream relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-dark opacity-10"></div>
        <div className="absolute inset-0 bg-noise opacity-20"></div>
        <div className="container-custom section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl mb-6">Interested?</h2>
            <p className="font-sans font-normal text-cream/90 mb-10 text-lg">
              Get in touch and we'll find the right service for you.
            </p>
            <a
              href="mailto:hello@ecobricks.pk"
              className="inline-flex items-center gap-3 px-10 py-4 bg-cream text-forest font-sans text-xs tracking-widest uppercase font-semibold hover:bg-sand transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;