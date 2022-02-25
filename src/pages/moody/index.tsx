// import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// import images from '@/components/Images';
// import Image from 'next/image';
import styles from '@/styles/pages/Moody.module.scss';


const Moody = () => {
//   useEffect(() => {
//   }, []);

  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>
        <motion.div className={styles.moody}>
            Moody Diagram Here
        </motion.div>
      </motion.div>
    </motion.div>
  )
};

export default Moody;
