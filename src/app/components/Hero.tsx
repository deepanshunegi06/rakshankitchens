'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  const images = [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d',
    'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4'
  ];

  return (
    <section className="relative min-h-screen bg-[#1A1A1A] pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10" />
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Transform Your Kitchen with <span className="italic text-[#C9A66B]">Luxury</span> Design
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Experience the perfect blend of elegance and functionality with our premium kitchen designs
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#C9A66B] text-white rounded-md hover:bg-[#B08B57] transition-all duration-300"
            >
              Explore Our Collection
            </motion.button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative h-64 md:h-80 overflow-hidden rounded-lg group"
            >
              <Image
                src={image}
                alt={`Luxury Kitchen Design ${index + 1}`}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
                priority={index < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-lg font-medium">
                  {index === 0 && "Modern Design"}
                  {index === 1 && "Premium Finishes"}
                  {index === 2 && "Smart Storage"}
                  {index === 3 && "Elegant Details"}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero; 