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
  const [eqnState, setEqnState] = React.useState(0);
  const [reynolds, setReynolds] = React.useState<number>();
  const [p, setP] = React.useState<number>();
  const [u, setU] = React.useState<number>();
  const [L, setL] = React.useState<number>();
  const [mu, setMu] = React.useState<number>();
  const [k, setK] = React.useState<number>();

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

    if (eqnState == 0) {
      const re = await Re1(p, u, L, mu);
      setReynolds(re);
    } else {
      const re = await Re2(u, L, k);
      setReynolds(re);
    }

  };


  // Runs everytime reynolds state value changes
  React.useEffect(() => {

    // If a value is in reynolds state then console.log
    if (reynolds != undefined) {
      console.log('Current reynolds number: ' + reynolds);
      console.log('Flow type: ' + flow(reynolds));
    } else { }
  }, [reynolds]);

  return (
    <motion.div className={styles.container} layout>
      <motion.div className={styles.grid}>

        {/* Equation display */}
        <motion.div
          className={styles.equations}
          variants={eqnVariant}
          animate='animate'
          initial='initial'
        >

          {/* If eqnState == 0 (default) */}
          {eqnState == 0 && (
            <>
              <Image
                className={styles.eqn}
                width={225}
                height={75}
                src={eqtns[0]}
              />
              Equation 1.
            </>
          )}

          {/* If eqnState == 1 */}
          {eqnState == 1 && (
            <>
              <Image
                className={styles.eqn}
                width={225}
                height={75}
                src={eqtns[1]}
              />
              Equation 2.
            </>
          )}
        </motion.div>

        {/* Form - Calculate Reynolds Number, Re */}
        <motion.form
          className={styles.form}
          onSubmit={(e) => handleSubmit(e)}
          variants={formVariant}
          animate='animate'
          initial='initial'
        >

          {/* Equation 1 or 2 radio dial */}
          <motion.div className={styles.inputs}>
            <label
              className={styles['radio-label']}
              htmlFor='form-horizontal-text'
            >
              Calculate with equation 1 or 2
            </label>
            <label>
              <input
                id={eqnState == 0
                  ? `${styles.checked}`
                  : `${styles.radio}`}
                className='uk-radio'
                type='radio'
                name='eqn1'
                onClick={() => setEqnState(0)}
              /> Eqn. 1
            </label>
            <label>
              <input
                id={eqnState == 1
                  ? `${styles.checked}`
                  : `${styles.radio}`}
                className='uk-radio'
                type='radio'
                name='eqn2'
                onClick={() => setEqnState(1)}
              /> Eqn. 2
            </label>
          </motion.div>

          {/* Density input */}
          {eqnState == 0 && (
            <motion.div className={styles.inputs}>
              <label
                className={styles['input-label']}
                htmlFor='form-horizontal-text'
              >
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
          )}

          {/* Velocity input */}
          <motion.div className={styles.inputs}>
            <label
              className={styles['input-label']}
              htmlFor='form-horizontal-text'
            >
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

          {/* Characteristic length input */}
          <motion.div className={styles.inputs}>
            <label
              className={styles['input-label']}
              htmlFor='form-horizontal-text'
            >
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

          {/* Dynamic viscosity input */}
          {eqnState == 0 && (
            <motion.div className={styles.inputs}>
              <label
                className={styles['input-label']}
                htmlFor='form-horizontal-text'
              >
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
          )}

          {/* Kinematic viscosity input */}
          {eqnState == 1 && (
            <motion.div className={styles.inputs}>
              <label
                className={styles['input-label']}
                htmlFor='form-horizontal-text'
              >
                Dynamic viscosity, mu (lbs/sf)
              </label>
              <input
                className='uk-input'
                placeholder='Kinematic Viscosity, k'
                type='number'
                step='any'
                name='k'
                id='kinematic-viscosity'
                onChange={(e) => setK(parseInt(e.target.value))}
              />
            </motion.div>
          )}

          {/* Submit button */}
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
