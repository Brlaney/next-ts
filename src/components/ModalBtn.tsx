import { motion } from 'framer-motion';
import styles from '@/styles/components/Modal.module.scss';

const ModalBtn = ({}) => {
  return (
    <motion.div>
        <motion.button
          id={styles.goback}
          initial='initial'
          animate='animate'
          whileHover='whileHover'
          whileTap='whileTap'
          className='uk-button uk-button-small uk-align-left'
        >
        </motion.button>
    </motion.div>
  )
};

export default ModalBtn;
