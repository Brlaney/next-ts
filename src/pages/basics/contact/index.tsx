import { motion } from 'framer-motion';
import styles from '@/styles/pages/Basics.module.scss';


export default function Contact() {
  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>
        Contact page
      </motion.div>
    </motion.div>
  )
};
