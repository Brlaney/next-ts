import { useState, useEffect } from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({width: 0, height: 0});

  useEffect(() => {
    if (typeof window !== 'undefined') {

      function handleResize() {
        setWindowSize({
          width: Number(window.innerWidth),
          height: Number(window.innerHeight),
        });
      }

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  
  return windowSize;
};
