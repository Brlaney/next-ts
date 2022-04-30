import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '@/components/Modal';
import styles from '@/styles/pages/Home.module.scss';

const Home = ({ props }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles['save-button']}
          onClick={() => (modalOpen ? close() : open())}
        >
          Launch Modal
        </motion.button>

        {/* Conditionally displays modal if state=True */}
        <AnimatePresence>
          {modalOpen && (
            <Modal
              modalOpen={modalOpen}
              handleClose={close}
              {...props}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
};

export default Home;
