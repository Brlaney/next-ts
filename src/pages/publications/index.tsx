import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { IPublication } from '@/lib/types';
import { motion } from 'framer-motion';
import Card from '@/components/Card';
import Link from 'next/link';
import styles from '@/styles/pages/Publications.module.scss';


const Publications = ({ publications }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [bpr, setBpr] = React.useState(publications);

  /*
  const fetchData = async () => {
    const response = await fetch('http://localhost:3000/api/bpr');
    const data = await response.json();

    // Testing response output:
    console.log(data);

    setBpr(data);
  };

  React.useEffect(() => {
  fetchData();
  }, []);
  */

  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>

        <motion.div className={styles.header}>
          <motion.h1
            className={styles.title1}
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
            className={styles.title2}
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
        </motion.div>

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

          {bpr.map((publication: IPublication) => (
            <Card data={publication} />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
};

export const getStaticProps: GetStaticProps = async _context => {
  const endpoint = `${process.env.NEXT_PUBLIC_URL}`;
  const res = await fetch(endpoint);
  const publications: IPublication[] = await res.json();

  return {
    props: { publications }
  }
};

export default Publications;
