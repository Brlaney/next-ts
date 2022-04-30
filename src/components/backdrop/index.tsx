import { motion } from 'framer-motion';
import styles from '@/styles/components/Backdrop.module.scss';

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className={styles.backdrop}
      onClick={onClick}
      initial={{  opacity: 0 }}
      animate={{  opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
    >
      {children}
    </motion.div>
  )
};

export default Backdrop;
