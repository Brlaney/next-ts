import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { btnVariant } from '@/lib/animations/buttons';
import styles from '@/styles/pages/Charts.module.scss';

const links = [
  { id: 1, name: 'US Tornado Timeline', link: '/charts/chartjs' },
  { id: 2, name: 'BPR Publications', link: '/charts/bpr' },
  { id: 3, name: 'Moody Diagram', link: '/charts/moody' },
  { id: 4, name: 'Dashboard', link: '/charts/dashboard' },
  { id: 5, name: 'Mass Shootings in the US', link: '/charts/mass-shootings' },
  { id: 6, name: 'Mass Shootings in the US by Year', link: '/charts/mass-shootings/victims' },
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
                variants={btnVariant}
                whileHover='whileHover'
                animate='animate'
                whileTap='whileTap'
                initial='initial'
                exit='exit'
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
