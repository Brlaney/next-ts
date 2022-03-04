import { motion } from 'framer-motion';
import styles from '@/styles/pages/Home.module.scss';


const SignUp = () => {
  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>
        Sign-up page
      </motion.div>
    </motion.div>
  )
};

export default SignUp;
