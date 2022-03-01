import * as React from 'react';
import { motion } from 'framer-motion';
import Plot from 'react-plotly.js';
import styles from '@/styles/pages/Charts.module.scss';


const Charts = () => {
  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>
        <div className={styles.chart}>

          <Plot
            data={[
              {
                x: [1, 2, 3],
                y: [2, 6, 3],
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: 'red' },
              },
              {
                type: 'bar',
                x: [1, 2, 3],
                y: [2, 5, 3]
              },
            ]}
            layout={{
              width: 600,
              height: 500,
              title: 'A Fancy Plot'
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Charts;
