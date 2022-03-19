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
      text: 'Disciplinary actions timeline',
    },
  },
};

let delayed;

const labels = [
  'January, 2010', 'February, 2010', 'March, 2010', 'April, 2010', 'May, 2010', 'June, 2010', 'July, 2010', 'August, 2010', 'September, 2010', 'October, 2010', 'November, 2010', 'December, 2010', 'January, 2011', 'February, 2011', 'March, 2011', 'April, 2011', 'May, 2011', 'June, 2011', 'July, 2011', 'August, 2011', 'September, 2011', 'October, 2011', 'November, 2011', 'December, 2011', 'January, 2012', 'February, 2012', 'March, 2012', 'April, 2012', 'May, 2012', 'June, 2012', 'July, 2012', 'August, 2012', 'September, 2012', 'October, 2012', 'November, 2012', 'December, 2012', 'January, 2013', 'February, 2013', 'March, 2013', 'April, 2013', 'May, 2013', 'June, 2013', 'July, 2013', 'August, 2013', 'September, 2013', 'October, 2013', 'November, 2013', 'December, 2013', 'January, 2014', 'February, 2014', 'March, 2014', 'April, 2014', 'May, 2014', 'June, 2014', 'July, 2014', 'August, 2014', 'September, 2014', 'October, 2014', 'November, 2014', 'December, 2014', 'January, 2015', 'February, 2015', 'March, 2015', 'April, 2015', 'May, 2015', 'June, 2015', 'July, 2015', 'August, 2015', 'September, 2015', 'October, 2015', 'November, 2015', 'December, 2015', 'January, 2016', 'February, 2016', 'March, 2016', 'April, 2016', 'May, 2016', 'June, 2016', 'July, 2016', 'August, 2016', 'September, 2016', 'October, 2016', 'November, 2016', 'December, 2016', 'January, 2017', 'February, 2017', 'March, 2017', 'April, 2017', 'May, 2017', 'June, 2017', 'July, 2017', 'August, 2017', 'September, 2017', 'October, 2017', 'November, 2017', 'December, 2017', 'January, 2018', 'February, 2018', 'March, 2018', 'April, 2018', 'May, 2018', 'June, 2018', 'July, 2018', 'August, 2018', 'September, 2018', 'October, 2018', 'November, 2018', 'December, 2018', 'January, 2019', 'February, 2019', 'March, 2019', 'April, 2019', 'May, 2019', 'June, 2019', 'July, 2019', 'August, 2019', 'September, 2019', 'October, 2019', 'November, 2019', 'December, 2019', 'January, 2020', 'February, 2020', 'March, 2020', 'April, 2020', 'May, 2020', 'June, 2020', 'July, 2020', 'August, 2020', 'September, 2020', 'October, 2020', 'November, 2020', 'December, 2020', 'January, 2021', 'February, 2021', 'March, 2021', 'April, 2021', 'May, 2021', 'June, 2021', 'July, 2021', 'August, 2021', 'September, 2021', 'October, 2021', 'November, 2021', 'December, 2021', 'January, 2022', 'February, 2022', 'March, 2022'
];

// See if you can add an array of colors for each datasets color by year
const data = {
  labels,
  datasets: [
    {
      type: 'line',
      label: 'Running average',
      data: [16.0, 11.0, 11.7, 14.3, 12.2, 11.8, 11.9, 11.1, 11.4, 11.3, 10.6, 9.8, 10.9, 11.1, 10.6, 11.5, 11.0, 10.5, 11.4, 10.6, 10.9, 12.1, 12.5, 11.6, 11.5, 10.5, 9.9, 10.5, 10.4, 10.0, 11.3, 11.1, 10.4, 10.5, 10.8, 9.8, 10.5, 10.2, 9.5, 9.6, 9.5, 8.6, 8.2, 8.4, 7.6, 7.5, 7.8, 8.4, 9.5, 10.5, 10.5, 10.3, 10.3, 10.6, 11.2, 11.5, 11.0, 12.0, 11.0, 10.2, 10.3, 10.8, 10.7, 11.0, 11.0, 10.4, 10.8, 12.1, 11.7, 12.2, 12.2, 12.6, 12.9, 13.6, 13.0, 13.5, 12.7, 12.5, 13.0, 12.9, 12.4, 13.1, 12.0, 11.2, 11.2, 11.3, 11.1, 12.4, 12.0, 11.0, 11.8, 12.4, 11.4, 12.2, 12.2, 12.0, 13.0, 12.5, 12.1, 12.9, 13.0, 12.2, 12.9, 13.5, 12.9, 14.0, 13.1, 11.8, 12.5, 12.3, 11.7, 11.5, 11.5, 10.4, 11.3, 10.9, 9.8, 11.5, 11.5, 10.5, 11.3, 11.2, 11.2, 11.5, 11.5, 10.3, 10.5, 10.5, 9.3, 10.5, 10.7, 9.7, 10.3, 9.6, 8.7, 9.2, 8.7, 8.5, 8.9, 8.5, 7.5, 7.7, 7.7, 6.7, 7.6, 7.6, 6.7],
      backgroundColor: 'rgba(244, 91, 105, 0.9)',
      borderColor: 'rgba(41, 50, 65, 0.9)',
      pointRadius: 4,
      borderWidth: 1.2,
      pointStyle: 'rectRot',
      tension: 0.3,
    },
    {
      label: 'No. actions published by BPR',
      data: [3, 6, 15, 4, 6, 8, 8, 2, 13, 6, 3, 13, 6, 5, 15, 6, 6, 18, 7, 8, 9, 8, 8, 16, 12, 9, 17, 4, 4, 21, 8, 6, 21, 9, 12, 12, 10, 8, 16, 4, 2, 20, 10, 11, 21, 12, 15, 16, 11, 8, 18, 12, 8, 17, 4, 13, 21, 14, 7, 15, 14, 7, 14, 8, 8, 15, 7, 12, 25, 11, 1, 16, 6, 14, 17, 20, 7, 13, 13, 19, 14, 10, 10, 13, 6, 14, 15, 7, 8, 17, 5, 9, 17, 10, 10, 7, 8, 14, 16, 19, 6, 10, 6, 11, 6, 10, 10, 7, 4, 3, 13, 3, 11, 14, 9, 11, 20, 11, 6, 11, 7, 5, 14, 8, 12, 17, 13, 6, 15, 7, 5, 13, 17, 15, 18, 7, 4, 10, 14, 6, 12, 10, 4, 22, 13, 6, 16],
      fill: true,
      backgroundColor: 'rgba(53, 86, 145, 0.75)',
      borderColor: 'rgba(228, 253, 225, 0.9)',
      borderWidth: 0.1,
    },
  ],
};

export default function Bpr({ ...props }) {
  const endpoint = '/charts';
  
  return (
    <motion.div className={styles.container}>
      <Back link={endpoint} />
      <motion.div className={styles.grid}>

        <motion.div
          className={styles.wide}
          variants={chartVariant}
          animate='animate'
          initial='initial'
        >
          <Bar
            options={options}
            data={data}
            {...props}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
