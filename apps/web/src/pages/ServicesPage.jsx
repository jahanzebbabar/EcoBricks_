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
            <p className="font-sans font-light text-charcoal/60 text-lg max-w-xl leading-relaxed">
              Two core offerings designed to make sustainability practical, engaging, and impactful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service 01 — Corporate Engagement */}
      <section className="border-b border-charcoal/10">
        <div className="flex flex-col md:flex-row min-h-[520px]">

          {/* Image Placeholder — Left */}
          <div className="w-full md:w-1/2 min-h-[300px] md:min-h-0 bg-charcoal/5 border-r border-charcoal/10 flex items-center justify-center relative overflow-hidden group">
            {/* User will add image here — placeholder shown below */}
            <div className="absolute inset-0 blueprint-grid opacity-10"></div>
            <div className="relative z-10 text-center px-8">
              <div className="w-16 h-16 border border-charcoal/20 flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 border-2 border-charcoal/30 rounded-sm"></div>
              </div>
              <p className="font-sans text-xs tracking-widest uppercase text-charcoal/30">Image Placeholder</p>
            </div>
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
              <div className="font-sans text-xs tracking-widest uppercase text-charcoal/40 mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-charcoal/30 inline-block"></span>
                Service 01
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 text-charcoal leading-tight">
                Corporate Engagement Activity
              </h2>
              <p className="font-sans font-light text-charcoal/65 leading-relaxed mb-4 text-lg">
                A hands-on team experience built around sustainability.
              </p>
              <p className="font-sans font-light text-charcoal/50 leading-relaxed text-sm">
                Bring your team together through guided ecobrick-making workshops. Collect plastic waste, compact it into bricks, and create something lasting — a tangible symbol of your organization's commitment to the environment.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Second image row for Service 01 — optional extra photo */}
        <div className="flex flex-col md:flex-row min-h-[300px] border-t border-charcoal/10">
          <div className="w-full md:w-1/3 min-h-[200px] bg-sand/40 border-r border-charcoal/10 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 blueprint-grid opacity-5"></div>
            <p className="font-sans text-xs tracking-widest uppercase text-charcoal/25 z-10">Image Placeholder</p>
          </div>
          <div className="w-full md:w-1/3 min-h-[200px] bg-cream border-r border-charcoal/10 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 blueprint-grid opacity-5"></div>
            <p className="font-sans text-xs tracking-widest uppercase text-charcoal/25 z-10">Image Placeholder</p>
          </div>
          <div className="w-full md:w-1/3 min-h-[200px] bg-sand/20 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 blueprint-grid opacity-5"></div>
            <p className="font-sans text-xs tracking-widest uppercase text-charcoal/25 z-10">Image Placeholder</p>
          </div>
        </div>
      </section>

      {/* Service 02 — Waste Consultation */}
      <section className="border-b border-charcoal/10">
        <div className="flex flex-col md:flex-row-reverse min-h-[520px]">

          {/* Image Placeholder — Right */}
          <div className="w-full md:w-1/2 min-h-[300px] md:min-h-0 bg-forest/5 border-l border-charcoal/10 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 blueprint-grid opacity-10"></div>
            <div className="relative z-10 text-center px-8">
              <div className="w-16 h-16 border border-charcoal/20 flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 border-2 border-charcoal/30 rounded-sm"></div>
              </div>
              <p className="font-sans text-xs tracking-widest uppercase text-charcoal/30">Image Placeholder</p>
            </div>
          </div>

          {/* Text — Left */}
          <div className="w-full md:w-1/2 flex items-center py-16 px-8 md:px-20 bg-sand/30">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-lg"
            >
              <div className="font-sans text-xs tracking-widest uppercase text-charcoal/40 mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-charcoal/30 inline-block"></span>
                Service 02
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 text-charcoal leading-tight">
                Waste Consultation & Recycling
              </h2>
              <p className="font-sans font-light text-charcoal/65 leading-relaxed mb-4 text-lg">
                Turning your plastic problem into a resource.
              </p>
              <p className="font-sans font-light text-charcoal/50 leading-relaxed text-sm">
                We assess your organization's plastic waste streams, develop a structured collection plan, and convert that waste into high-quality ecobricks for use in real construction projects. A complete, closed-loop solution.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Second image row for Service 02 */}
        <div className="flex flex-col md:flex-row min-h-[300px] border-t border-charcoal/10">
          <div className="w-full md:w-1/2 min-h-[200px] bg-cream/60 border-r border-charcoal/10 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 blueprint-grid opacity-5"></div>
            <p className="font-sans text-xs tracking-widest uppercase text-charcoal/25 z-10">Image Placeholder</p>
          </div>
          <div className="w-full md:w-1/2 min-h-[200px] bg-sand/30 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 blueprint-grid opacity-5"></div>
            <p className="font-sans text-xs tracking-widest uppercase text-charcoal/25 z-10">Image Placeholder</p>
          </div>
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
            <p className="font-sans font-light text-cream/70 mb-10 text-lg">
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