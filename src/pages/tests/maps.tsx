import * as React from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/pages/Moody.module.scss';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

mapboxgl.accessToken = 'pk.eyJ1IjoiYnJlbi13ZWJkZXYiLCJhIjoiY2tnOXp2aWp4MDJiNDMwbWlzODVodGkydCJ9.zaEjjaijnr9G22VryxW_Gg';

const Maps = ({ ...props }) => {

  const map = () => {
    new mapboxgl.Map({
      container: '#mapcontainer',
      style: 'mapbox://styles/mapbox/streets-v11'
    });
  } 


  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>

        <motion.div className={styles.moody}>
          <map id='mapcontainer' {...props} />
        </motion.div>
      </motion.div>
    </motion.div>
  )
};

export default Maps;
