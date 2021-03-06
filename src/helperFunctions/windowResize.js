import { useState, useEffect } from 'react';

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState(undefined);
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize(window.innerHeight);
    }
    // Add event listener
    window.addEventListener('orientationchange', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('orientationchange', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
