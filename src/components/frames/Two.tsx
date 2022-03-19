import * as React from 'react';
import { motion } from 'framer-motion';
import {
  mainPathVariant,
  shapeVariations
} from '@/lib/animations/svgs';

const Two = () => {
  return (
    <motion.div
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      layout
    >
      <svg width='390' height='160' viewBox='0 0 390 160' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g
          id='frame_1'
          data-name='frame_1'
        >
          <motion.rect {...mainPathVariant} width='390' height='160' fill='white' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M93.9476 119.597L196.209 82.5112L294.94 46.5762' stroke='#252323' strokeWidth='2.5' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M86.0915 120.853C86.0915 118.644 87.8823 116.853 90.0915 116.853C92.3006 116.853 94.0915 118.644 94.0915 120.853C94.0915 123.062 92.3006 124.853 90.0915 124.853C87.8823 124.853 86.0915 123.062 86.0915 120.853Z' fill='#CADEFC' stroke='#252323' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.circle cx='298.094' cy='45' r='4' transform='rotate(-180 298.094 45)' fill='#CADEFC' stroke='#252323' {...shapeVariations} animate='visible' initial='hidden' />
        </g>
      </svg>
    </motion.div>
  )
};

export default Two;
