import * as React from 'react';
import { motion } from 'framer-motion';
import One from '@/components/Frames/One';
import Two from '@/components/Frames/Two';
import Three from '@/components/Frames/Three';
import Four from '@/components/Frames/Four';
import Five from '@/components/Frames/Five';
import Six from '@/components/Frames/Six';
import Seven from '@/components/Frames/Seven';
import { variant1 } from '@/lib/animations/bars';
import Image from 'next/image';
import arrows from '@/components/Arrows';
import styles from '@/styles/pages/Bars.module.scss';

export default function Bars() {
  const [step, setStep] = React.useState(0);

  const handleClick = (step: number) => {
    if (step == 1) {
      let nextStep = step + 1;
      let check = nextStep % 7;

      setStep(check);
    } else if (step == -1) {
      let nextStep = step - 1;
      let check = nextStep % 7;

      setStep(check);
    } else {
      console.log('An error occurred.');
    }
  };

  React.useEffect(() => {
    // console.log(step); // test state value
  }, [step]);

  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>
        <motion.div className={styles.box}>
          <motion.div
            className={styles['left-click']}
            onClick={() => { handleClick(-1) }}
            variants={variant1}
            initial='initial'
            animate='animate'
            whileHover='whileHover'
            whileTap='whileTap'
          >
            <Image
              id='click-back'
              width={42}
              height={56}
              src={arrows[0]}
              alt='left-arrow'
            />
          </motion.div>
          <motion.div className={styles.item}>
            {step === 0 && <One />}
            {step === 1 && <Two />}
            {step === 2 && <Three />}
            {step === 3 && <Four />}
            {step === 4 && <Five />}
            {step === 5 && <Six />}
            {step === 6 && <Seven />}
          </motion.div>
          <motion.div
            className={styles['right-click']}
            onClick={() => { handleClick(1) }}
            variants={variant1}
            initial='initial'
            animate='animate'
            whileHover='whileHover'
            whileTap='whileTap'
          >
            <Image
              id='click-fwd'
              width={42}
              height={56}
              src={arrows[1]}
              alt='right-arrow'
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
};
