import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import frames from '@/components/Frames';
import Image from 'next/image';
import { getIndex, useFlubber } from '@/lib/utils/use-flubber';
import styles from '@/styles/pages/Bars.module.scss';

const colors = [
  '#00cc88',
  '#0099ff',
  '#8855ff',
  '#ff0055',
  '#ee4444',
  '#ffcc00',
  '#00cc88'
];


export default function Bars() {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const fill = useTransform(progress, frames.map(getIndex), colors);
  const path = useFlubber(progress, frames);

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 0.8,
      ease: 'easeInOut',
      onComplete: () => {
        if (pathIndex === frames.length - 1) {
          progress.set(0);
          setPathIndex(1);
        } else {
          setPathIndex(pathIndex + 1);
        }
      }
    });

    return () => animation.stop();
  }, [pathIndex]);

  return (
    <motion.div className={styles.container}>
      <svg width='400' height='400'>
        <g transform='translate(10 10) scale(17 17)'>
          <motion.path fill={fill} d={path} />
        </g>
      </svg>
    </motion.div>
  )
};
