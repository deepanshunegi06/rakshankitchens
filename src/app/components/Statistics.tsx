'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const StatItem = ({ number, text }: { number: number; text: string }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepTime = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        setCount(Math.floor((currentStep / steps) * number));
        
        if (currentStep === steps) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [inView, number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <p className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-2">
        {count}
        {number === 98 && '%'}
        {number === 6000 && '+'}
        {(number === 1000 || number === 750) && '+'}
      </p>
      <p className="text-gray-600">{text}</p>
    </motion.div>
  );
};

const Statistics = () => {
  const stats = [
    { number: 1000, text: 'Satisfied Clients Served' },
    { number: 750, text: 'Total Design Projects' },
    { number: 98, text: 'Client Satisfaction Rate' },
    { number: 6000, text: 'Hours Spent Designing' },
  ];

  return (
    <section className="bg-[#F5F2EE] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} number={stat.number} text={stat.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics; 