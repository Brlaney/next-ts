import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations/pages';
import images from '@/components/Images';
import Image from 'next/image';
import styles from '@/styles/pages/Carousel.module.scss';
// import useWindowSize from '@/lib/utils/viewport';

const Carousel = () => {
  // Display screen width/height:
  // const size = useWindowSize();

  const [width] = React.useState(10252);
  // const [offsetWidth, setOffsetWidth] = useState(1920); // Chrome/Firefox
  // const [offsetWidth, setOffsetWidth] = useState(1872); // Edge
  // const [offsetWidth, setOffsetWidth] = useState(size.width);

  // Define reference to carousel
  const carousel = React.useRef<HTMLDivElement>(null);
  
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
