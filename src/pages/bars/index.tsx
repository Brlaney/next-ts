import * as React from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import One from '@/components/frames/One';
import Two from '@/components/frames/Two';
import Three from '@/components/frames/Three';
import Four from '@/components/frames/Four';
import Five from '@/components/frames/Five';
import Six from '@/components/frames/Six';
import Seven from '@/components/frames/Seven';
import styles from '@/styles/pages/Bars.module.scss';


export default function Bars() {
  const [step, setStep] = React.useState(0);

  const handleClick = (step) => {
    let nextStep = step + 1;
    let check = nextStep % 7;
    setStep(check);
  };

  React.useEffect(() => {
    // console.log(step); // test state value
  }, [step]);

  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>
        <motion.div className={styles.box}>
          <motion.div
            className={styles.item}
            onClick={() => { handleClick(step) }}
          >
            <AnimateSharedLayout>
              {step === 0 && <One />}
              {step === 1 && <Two />}
              {step === 2 && <Three />}
              {step === 3 && <Four />}
              {step === 4 && <Five />}
              {step === 5 && <Six />}
              {step === 6 && <Seven />}
            </AnimateSharedLayout>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
};
