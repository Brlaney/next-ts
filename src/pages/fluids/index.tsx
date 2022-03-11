import * as React from 'react';
import { motion } from 'framer-motion';
// import images from '@/components/Images';
import { Re1, Re2 } from '@/lib/utils/reynolds';
import styles from '@/styles/pages/Fluids.module.scss';


const Fluids = () => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [currentRef, setCurrentRef] = React.useState(1 | 0);

  const updateRef = (theRef) => {
    if (theRef == 1) {
      setCurrentRef(0);
    } else if (theRef == 0) {
      setCurrentRef(1);
    } else {
      console.log('An issue has entered the chat.')
    }
  }


  // Test function 1: Re1(p, u, L, mu)
  const test1 = Re1(910, 2.6, 0.025, 0.38);
  console.log(test1[0]);
  console.log(test1[1]);

  // Test function 2: Re2(u, L, v)
  // const test2 = Re2()
  // console.log(test2)


  // console.log(inputRef) 

  React.useEffect(() => {
    console.log(inputRef);
    console.log(currentRef);
  }, [currentRef])

  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>

        <motion.div className={styles.moody}>

          <input
            className='uk-input'
            type='text'
            placeholder='density'
            name='p'
            ref={inputRef}
            onClick={() => {updateRef(currentRef)}}
          />
        </motion.div>

      </motion.div>
    </motion.div>
  )
};

export default Fluids;
