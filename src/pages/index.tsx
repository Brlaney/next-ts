import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '@/components/Modal';
import styles from '@/styles/pages/Home.module.scss';

export default function Home({ props }) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen == true) setModalOpen(false)
    else setModalOpen(true);
  }, [modalOpen])

  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>
        <motion.button
          // className='uk-button uk-button-primary'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles['save-button']}
          onClick={() => { setModalOpen(!modalOpen) }}
        >
          Launch Modal
        </motion.button>

        {/* Conditionally displays modal if state=True */}
        <AnimatePresence>
          {modalOpen && (
            <Modal
              modalOpen={modalOpen}
              handleClose={close}
              text='hello there'
              {...props}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
};
