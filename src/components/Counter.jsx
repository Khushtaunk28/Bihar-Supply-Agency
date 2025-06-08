import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Counter = ({ end, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = end / (duration / 50);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(timer);
  }, [inView, end, duration]);

  const formatValue = () => {
    if (end >= 10000000) return `${(count / 10000000).toFixed(1)}Cr+`;
    if (end >= 1000) return `${(count / 1000).toFixed(1)}K+`;
    return `${count}+`;
  };

  return (
    <div ref={ref} className="text-center">
      <h2 className="text-4xl font-bold font-palanquin">{formatValue()}</h2>
      <p className="text-gray-500 font-montserrat text-base mt-2">{label}</p>
    </div>
  );
};

export default Counter;
