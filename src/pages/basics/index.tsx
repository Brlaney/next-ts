import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '@/styles/pages/Home.module.scss';

const basics = [
  { id: 1, name: 'Products', link: '/basics/products' },
  { id: 2, name: 'Sign-up', link: '/basics/sign-up' },
  { id: 3, name: 'Contact', link: '/basics/contact' },
  { id: 4, name: 'About', link: '/basics/about' },
];

const Basics = () => {
  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>
        <motion.div className={styles.box}>
          
          <motion.h1 className='uk-header'>
            This is the basics page.
          </motion.h1>

          {basics.map(link => (
            <Link href={link.link} key={link.id}>
              <motion.button
                className='uk-button uk-button-primary'
                whileHover={{
                  zIndex: 1,
                  scale: 1.06,
                  transition: { duration: 0.3, easing: 'easeInOut' }
                }}
                whileTap={{ scale: 0.9 }}
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

export default Basics;
