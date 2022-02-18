import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import images from '@/components/Images';
import Image from 'next/image'
import styles from '@/styles/pages/Carousel.module.scss';


const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div className={styles.container}>
      <motion.div ref={carousel} className={styles.carousel}>
        <motion.div
          drag='x'
          dragConstraints={{ right: 6158, left: -6158 }}
          className={styles.innerCarousel}
        >

          {/* Iterate over your array of images */}
          {images.map((image, i: number) => {
            return (
              <motion.div className={styles.item} key={i}>
                <Image
                  layout='responsive'
                  src={image}
                  alt=''
                />
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  )
};

export default Carousel;
