import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import TestChart from '@/components/TestChart';
import styles from '@/styles/pages/Charts.module.scss';
// import { cryptoData } from '@/lib/data/test';


const cryptoData = [{
  name: "Bitcoin",
  priceUsd: "36627.2710684081282635"
}, {
  name: "Ethereum",
  priceUsd: "2543.3426526834626211",
},
{
  name: "Tether",
  priceUsd: "1.0000029822112192",
},
{
  name: "BNB",
  priceUsd: "352.4310502823381116",
}, {
  name: "USD Coin",
  priceUsd: "1.0013281398550895",
}];


const Charts = () => {
  const [chartData, setChartData] = useState({} || null);
  // setChartData(null);

  useEffect(() => {
    setChartData({
      labels: cryptoData,
      datasets: [
        {
          label: 'Price in USD',
          data: cryptoData,
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
  }, [])

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
