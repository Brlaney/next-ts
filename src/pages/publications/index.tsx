import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { IPublication } from '@/lib/types';
import { motion } from 'framer-motion';
import Card from '@/components/Card';
import { headerVariant, boxVariant } from '@/lib/animations/headers';
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
    <motion.div className={styles.container} layout>
      <motion.div className={styles.grid}>

        <motion.div className={styles.header}>
          <motion.h1
            className={styles.title1}
            variants={headerVariant}
            initial='initial'
            animate='animate'
          >
            TN Supreme Court
          </motion.h1>
          <motion.h2
            className={styles.title2}
            variants={headerVariant}
            initial='initial'
            animate='animate'
          >
            Board of Professional Responsibility
          </motion.h2>
        </motion.div>

        <motion.div
          className={styles.box}
          variants={boxVariant}
          initial='initial'
          animate='animate'
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
