'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What is the typical interior design process?',
    answer: 'Our design process typically includes an initial consultation, concept development, space planning, material selection, and project execution. We work closely with you at each step to ensure your vision is brought to life.',
  },
  {
    question: 'How long does a typical project take?',
    answer: "Project timelines vary depending on scope and complexity. A room redesign might take 4-6 weeks, while a complete home renovation could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: 'Do you work with specific budgets?',
    answer: "Yes, we work with various budgets and provide transparent pricing. During our consultation, we'll discuss your budget constraints and create a plan that maximizes value while achieving your design goals.",
  },
  {
    question: 'Can you work with existing furniture?',
    answer: "Absolutely! We can incorporate existing pieces you love into the new design. We'll help you determine what works best with the new design concept and suggest complementary pieces as needed.",
  },
  {
    question: 'Do you offer virtual design services?',
    answer: 'Yes, we offer virtual design consultations and services for clients who prefer remote collaboration. Our virtual services include 3D renderings, digital mood boards, and video consultations.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#F5F2EE]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Frequently Asked <span className="text-[#C9A66B]">Questions</span>
          </h2>
          <p className="text-gray-600">
            Find answers to common questions about our interior design services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-[#1A1A1A]">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-200 ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="mt-4 text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 