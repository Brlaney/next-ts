import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '@/styles/pages/Charts.module.scss';

const links = [
  { id: 1, name: 'Chart.js sample', link: '/charts/chartjs' },
  { id: 2, name: 'Disciplinary action', link: '/charts/bpr' },
  { id: 3, name: 'Hydraulics chart (moody)', link: '/charts/moody' },
  { id: 4, name: 'Dashboard (beta)', link: '/charts/dashboard' },
];

const Charts = () => {
  return (
    <motion.div className={styles.container} layout>
      <motion.div className={styles.grid}>
        <motion.div className={styles.box}>

          {links.map(link => (
            <Link key={link.id} href={link.link}>
              <motion.button
                className='uk-button uk-button-primary'
                whileHover={{
                  zIndex: 1,
                  scale: 1.06,
                  transition: {
                    duration: 0.3,
                    ease: [0.6, -0.05, 0.01, 0.99]
                  }
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 1.2,
                    ease: [0.6, -0.05, 0.01, 0.99]
                  }
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ y: 300, opacity: 0 }}
              >
                {link.name}
              </motion.button>
            </Link>
          ))}

        </motion.div>
      </motion.div>
    </motion.div>
  )
};

export default Charts;
