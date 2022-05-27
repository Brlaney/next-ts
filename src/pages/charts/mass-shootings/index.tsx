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
      text: 'Disciplinary actions timeline',
    },
  },
};

let delayed;

const labels = ['2022', '2022', '2022', '2021', '2021', '2021', '2021', '2021', '2021', '2020', '2020', '2019', '2019', '2019', '2019', '2019', '2019', '2019', '2019', '2019', '2019', '2018', '2018', '2018', '2018', '2018', '2018', '2018', '2018', '2018', '2018', '2018', '2018', '2017', '2017', '2017', '2017', '2017', '2017', '2017', '2017', '2017', '2017', '2017', '2016', '2016', '2016', '2016', '2016', '2016', '2015', '2015', '2015', '2015', '2015', '2015', '2015', '2014', '2014', '2014', '2014', '2013', '2013', '2013', '2013', '2013', '2012', '2012', '2012', '2012', '2012', '2012', '2012', '2011', '2011', '2011', '2010', '2009', '2009', '2009', '2009', '2008', '2008', '2008', '2007', '2007', '2007', '2007', '2006', '2006', '2006', '2005', '2005', '2004', '2003', '2001', '2000', '1999', '1999', '1999', '1999', '1999', '1998', '1998', '1998', '1997', '1997', '1996', '1995', '1994', '1993', '1993', '1993', '1993', '1992', '1992', '1991', '1991', '1991', '1990', '1989', '1989', '1988', '1987', '1986', '1984', '1984', '1982',
];

const data = {
  labels,
  datasets: [
    {
      label: 'Victims',
      data: [21, 13, 4, 11, 9, 15, 5, 10, 9, 4, 5, 7, 11, 32, 36, 48, 15, 16, 11, 4, 5, 3, 34, 17, 6, 5, 5, 7, 23, 8, 3, 34, 5, 15, 46, 3, 6, 604, 5, 3, 5, 3, 3, 11, 5, 6, 16, 102, 17, 8, 35, 12, 3, 18, 7, 10, 4, 6, 19, 15, 6, 20, 7, 9, 5, 7, 29, 8, 10, 82, 7, 10, 5, 9, 12, 19, 11, 5, 44, 18, 11, 7, 26, 8, 13, 7, 55, 10, 11, 9, 8, 15, 11, 12, 15, 9, 7, 8, 7, 15, 22, 37, 29, 15, 6, 7, 7, 7, 6, 28, 5, 25, 12, 15, 5, 14, 10, 7, 44, 14, 21, 35, 11, 20, 21, 41, 7, 11,
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

export default function MassShootings({ ...props }) {
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
