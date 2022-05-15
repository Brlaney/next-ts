import * as React from 'react';
import { motion } from 'framer-motion';

export default function BackArrow() {
  return (
    <motion.div
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      layout
    >
      <svg width='46' height='32' viewBox='0 0 46 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path d='M41 25.9035C36.5963 22.39 32.6858 20.3965 29.2676 19.9224C25.8503 19.4488 22.5968 19.3771 19.5062 19.7076V26L5 15.7324L19.5062 6V11.9806C25.2203 12.01 30.0776 13.35 34.079 16C38.0795 18.65 40.3871 21.9512 41 25.9035Z' stroke='white' strokeWidth='2.5' strokeLinejoin='round' />
        </g>
        <defs>
          <filter id='filter0_d_216_6' x='3' y='4' width='42' height='26' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
            <feOffset dx='1' dy='1' />
            <feGaussianBlur stdDeviation='1' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix type='matrix' values='0 0 0 0 0.104167 0 0 0 0 0.104167 0 0 0 0 0.104167 0 0 0 0.22 0' />
            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_216_6' />
            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_216_6' result='shape' />
          </filter>
        </defs>
      </svg>
    </motion.div>
  )
};
