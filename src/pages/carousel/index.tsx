import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations/pages';
import images from '@/components/Images';
import Image from 'next/image';
import styles from '@/styles/pages/Carousel.module.scss';
// import useWindowSize from '@/lib/utils/viewport';

export default function Carousel() {
  const imgW = 700;
  const imgH = 467;
  const fixedOffset = 272;
  const fixedImg = 11900;

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({width: 0, height: 0});
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
  
        function handleResize() {
          setWindowSize({
            width: Number(window.innerWidth),
            height: Number(window.innerHeight),
          });
        }
  
        window.addEventListener('resize', handleResize);
        handleResize();
  
        return () => window.removeEventListener('resize', handleResize);
      }
    }, []);
    
    return windowSize;
  };
  
  // Define reference to carousel
  const carousel = useRef<HTMLDivElement>(null);
  
  // const [width, setWidth] = useState(10252);
  const [width, setWidth] = useState(10252);
  const [leftScroll, setLeftScroll] = useState<number>();
  
  // const [offsetWidth, setOffsetWidth] = useState(1920); // Chrome/Firefox
  // const [offsetWidth, setOffsetWidth] = useState(1872); // Edge
  // const [offsetWidth, setOffsetWidth] = useState(size.width);
  
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
      <motion.div>
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
              <motion.div
                className={styles.item}
                variants={fadeInUp}
                initial='initial'
                animate='animate'
                exit='exit'
                key={i}
                layout
              >
                <Image
                  width={imgW}
                  height={imgH}
                  src={image}
                  alt='carousel image'
                />
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  )
};
