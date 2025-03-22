'use client';

import { motion } from 'framer-motion';

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

const benefits: Benefit[] = [
  {
    title: 'Aesthetic Enhancement',
    description: 'Create modern, timeless designs that perfectly blend style and functionality for your space.',
    icon: '✨',
  },
  {
    title: 'Time Efficiency',
    description: 'Save valuable time by letting our experts handle all aspects of your interior design project.',
    icon: '⏰',
  },
  {
    title: 'Value Increase',
    description: 'Boost your property value with professional interior design that stands out in the market.',
    icon: '📈',
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif text-center mb-16"
        >
          Why Choose <span className="text-[#C9A66B]">Our Services</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-lg bg-[#2A2A2A] hover:bg-[#353535] transition-colors duration-300"
            >
              <div className="text-4xl mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-medium mb-4 text-[#C9A66B]">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits; 