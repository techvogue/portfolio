'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const BlurIn = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.h2
      ref={ref}
      initial={{ filter: 'blur(20px)', opacity: 0 }}
      animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="text-base text-center sm:text-3xl font-bold tracking-tight text-gray-100 md:text-5xl md:leading-[3.5rem]"
    >
      {children}
    </motion.h2>
  );
};

export default BlurIn;
