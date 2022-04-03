import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { formVariant, submitVariant } from '@/lib/animations/forms';
import { Re1, Re2 } from '@/lib/utils/reynolds';
import styles from '@/styles/pages/Fluids.module.scss';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex'

const Fluids = () => {
  const [eqnState, setEqnState] = useState(0);
  const [reynolds, setReynolds] = useState<number>();
  const [p, setP] = useState<number>();
  const [u, setU] = useState<number>();
  const [L, setL] = useState<number>();
  const [mu, setMu] = useState<number>();
  const [k, setK] = useState<number>();

  const eqn1 = `Re(\\rho, \\ u, \\ L, \\ \\mu) = \\frac{\\rho \\ u \\ L}{\\mu}`;
  const eqn2 = `Re(u, \\ L, \\ v) = \\frac{u \\ L}{v}`;

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
      let re = await Re1(p, u, L, mu);
      return setReynolds(re);
    } else {
      let re = await Re2(u, L, k);
      return setReynolds(re);
    }

  };

  useEffect(() => {
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
          variants={formVariant}
          animate='animate'
          initial='hidden'
        >

          {eqnState == 0 && (
            <div className={styles.eqnts}>
              <TeX math={eqn1} />
            </div>
          )}

          {eqnState == 1 && (
            <div className={styles.eqnts}>
              <TeX math={eqn2} />
            </div>
          )}

          <div className={styles['button-row']}>
            <button
              id='eqn1'
              className={eqnState == 0
                ? `${styles.btnActive}`
                : `${styles.btnNot}`}
              onClick={() => setEqnState(0)}
            > Equation 1
            </button>

            <button
              id='eqn2'
              className={eqnState == 1
                ? `${styles.btnActive}`
                : `${styles.btnNot}`}
              name='eqn2'
              onClick={() => setEqnState(1)}
            > Equation 2
            </button>
          </div>

        </motion.div>

        {/* Form - Calculate Reynolds Number, Re */}
        <motion.form
          className={styles.form}
          onSubmit={(e) => handleSubmit(e)}
          variants={formVariant}
          animate='animate'
          initial='initial'
        >


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

          <motion.div className={styles['form-button']}>
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
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.div>
  )
};

export default Fluids;
