import { motion } from 'framer-motion';
import styles from '@/styles/pages/Home.module.scss';


const Contact = () => {
  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>
        Contact page
      </motion.div>
    </motion.div>
  )
};

export default Contact;
