import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styles from '@/styles/pages/Charts.module.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  radius: 3,
  hoverRadius: 10,
  hitRadius: 30,
  animation: {
    onComplete: () => {
      delayed = true;
    },
    delay: (context) => {
      let delay = 0;
      if (context.type === 'data' && context.mode === 'default' && !delayed) {
        delay = context.dataIndex * 420 + context.datasetIndex * 350;
      }
      return delay;
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

let delayed;

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [100, 200, 140, 320, 110, 340, 400, 200, 50, 435, 600, 300],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [300, 100, 540, 480, 10, 170, 315, 105, 250, 705, 350, 200],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function Moody() {
  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>

        <motion.div
          className={styles.wide}
          animate={{
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
              duration: 2.2,
              ease: [0.88, -0.01, -0.05, 0.95]
            }
          }}
          initial={{ y: 0, x: 300, opacity: 0 }}
        >
          <Line options={options} data={data} />
        </motion.div>

      </motion.div>
    </motion.div>
  );
}
