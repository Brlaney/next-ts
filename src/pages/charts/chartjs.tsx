import * as React from 'react';
import { motion } from 'framer-motion';
import { chartVariant } from '@/lib/animations/charts';
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
import Back from '@/components/Back';
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
        delay = context.dataIndex * 40 + context.datasetIndex * 20;
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
      text: 'US Tornado Data',
    },
  },
};

let delayed;

const labels = [
  '1951', '1952', '1953', '1954', '1955', '1956', '1957', '1958', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'
];

export const data = {
  labels,
  datasets: [
    {
      label: 'Deaths',
      data: [69, 34, 231, 519, 36, 129, 96, 180, 70, 55, 46, 53, 30, 40, 63, 301, 105, 107, 163, 34, 74, 163, 30, 90, 376, 48, 44, 45, 51, 84, 28, 25, 65, 32, 122, 94, 15, 64, 27, 50, 54, 38, 39, 109, 50, 33, 27, 66, 148, 76, 41, 37, 55, 54, 39, 35, 68, 86, 119, 21, 45, 555, 69, 54, 47, 38, 36, 15, 10, 49, 70, 100
      ],
      fill: true,
      backgroundColor: 'rgba(86, 51, 140, 0.5)',
      borderColor: 'rgba(86, 51, 140, 0.8)',
      pointBackgroundColor: 'rgba(86, 51, 140, 0.5)',
      tension: 0.3,
    },
    {
      label: 'Occurrences',
      data: [196, 270, 242, 410, 551, 590, 518, 852, 569, 595, 608, 709, 659, 461, 713, 880, 624, 892, 659, 613, 662, 904, 740, 1094, 980, 878, 830, 872, 782, 848, 863, 798, 1044, 918, 913, 685, 771, 669, 698, 855, 1158, 1119, 1304, 1170, 1108, 1235, 1187, 1146, 1595, 1144, 1062, 1210, 931, 1387, 1843, 1277, 1080, 1163, 1614, 1170, 1268, 1754, 934, 835, 910, 1166, 1096, 1307, 1133, 1581, 1005, 1408],
      fill: true,
      backgroundColor: 'rgba(191, 77, 99, 0.5)',
      borderColor: 'rgba(191, 77, 99, 0.8)',
      pointBackgroundColor: 'rgba(191, 77, 99, 0.5)',
      tension: 0.3,
    },
  ],
};

export default function ChartJs() {
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
          <Line
            options={options}
            data={data}
          />
        </motion.div>

      </motion.div>
    </motion.div>
  );
}
