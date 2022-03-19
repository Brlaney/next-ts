import * as React from 'react';
import { motion } from 'framer-motion';
import { chartVariant } from '@/lib/animations/charts';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Back from '@/components/Back';
import styles from '@/styles/pages/Charts.module.scss';

ChartJS.register(
  ArcElement,
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
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: true,
      text: 'Putnam County Tennessee',
      align: 'start',
    },
  },
};


export const data = {
  labels: ['White (non-hispanics)', 'White (hispanics)', 'African American/Black', 'Asian'],
  datasets: [
    {
      label: '# of Votes',
      data: [88.4, 4.87, 2.16, 1.25],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function Dashboard({ ...props }) {
  const endpoint = '/charts';
  
  return (
    <motion.div className={styles.container}>
      <Back link={endpoint} />
      <motion.div className={styles.grid}>

        <motion.div
          className={styles.chartjs}
          variants={chartVariant}
          animate='animate'
          initial='initial'
        >
          <Pie
            options={options}
            data={data}
            {...props}
          />
        </motion.div>

      </motion.div>
    </motion.div>
  );
}
