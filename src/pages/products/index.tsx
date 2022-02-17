import { motion } from 'framer-motion';
import styles from '@/styles/pages/Products.module.scss';


const Products = () => {
  return (
    <motion.div className={styles.container}>
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

export default Products;
