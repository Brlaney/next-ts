import { motion } from 'framer-motion';
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

const Modal = (onClick: () => void, handleClose: () => void, text: string) => {
  return (
    <motion.div
      className={styles.backdrop}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
    >
      <motion.div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial='hidden'
        animate='animate'
        exit='exit'
      >
        <p>{text}</p>
        <button className='uk-button uk-button-primary' onClick={handleClose}>
          Close
        </button>
      </motion.div>
    </motion.div>
  )
};

export default Modal;
