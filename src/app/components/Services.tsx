'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface Service {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const services: Service[] = [
  {
    title: "Custom Kitchen Design",
    description: "Personalized kitchen layouts that perfectly match your style and needs, optimizing both functionality and aesthetics.",
    icon: "🎨",
    link: "/contact?service=custom-design"
  },
  {
    title: "Kitchen Renovation",
    description: "Complete kitchen makeovers that transform your existing space into a modern, efficient cooking environment.",
    icon: "🏗️",
    link: "/contact?service=renovation"
  },
  {
    title: "Modular Solutions",
    description: "Smart modular kitchen solutions that maximize storage and optimize workspace efficiency.",
    icon: "📐",
    link: "/contact?service=modular"
  },
  {
    title: "Material Selection",
    description: "Expert guidance in choosing the perfect materials for your countertops, cabinets, and fixtures.",
    icon: "✨",
    link: "/contact?service=materials"
  }
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif mb-4">Our Services</h2>
          <p className="text-gray-600">
            Discover our comprehensive range of kitchen design and renovation services tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link href={service.link} key={service.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#C9A66B]/0 via-[#C9A66B]/5 to-[#C9A66B]/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-serif mb-2 text-[#1A1A1A] group-hover:text-[#C9A66B] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center text-[#C9A66B] text-sm font-medium">
                    <span>Learn More</span>
                    <svg 
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 