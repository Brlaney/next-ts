import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/pages/Tests.module.scss';


export default function BprData() {
  const [bpr, setBpr] = React.useState([]);

  const fetchData = async () => {
    const response = await fetch('https://raw.githubusercontent.com/Brlaney/my-datasets/main/bpr/data.json');
    const data = await response.json();
    console.log(data);
    setBpr(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>

        <motion.h1
          className={styles.header}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: [0.8, 0.1, 0.1, 0.95]
            }
          }}
          initial={{ x: 200, opacity: 0 }}
        >
          TN Supreme Court
        </motion.h1>
        <motion.h2
          className={styles.header}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: [0.8, 0.1, 0.1, 0.95]
            }
          }}
          initial={{ x: 200, opacity: 0 }}
        >
          Board of Professional Responsibility
        </motion.h2>

        <motion.div className={styles.box}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.9,
              duration: 1.8,
              ease: [0.2, 0.4, -0.3, 0.95],
              staggerChildren: 0.45
            }
          }}
          initial={{ y: 150, opacity: 0 }}
        >
          POOP
        </motion.div>
      </motion.div>
    </motion.div>
  )
};
