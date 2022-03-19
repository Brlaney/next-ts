import * as React from 'react';
import { motion } from 'framer-motion';
import {
  mainPathVariant,
  shapeVariations
} from '@/lib/animations/svgs';

const Three = () => {
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
          id='frame_2'
          data-name='frame_2'
        >
          <motion.rect {...mainPathVariant} width='390' height='160' transform='translate(1)' fill='white' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M1.09419 154L390.742 11.4899' stroke='#4E4E4E' strokeDasharray='4 4' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M94.9476 119.597L197.209 82.5112L295.94 46.5762' stroke='#252323' strokeWidth='2.5' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M87.0915 120.853C87.0915 118.644 88.8824 116.853 91.0915 116.853C93.3006 116.853 95.0915 118.644 95.0915 120.853C95.0915 123.062 93.3006 124.853 91.0915 124.853C88.8824 124.853 87.0915 123.062 87.0915 120.853Z' fill='#CADEFC' stroke='#252323' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.circle cx='299.094' cy='45' r='4' transform='rotate(-180 299.094 45)' fill='#CADEFC' stroke='#252323' {...shapeVariations} animate='visible' initial='hidden' />
        </g>
      </svg>
    </motion.div>
  )
};

export default Three;
