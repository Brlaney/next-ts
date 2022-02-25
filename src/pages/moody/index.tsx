// import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// import images from '@/components/Images';
// import Image from 'next/image';
import { Re1, Re2 } from '@/lib/utils/reynolds';
import styles from '@/styles/pages/Moody.module.scss';


const Moody = () => {
  // Re1(p, u, mu, L)
  // Re2(u, L, v)

  // Test function 1:
  const test1 = Re1(910, 2.6, 0.025, 0.38)
  console.log(test1)

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
