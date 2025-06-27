'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const AnimatedText = ({ text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="flex items-center justify-center w-full gap-4 py-10">
      {/* Left Line */}
      <div className=" sm:block w-1/5 h-[2px] bg-gradient-to-r from-transparent via-gray-600 to-transparent" />

      {/* Animated Text */}
      <div className="flex space-x-1 justify-center flex-wrap">
        <AnimatePresence>
          {text.split('').map((char, i) => (
            <motion.p
              ref={ref}
              key={i}
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              exit="hidden"
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-xl text-center sm:text-4xl font-bold tracking-tighter text-gray-100 md:text-5xl md:leading-[4rem]"
            >
              {char === ' ' ? <span>&nbsp;</span> : char}
            </motion.p>
          ))}
        </AnimatePresence>
      </div>

      {/* Right Line */}
      <div className=" sm:block w-1/5 h-[2px] bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
    </div>
  );
};

export default AnimatedText;
