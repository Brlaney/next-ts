import * as React from 'react';
import { motion } from 'framer-motion';
import { chartVariant } from '@/lib/animations/charts';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Back from '@/components/Back';
import { labels, data } from '@/lib/data/us-data';
import styles from '@/styles/pages/Charts.module.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  // responsive: true,
  width: 600,
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
        delay = context.dataIndex * 15 + context.datasetIndex * 350;
      }
      return delay;
    },
  },
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: true,
      text: 'Mass Shootings in the United States',
    },
  },
};

let delayed;

const info = {
  labels,
  datasets: [
    {
      label: 'Victims',
      data: data,
      backgroundColor: 'rgba(244, 91, 105, 0.9)',
      borderColor: 'rgba(41, 50, 65, 0.9)',
      pointRadius: 4,
      borderWidth: 1.2,
      pointStyle: 'rectRot',
      tension: 0.3,
    }
  ],
};

export default function MassShootings({ ...props }) {
  const endpoint = '/charts';

  return (
    <motion.div className={styles.container}>
      <Back link={endpoint} />
      <motion.div className={styles.grid}>
        <motion.div className={styles.wide} variants={chartVariant} animate='animate' initial='initial' exit='exit'>
          <Bar options={options} data={info} {...props} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
