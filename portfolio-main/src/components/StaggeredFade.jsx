// 'use client';

// import { cn } from '@/lib/utils';  // only if you are using shadcn/ui or tailwind utils
// import { motion, useInView } from 'framer-motion';
// import * as React from 'react';

// type TextStaggeredFadeProps = {
//   text: string;
//   className?: string;
// };

// export const StaggeredFade: React.FC<TextStaggeredFadeProps> = ({
//   text,
//   className = '',
// }) => {
//   const variants = {
//     hidden: { opacity: 0, y: 10 },
//     show: (i: number) => ({
//       y: 0,
//       opacity: 1,
//       transition: { delay: i * 0.05 },
//     }),
//   };

//   const letters = text.split('');
//   const ref = React.useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <motion.h2
//       ref={ref}
//       initial="hidden"
//       animate={isInView ? 'show' : ''}
//       variants={variants}
//       className={cn(
//         'text-base text-center sm:text-3xl font-bold tracking-tight text-gray-100 md:text-5xl md:leading-[3.5rem]',
//         className
//       )}
//     >
//       {letters.map((char, i) => (
//         <motion.span key={`${char}-${i}`} variants={variants} custom={i}>
//           {char === ' ' ? <span>&nbsp;</span> : char}
//         </motion.span>
//       ))}
//     </motion.h2>
//   );
// };
