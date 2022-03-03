import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '@/styles/pages/Home.module.scss';


const Charts = () => {
  return (
    <motion.div className={styles.container} layout>
      <motion.div className={styles.grid}>

        <motion.div className={styles.box}>

          <Link href='/charts/chart-js'>
            <motion.button
              className='uk-button uk-button-primary'
              whileHover={{
                zIndex: 1,
                scale: 1.06,
                transition: { duration: 0.3, easing: 'easeInOut' }
              }}
              whileTap={{ scale: 0.9 }}
            >
              Chart.js example
            </motion.button>
          </Link>

          <Link href='/charts/plotly-js'>
            <motion.button
              className='uk-button uk-button-primary'
              whileHover={{
                zIndex: 1,
                scale: 1.06,
                transition: { duration: 0.3, easing: 'easeInOut' }
              }}
              whileTap={{ scale: 0.9 }}
            >
              Plotly.js example
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
};

export default Charts;
