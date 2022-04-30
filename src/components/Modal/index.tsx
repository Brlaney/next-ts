import { motion } from 'framer-motion';
import Backdrop from '../Backdrop';
import styles from '@/styles/components/Modal.module.scss';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className={styles['modal orange-gradient']}
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial='hidden'
        animate='animate'
        exit='exit'
      >
        <p>{text}</p>
        <button onClick={handleClose}>Close</button>
      </motion.div>
    </Backdrop>
  )
};

export default Modal;
