import * as React from 'react';
import dynamic from 'next/dynamic'
import { AnimationProps } from 'framer-motion';
import { motion } from 'framer-motion';
import styles from '@/styles/pages/Charts.module.scss';

const Plot = dynamic(
  () => import('react-plotly.js'), { ssr: false }
);

export const chartsVariants: AnimationProps = {
  transition: { delay: 0, duration: 2, ease: 'easeIn' },
  variants: {
    visible: {
      fillOpacity: 1,
      pathLength: 1,
      transition: { delay: 0, duration: 4 },
    },
    hidden: { fillOpacity: 0, pathLength: 0 },
  },
};


export default function PlotlyJs(props: any) {
  return (
    <motion.div className={styles.container} layout>
      <motion.div className={styles.grid}>

        {/* Column 1 */}
        <motion.div
          className={styles.plotlyjs}
          {...chartsVariants}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
          }}
          initial={{ y: 60, opacity: 0 }}
        >
          <Plot
            data={[
              {
                type: 'bar',
                x: ['Krisu', 'Nickel Creek', 'Sting', 'Tame Impala', '2 Chainz'],
                y: [19211, 144920, 2521268, 5375465, 6895126],
                marker: {
                  color: [
                    'rgba(144,103,198,0.5)',
                    'rgba(75,68,83,0.5)',
                    'rgba(176,168,185,0.5)',
                    'rgba(201,88,64,0.5)',
                    'rgba(141,34,19,0.5)'
                  ],
                  line: {
                    color: [
                      'rgba(144,103,198,1)',
                      'rgba(75,68,83,1)',
                      'rgba(176,168,185,1)',
                      'rgba(201,88,64,1)',
                      'rgba(141,34,19,1)'
                    ],
                    width: 2,
                  }
                },
              },
            ]}
            layout={{
              width: 350,
              autoSize: true,
              title: 'Followers on Spotify',
            }}
            {...props}
          />
        </motion.div>

        {/* Column 2 */}
        <motion.div
          className={styles.plotlyjs}
          {...chartsVariants}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
          }}
          initial={{ y: 60, opacity: 0 }}
        >
          <Plot
            data={[
              {
                type: 'bar',
                x: ['Krisu', 'Nickel Creek', 'Sting', 'Tame Impala', '2 Chainz'],
                y: [43, 49, 75, 82, 82],
                marker: {
                  color: [
                    'rgba(144,103,198,0.5)',
                    'rgba(75,68,83,0.5)',
                    'rgba(176,168,185,0.5)',
                    'rgba(201,88,64,0.5)',
                    'rgba(141,34,19,0.5)'
                  ],
                  line: {
                    color: [
                      'rgba(144,103,198,1)',
                      'rgba(75,68,83,1)',
                      'rgba(176,168,185,1)',
                      'rgba(201,88,64,1)',
                      'rgba(141,34,19,1)'
                    ],
                    width: 2,
                  }
                },
              },
            ]}
            layout={{
              width: 350,
              autoSize: true,
              title: 'Popularity on Spotify',
            }}
            {...props}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
