import { useState, useEffect, useCallback, useRef } from 'react';

export default function useSlider(totalSlides, interval = 5000) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const goTo = useCallback((n) => {
    setCurrent(((n % totalSlides) + totalSlides) % totalSlides);
  }, [totalSlides]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  const resetInterval = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % totalSlides);
    }, interval);
  }, [totalSlides, interval]);

  useEffect(() => {
    resetInterval();
    return () => clearInterval(timerRef.current);
  }, [resetInterval]);

  const handleNext = useCallback(() => { next(); resetInterval(); }, [next, resetInterval]);
  const handlePrev = useCallback(() => { prev(); resetInterval(); }, [prev, resetInterval]);
  const handleGoTo = useCallback((n) => { goTo(n); resetInterval(); }, [goTo, resetInterval]);

  return { current, handleNext, handlePrev, handleGoTo };
}
