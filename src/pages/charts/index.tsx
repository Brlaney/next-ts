import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { TestChart } from '@/components/TestChart';
import styles from '@/styles/pages/Charts.module.scss';
import { cryptoData } from '@/lib/data/test';


const Charts = () => {
  const [chartData, setChartData] = useState({});

  setChartData({
    labels: cryptoData.map((crypto) => crypto.name),
    datasets: [
      {
        label: 'Price in USD',
        data: cryptoData.map((crypto) => crypto.priceUsd),
        backgroundColor: [
          '#ffbb11',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0'
        ]
      }
    ]
  });

  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>

        {/* Chart container */}
        <div className={styles.chart}>
          <TestChart chartData={chartData} />
        </div>

      </motion.div>
    </motion.div>
  )
};

export default Charts;
