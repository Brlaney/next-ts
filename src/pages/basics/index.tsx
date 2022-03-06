import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '@/styles/pages/Basics.module.scss';

const basics = [
  { id: 1, name: 'Products page', link: '/basics/products' },
  { id: 2, name: 'Sign-up form', link: '/basics/sign-up' },
  { id: 3, name: 'Contact form', link: '/basics/contact' },
  { id: 4, name: 'About page', link: '/basics/about' },
  { id: 5, name: 'Privacy policy page', link: '/basics/privacy-policy' },
];

export default function Basics() {
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
          This is the basics page
        </motion.h1>

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
