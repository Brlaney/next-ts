import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { variant1, variant2, variant3, variant4, variant5, stgVariant } from '@/lib/animations/fluids';
import svgs from '@/components/Svgs';
import styles from '@/styles/pages/Fluids.module.scss';
import {
  calculateReynoldsNumberWithDensity,
  calculateReynoldsNumberWithKinematicViscosity
} from '@/lib/utils/reynolds';

const Fluids = () => {
  const [eqnState, setEqnState] = useState(0);
  const [reynolds, setReynolds] = useState(0);
  const [p, setP] = useState(0);   // Density (p)
  const [u, setU] = useState(0);   // Velocity (u)
  const [L, setL] = useState(0);   // Char. length (L)
  const [mu, setMu] = useState(0); // Dynamic viscosity (mu)
  const [k, setK] = useState(0);   // Kinematic viscosity (k)

  const flow = (Re) => {
    if (Re > 4000) return 'Turbulent flow';
    if (Re < 4000 && Re > 2300) return 'Transient flow';
    if (Re < 2300) return 'Laminar flow';
    console.error("An error occurred, flow type was not determined");
    return null;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let re;
    if (eqnState === 0) re = calculateReynoldsNumberWithDensity(p, u, L, mu);
    else if (eqnState === 1) re = calculateReynoldsNumberWithKinematicViscosity(u, L, k);
    else console.error("An error occurred.");
    setReynolds(re);
  };

  const handleChange = (buttonId) => {
    if (buttonId === eqnState) return;
    setEqnState(buttonId);
  };

  useEffect(() => {
    if (reynolds !== 0) {
      console.log('Reynolds number:', reynolds);
      console.log('Flow type:', flow(reynolds));
    }
  }, [reynolds, eqnState]);

  return (
    <motion.div className={styles.container} layout>
      <motion.div className={styles.grid}>

        {/* Conditionally display the answer */}
        {reynolds !== 0 && (
          <motion.div className={styles.answerDisplay}>
            <motion.div className={styles.answer} >
              {reynolds}
            </motion.div>
          </motion.div>)}

        <motion.div
          className={styles.equations}
          variants={variant1}
          animate='animate'
          initial='initial'
        >
          {eqnState === 0 && (
            <motion.div className={styles.eqnts}>
              <Image
                id='eqn1-image'
                width={700}
                height={134}
                src={svgs[0]}
                alt='Equation1'
              />
            </motion.div>)}
          {eqnState === 1 && (
            <motion.div className={styles.eqnts}>
              <Image
                id='eqn2-image'
                width={700}
                height={134}
                src={svgs[1]}
                alt='Equation2'
              />
            </motion.div>)}

          <motion.div className={styles['button-row']}>
            <motion.button
              id='eqn1'
              className={`${styles.btnActive} ${eqnState === 0 ? '' : styles.btnNot}`}
              onClick={() => handleChange(0)}
              variants={variant2}
              whileHover='whileHover'
              animate='animate'
              whileTap='whileTap'
              initial='initial'
            > Equation 1
            </motion.button>
            <motion.button
              id='eqn2'
              className={`${styles.btnActive} ${eqnState === 1 ? '' : styles.btnNot}`}
              onClick={() => handleChange(1)}
              variants={variant2}
              whileHover='whileHover'
              animate='animate'
              whileTap='whileTap'
              initial='initial'
            > Equation 2
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.form
          id='calculate-reynolds-number-form'
          className={styles.form}
          onSubmit={(e) => handleSubmit(e)}
          variants={variant3}
          animate='animate'
          initial='initial'
        >
          <motion.div
            className={styles['input-container']}
            variants={stgVariant}
            layout
          >

            <AnimatePresence>
              <motion.div
                className={styles.inputs}
                variants={variant4}
                initial='initial'
                animate='animate'
                exit='exit'
              >
                <motion.label
                  className={styles['input-label']}
                  htmlFor='form-horizontal-text'
                >
                  Velocity, u (fps)
                </motion.label>
                <motion.input
                  id='velocity'
                  className='uk-input'
                  placeholder='Velocity, u'
                  type='number'
                  step='any'
                  name='u'
                  onChange={(e) => setU(Number(e.target.value))}
                />
              </motion.div>
            </AnimatePresence>

            {/* Characteristic length input */}
            <AnimatePresence>
              <motion.div
                className={styles.inputs}
                variants={variant4}
                initial='initial'
                animate='animate'
                exit='exit'
                layout
              >
                <motion.label
                  className={styles['input-label']}
                  htmlFor='form-horizontal-text'
                >
                  Characteristic length, L (ft)
                </motion.label>
                <motion.input
                  id='length'
                  className='uk-input'
                  placeholder='Characteristic Length, L'
                  type='number'
                  step='any'
                  name='L'
                  onChange={(e) => setL(Number(e.target.value))}
                />
              </motion.div>
            </AnimatePresence>

            {/* Density input */}
            <AnimatePresence>
              {eqnState === 0 && (
                <motion.div
                  className={styles.inputs}
                  variants={variant4}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  layout
                >
                  <motion.label
                    className={styles['input-label']}
                    htmlFor='form-horizontal-text'
                  >
                    Density, p (pcf)
                  </motion.label>
                  <motion.input
                    id='density'
                    className='uk-input'
                    placeholder='Density, p'
                    type='number'
                    step='any'
                    name='p'
                    onChange={(e) => setP(Number(e.target.value))}
                  />
                </motion.div>)}
            </AnimatePresence>

            {/* Dynamic viscosity input */}
            <AnimatePresence>
              {eqnState === 0 && (
                <motion.div
                  className={styles.inputs}
                  variants={variant4}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  layout
                >
                  <motion.label
                    className={styles['input-label']}
                    htmlFor='form-horizontal-text'
                  >
                    Dynamic viscosity, mu (lbs/sf)
                  </motion.label>
                  <motion.input
                    id='dynamic-viscosity'
                    className='uk-input'
                    placeholder='Dynamic Viscosity, mu'
                    type='number'
                    step='any'
                    name='mu'
                    onChange={(e) => setMu(Number(e.target.value))}
                  />
                </motion.div>)}
            </AnimatePresence>

            {/* Kinematic viscosity input */}
            <AnimatePresence>
              {eqnState === 1 && (
                <motion.div
                  className={styles['inputs-v']}
                  variants={variant4}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  layout
                >
                  <motion.label
                    className={styles['input-label']}
                    htmlFor='form-horizontal-text'
                  >
                    Kinematic viscosity, v (lbs/sf)
                  </motion.label>
                  <motion.input
                    id='kinematic-viscosity'
                    className='uk-input'
                    placeholder='Kinematic Viscosity, v'
                    type='number'
                    step='any'
                    name='k'
                    onChange={(e) => setK(Number(e.target.value))}
                  />
                </motion.div>)}
            </AnimatePresence>

            <motion.div className={styles['form-button']}>
              <motion.button
                className='uk-button'
                type='submit'
                variants={variant5}
                whileHover='whileHover'
                animate='animate'
                whileTap='whileTap'
                initial='initial'
              >
                Calculate Reynolds Number
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.div>
  )
};

export default Fluids;