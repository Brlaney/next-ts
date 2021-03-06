import * as React from 'react';
import { motion } from 'framer-motion';
import {
  mainPathVariant,
  shapeVariations
} from '@/lib/animations/svgs';

const One = () => {
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
          id='frame_0'
          data-name='frame_0'
        >
          <motion.rect {...mainPathVariant} width='390' height='160' fill='white' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M88.053 80.2763L196.91 80.4022H302.053' stroke='#252323' strokeWidth='2.5' {...shapeVariations} animate='visible' initial='hidden'  />
          <motion.path d='M88 80.1373C88 82.3464 86.2091 84.1373 84 84.1373C81.7909 84.1373 80 82.3464 80 80.1373C80 77.9281 81.7909 76.1373 84 76.1373C86.2091 76.1373 88 77.9281 88 80.1373Z' fill='#CADEFC' stroke='#252323' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.circle cx='305.402' cy='80' r='4' fill='#CADEFC' stroke='#252323' {...shapeVariations} animate='visible' initial='hidden' />
        </g>
      </svg>
    </motion.div>
  )
};

export default One;
