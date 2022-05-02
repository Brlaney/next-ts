import { useState, useEffect } from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({width: 0, height: 0});

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {

      function handleResize() {
        setWindowSize({
          width: Number(window.innerWidth),
          height: Number(window.innerHeight),
        });
      }

      // Add event listener
      window.addEventListener('resize', handleResize);
      handleResize();  // Immediately update state w/ initial window size

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  
  return windowSize;
};