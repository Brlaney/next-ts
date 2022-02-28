// import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// import images from '@/components/Images';
import { Re1, Re2 } from '@/lib/utils/reynolds';
import styles from '@/styles/pages/Moody.module.scss';


const Moody = () => {

  // Test function 1: Re1(p, u, L, mu)
  const test1 = Re1(910, 2.6, 0.025, 0.38)
  console.log(test1)

  // Test function 2: Re2(u, L, v)
  // const test2 = Re2()
  // console.log(test2)

  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>
        <motion.div className={styles.moody}>
          {test1}
        </motion.div>
      </motion.div>
    </motion.div>
  )
};

export default Moody;
