import * as React from 'react';
import { motion } from 'framer-motion';
import { btnVariant } from '@/lib/animations/buttons';
import { Re1, Re2 } from '@/lib/utils/reynolds';
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

  React.useEffect(() => {
    if (reynolds != undefined) {
      console.log('Current reynolds number: ' + reynolds);
      console.log('Flow type: ' + flow(reynolds));
    } else { }
  }, [reynolds]);

  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>
        <motion.form
          className={styles.form}
          onSubmit={(e) => handleSubmit(e)}
        >
          <motion.div className={styles.inputs}>
            <label className={styles['input-label']} htmlFor='form-horizontal-text'>
              Density (p)
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
              Velocity (u)
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
              Characteristic length (L)
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
              Dynamic viscosity (mu)
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
            variants={btnVariant}
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
