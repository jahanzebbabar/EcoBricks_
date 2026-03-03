import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider = ({ orientation = 'horizontal', className = '' }) => {
  const isHorizontal = orientation === 'horizontal';

  return (
    <div className={`relative flex items-center justify-center ${isHorizontal ? 'w-full py-8' : 'h-full px-8'} ${className}`}>
      <motion.div
        initial={isHorizontal ? { scaleX: 0 } : { scaleY: 0 }}
        whileInView={isHorizontal ? { scaleX: 1 } : { scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className={`bg-border ${isHorizontal ? 'h-[1px] w-full origin-left' : 'w-[1px] h-full origin-top'}`}
      />
      {/* Geometric markers */}
      <div className={`absolute ${isHorizontal ? 'left-0' : 'top-0'} w-1.5 h-1.5 bg-primary`} />
      <div className={`absolute ${isHorizontal ? 'right-0' : 'bottom-0'} w-1.5 h-1.5 bg-primary`} />
    </div>
  );
};

export default SectionDivider;