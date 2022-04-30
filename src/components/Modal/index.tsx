import { motion } from 'framer-motion';
import Backdrop from '../Backdrop';
import styles from '@/styles/components/Modal.module.scss';

const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className={styles['modal orange-gradient']}
        onClick={(e) => e.stopPropagation()}
      >

      </motion.div>
    </Backdrop>
  )
};

export default Modal;
