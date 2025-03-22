'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  title: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Modern Living Room',
    category: 'Residential',
    image: '/images/portfolio1.jpg',
  },
  {
    title: 'Luxury Kitchen',
    category: 'Kitchen Design',
    image: '/images/portfolio2.jpg',
  },
  {
    title: 'Minimalist Bedroom',
    category: 'Bedroom Design',
    image: '/images/portfolio3.jpg',
  },
  {
    title: 'Contemporary Office',
    category: 'Commercial',
    image: '/images/portfolio4.jpg',
  },
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Our Latest <span className="text-[#C9A66B]">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of thoughtfully designed spaces that showcase our commitment to excellence and attention to detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative h-80">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-sm text-[#C9A66B]">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-[#1A1A1A] text-white rounded hover:bg-[#2A2A2A] transition-colors duration-300">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 