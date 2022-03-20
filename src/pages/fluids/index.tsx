import * as React from 'react';
import { motion } from 'framer-motion';
import {
  formVariant,
  submitVariant,
  eqnVariant
} from '@/lib/animations/forms';
import Image from 'next/image';
import { Re1, Re2 } from '@/lib/utils/reynolds';
import eqtns from '@/components/icons/Eqtns';
import styles from '@/styles/pages/Fluids.module.scss';


const Fluids = () => {
  const [reynolds, setReynolds] = React.useState<number>();
  const [p, setP] = React.useState<number>();
  const [u, setU] = React.useState<number>();
  const [L, setL] = React.useState<number>();
  const [mu, setMu] = React.useState<number>();

  function flow(Re) {
    if (Re > 4000) {
      let flow: string = 'Turbulent flow';
      return flow;
    } else if (Re < 4000 && Re > 2300) {
      let flow: string = 'Transient flow';
      return flow;
    } else {
      let flow: string = 'Laminar flow';
      return flow;
    }
  };

  // Test 1: Re1(p, u, L, mu) => Re1(910, 2.6, 0.025, 0.38);
  // Test 2: Re2(u, L, v) => Re2(num1, num2, num3);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const re = await Re1(p, u, L, mu);
    setReynolds(re);
  };


  // Runs everytime reynolds state value changes
  React.useEffect(() => {
    if (reynolds != undefined) {
      console.log('Current reynolds number: ' + reynolds);
      console.log('Flow type: ' + flow(reynolds));
    } else { }
  }, [reynolds]);

  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>
        <motion.div
          className={styles.equations}
          variants={eqnVariant}
          animate='animate'
          initial='initial'
        >
          <Image
            className={styles.eqn}
            width={225}
            height={75}
            src={eqtns[0]}
          />
        </motion.div>
        <motion.form
          className={styles.form}
          onSubmit={(e) => handleSubmit(e)}
          variants={formVariant}
          animate='animate'
          initial='initial'
        >
          <motion.div className={styles.inputs}>
            <label className={styles['input-label']} htmlFor='form-horizontal-text'>
              Density, p (pcf)
            </label>
            <input
              className='uk-input'
              placeholder='Density, p'
              type='number'
              step='any'
              name='p'
              id='density'
              onChange={(e) => setP(parseInt(e.target.value))}
            />
          </motion.div>

          <motion.div className={styles.inputs}>
            <label className={styles['input-label']} htmlFor='form-horizontal-text'>
              Velocity, u (fps)
            </label>
            <input
              className='uk-input'
              placeholder='Velocity, u'
              type='number'
              step='any'
              name='u'
              id='velocity'
              onChange={(e) => setU(parseInt(e.target.value))}
            />
          </motion.div>

          <motion.div className={styles.inputs}>
            <label className={styles['input-label']} htmlFor='form-horizontal-text'>
              Characteristic length, L (ft)
            </label>
            <input
              className='uk-input'
              placeholder='Characteristic Length, L'
              type='number'
              step='any'
              name='L'
              id='length'
              onChange={(e) => setL(parseInt(e.target.value))}
            />
          </motion.div>

          <motion.div className={styles.inputs}>
            <label className={styles['input-label']} htmlFor='form-horizontal-text'>
              Dynamic viscosity, mu (lbs/sf)
            </label>
            <input
              className='uk-input'
              placeholder='Dynamic Viscosity, mu'
              type='number'
              step='any'
              name='mu'
              id='dynamic-viscosity'
              onChange={(e) => setMu(parseInt(e.target.value))}
            />
          </motion.div>

          <motion.button
            className='uk-button'
            type='submit'
            variants={submitVariant}
            whileHover='whileHover'
            animate='animate'
            whileTap='whileTap'
            initial='initial'
          >
            Calculate Reynolds Number
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  )
};

export default Fluids;
