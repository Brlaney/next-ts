import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations/pages';
import images from '@/components/Images';
import Image from 'next/image';
import styles from '@/styles/pages/Carousel.module.scss';
import useWindowSize from '@/lib/utils/viewport';

export default function Carousel() {
  const imgW = 700;
  const imgH = 467;
  const fixedOffset = 272;
  const fixedImg = 11900;

  // Define reference to carousel
  const carousel = useRef<HTMLDivElement>(null);
  
  // const [width, setWidth] = useState(10252);
  const [leftScroll, setLeftScroll] = useState<number>();
  
  // width: 1920 Chrome/Firefox
  // width: 1872 Edge
  
  // Display screen width/height:
  const size = useWindowSize();

  const [vpWidth, setVpWidth] = useState<number>(0);
  const [vpHeight, setVpHeight] = useState<number>(0);
  
  useEffect(() => {
    setVpWidth(size.width);
    setVpHeight(size.height);

    setLeftScroll(fixedImg - size.width + fixedOffset);
  }, [size, leftScroll, vpWidth, vpHeight]);

  return (
    <motion.div className={styles.container}>
      <motion.div className={styles['carousel-container']}>
        <motion.div
          ref={carousel}
          className={styles.carousel}
          drag={'x'}
          dragConstraints={{
            right: 0,
            left: -leftScroll
          }}
          draggable={true}
        >

          {/* Iterate over your array of images */}
          {images.map((image, i: number) => {
            return (
              <motion.div className={styles.item} variants={fadeInUp} initial='initial' animate='animate' exit='exit' key={i} layout>
                <Image width={imgW} height={imgH} src={image} alt='carousel image' />
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  )
};
