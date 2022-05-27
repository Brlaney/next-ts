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
  width: 800,
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

const labels = ['1982', '1984', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'
];

const data = {
  labels,
  datasets: [
    {
      label: 'Occurences by Year',
      data: [1, 2, 1, 1, 1, 2, 1, 3, 2, 4, 1, 1, 1, 2, 3, 5, 1, 1, 1, 1, 2, 3, 4, 3, 4, 1, 3, 7, 5, 4, 7, 6, 11, 12, 10, 2, 6, 3
      ],
      backgroundColor: 'rgba(244, 91, 105, 0.9)',
      borderColor: 'rgba(41, 50, 65, 0.9)',
      pointRadius: 4,
      borderWidth: 1.2,
      pointStyle: 'rectRot',
      tension: 0.3,
    },
    {
      label: 'Victims by Year',
      data: [11, 48, 21, 20, 11, 56, 14, 61, 19, 57, 28, 6, 7, 14, 50, 89, 7, 9, 15, 12, 26, 28, 85, 41, 78, 11, 40, 151, 48, 46, 89, 154, 704, 150, 185, 9, 59, 38,
      ],
      backgroundColor: 'rgba(244, 91, 105, 0.9)',
      borderColor: 'rgba(41, 50, 65, 0.9)',
      pointRadius: 4,
      borderWidth: 1.2,
      pointStyle: 'rectRot',
      tension: 0.3,
    }
  ],
};

export default function Victims({ ...props }) {
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
          exit='exit'
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
