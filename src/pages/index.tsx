import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/pages/Home.module.scss';

// const pages = [
//   { id: 1, name: 'The basic website', link: '/basics' },
//   { id: 2, name: 'Charts', link: '/charts' },
//   { id: 3, name: 'Fluid hydraulics', link: '/fluids' },
//   { id: 4, name: 'Hydraulics chart (moody)', link: '/charts/reynolds' },
// ];

const Home = () => {
  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>
        This is the homepage.
      </motion.div>
    </motion.div>
  )
};

export default Home;
