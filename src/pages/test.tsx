import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '@/components/Modal';
import styles from '@/styles/pages/Test.module.scss';

  interface Props {
    onClick: () => void;
    handleClose: () => void;
    text: string;
}
  
const Test: React.FC<Props> = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>
        <motion.button
          className={styles['save-button']}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={open}
        >
          Launch Modal
        </motion.button>

        {/* Conditionally displays modal if state=True */}
        <AnimatePresence>
          {modalOpen && (
            <Modal
              onClick={() => { open }}
              handleClose={() => { close }}
              text='hello there'
            />
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
};

export default Test;
