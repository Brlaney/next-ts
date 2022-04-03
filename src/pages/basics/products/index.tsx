import { motion } from 'framer-motion';
import Back from '@/components/Back';
import styles from '@/styles/pages/Home.module.scss';

export default function Products() {
  const endpoint = '/basics';

  return (
    <motion.div className={styles.container}>
      <Back link={endpoint} />
      <motion.div className={styles.grid}>

        {/* Column 1 */}
        <motion.div className={styles.vial}>
          Col 1
        </motion.div>

        {/* Column 2 */}
        <motion.div className={styles.vial}>
          Col 2
        </motion.div>

        {/* Column 3 */}
        <motion.div className={styles.vial}>
          Col 3
        </motion.div>
      </motion.div>
    </motion.div>
  )
};
