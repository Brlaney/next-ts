import { motion } from 'framer-motion';
import Back from '@/components/Back';
import styles from '@/styles/pages/Basics.module.scss';

export default function Contact() {
  const endpoint = '/basics';

  return (
    <motion.div className={styles.container}>
      <Back link={endpoint} />
      <motion.div className={styles.grid}>
        Contact page
      </motion.div>
    </motion.div>
  )
};
