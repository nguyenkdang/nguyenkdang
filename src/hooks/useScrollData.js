import { useState, useEffect, useCallback } from 'react';

export const useScrollData = () => {
  const [yPosition, setYPosition] = useState(
    document.scrollingElement.scrollHeight
  );
  const [scrollDirection, setScrollDirection] = useState(0);

  const handleScroll = useCallback(() => {
    if (yPosition > window.scrollY) {
      setScrollDirection(1);
    } else if (yPosition < window.scrollY) {
      setScrollDirection(-1);
    }
    setYPosition(window.scrollY);
  }, [yPosition]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return { yPosition, scrollDirection };
};
