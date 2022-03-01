import * as React from 'react';
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion';
import styles from '@/styles/pages/Charts.module.scss';

const Plot = dynamic(
  () => import('react-plotly.js'), { ssr: false }
);

export default function Charts(props: any) {
  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>
        <div className={styles.chart}>
          <Plot
            data={[
              {
                type: 'bar',
                x: [
                  'Krisu',
                  'Nickel Creek',
                  'Sting',
                  'Tame Impala',
                  '2 Chainz'
                ],
                y: [19211, 144920, 2521268, 5375465, 6895126],
                marker: {
                  color: [
                    'rgba(144,103,198,0.7)',
                    'rgba(75,68,83,0.7)',
                    'rgba(176,168,185,0.7)',
                    'rgba(201,88,64,0.7)',
                    'rgba(141,34,19,0.7)'
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
              width: 375,
              height: 600,
              // title: 'A Fancy Plot'
            }}
            {...props}
          />
          <Plot
            data={[
              {
                type: 'bar',
                x: [
                  'Krisu',
                  'Nickel Creek',
                  'Sting',
                  'Tame Impala',
                  '2 Chainz'
                ],
                y: [43, 49, 75, 82, 82],
                marker: {
                  color: [
                    'rgba(144,103,198,0.7)',
                    'rgba(75,68,83,0.7)',
                    'rgba(176,168,185,0.7)',
                    'rgba(201,88,64,0.7)',
                    'rgba(141,34,19,0.7)'
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
              width: 375,
              height: 600,
              // title: 'A Fancy Plot'
            }}
            {...props}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
