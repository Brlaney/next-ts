import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import frames from '@/components/Frames';
import Image from 'next/image';
import styles from '@/styles/pages/Bars.module.scss';

export default function Bars() {
  // const [pathIndex, setPathIndex] = useState(0);
  // const progress = useMotionValue(pathIndex);
  // const fill = useTransform(progress, frames.map(getIndex), colors);
  // const path = useFlubber(progress, frames);

  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.carousel}>
        <motion.div className={styles.innerCarousel}>

          {/* Iterate over your array of images */}
          {frames.map((frame, i: number) => (
            <motion.div className={styles.item} key={i}>
              <Image
                width={390}
                height={160}
                src={frame}
                alt=''
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
};
