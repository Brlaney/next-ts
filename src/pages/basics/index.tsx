import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '@/styles/pages/Basics.module.scss';

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
        <h2 className='uk-header'>
          This is the basics page.
        </h2>
        {basics.map(link => (
          <motion.div key={link.id}>
            <Link href={link.link}>
              <a className={styles.link}>{link.name}</a>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
};

export default Basics;
