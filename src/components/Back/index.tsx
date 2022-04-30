import { motion } from 'framer-motion';
import { containerVariant, backBtnVariant } from '@/lib/animations/back-btn';
import BackArrow from '../Icons/BackArrow';
import Link from 'next/link';
import styles from '@/styles/components/Buttons.module.scss';

const Back = ({ link }) => {
  return (
    <motion.div
      variants={containerVariant}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      layout
    >
      <Link href={link}>
        <motion.button
          id={styles.goback}
          variants={backBtnVariant}
          initial='initial'
          animate='animate'
          whileHover='whileHover'
          whileTap='whileTap'
          className='uk-button uk-button-small uk-align-left'
        >
          <BackArrow />
        </motion.button>
      </Link>
    </motion.div>
  )
};

export default Back;
