import { motion } from 'framer-motion';
import styles from '@/styles/pages/Home.module.scss';


const About = () => {
  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>
        About page
      </motion.div>
    </motion.div>
  )
};

export default About;
