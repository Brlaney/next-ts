import { motion } from 'framer-motion';
import styles from '@/styles/pages/Basics.module.scss';


export default function About () {
  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>
        About page
      </motion.div>
    </motion.div>
  )
};
