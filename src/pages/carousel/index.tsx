import { motion } from 'framer-motion';
import styles from '@/styles/pages/Carousel.module.scss';
import images from '@/components/Images';

const Carousel = () => {
  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>
        Carousel page
      </motion.div>
    </motion.div>
  )
};

export default Carousel;
