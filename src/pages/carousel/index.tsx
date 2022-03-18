import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import images from '@/components/images/Images';
import Image from 'next/image';
import styles from '@/styles/pages/Carousel.module.scss';
import useWindowSize from '@/lib/utils/viewport';


const Carousel = () => {
  // Display screen width/height: {size.width}{size.height}
  const size = useWindowSize();
  console.log(size.width)

  const [width, setWidth] = useState(0);
  // const [offsetWidth, setOffsetWidth] = useState(1872);    // Edge
  const [offsetWidth, setOffsetWidth] = useState(1920); // Chrome/Firefox
  
  // Unsure of why this doesn't function correctly
  // const [offsetWidth, setOffsetWidth] = useState(size.width);
  const carousel = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Test the ref/output in browsers console
    // console.log('\nScroll width: ' + carousel.current.scrollWidth);
    // console.log('\nOffset width: ' + carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - offsetWidth);
  }, []);

  return (
    <motion.div className={styles.container}>
      <motion.div ref={carousel} className={styles.carousel}>
        <motion.div
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          className={styles.innerCarousel}
        >

          {/* Iterate over your array of images */}
          {images.map((image, i: number) => {
            return (
              <motion.div className={styles.item} key={i}>
                <Image
                  width={700}
                  height={466.66}
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
