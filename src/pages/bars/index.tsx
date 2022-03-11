import * as React from 'react';
import {
  motion,
  // useMotionValue,
  // useTransform,
  // animate
} from 'framer-motion';
import frames from '@/components/Frames';
import Image from 'next/image';
import styles from '@/styles/pages/Bars.module.scss';
import { stringify } from 'querystring';

export default function Bars() {
  const [step, setStep] = React.useState(0);

  const handleClick = (step) => {
    // let check = 7 % step;

    if (step == 7) {
      setStep(0)
    } else {

      for (let i = 0; i < 1; i++) {
        setStep(step + 1);
      }
    }
  };

  React.useEffect(() => {
    console.log(step);
  }, [step]);

  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>
        <motion.div className={styles.box}>

          {/* Iterate over your array of images */}
          {frames.map((frame, i: number) => (
            <motion.div className={styles.item} key={i}>
              {frame}
            </motion.div>
          ))}

          {/* <motion.div
            className={styles.item}
            onClick={() => { handleClick(step) }}
          > */}
            {/* <Image
              id={stringify({step})}
              width={600}
              height={246.15}
              src={frames[step]}
            /> */}
            {/* <frame_0 /> */}
            
          {/* </motion.div> */}
        </motion.div>
      </motion.div>
    </motion.div>
  )
};
