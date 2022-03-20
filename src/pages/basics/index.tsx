import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  headerVariant,
  boxVariant,
  btnVariant
} from '@/lib/animations/pages';
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

      <motion.div className={styles.header}>
        <motion.h1
          className={styles.title1}
          variants={headerVariant}
          animate='animate'
          initial='initial'
        >
          This is the basics page
          </motion.h1>
        </motion.div>

        <motion.div className={styles.box}
          variants={boxVariant}
          animate='animate'
          initial='initial'
        >

          {basics.map(link => (
            <Link href={link.link} key={link.id}>
              <motion.button
                className='uk-button uk-button-primary'
                variants={btnVariant}
                animate='animate'
                initial='initial'
                whileHover='whileHover'
                whileTap='whileTap'
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
