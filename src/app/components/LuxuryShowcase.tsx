'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const luxuryKitchens = [
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    alt: 'Modern Luxury Kitchen',
    description: 'Contemporary design with premium finishes'
  },
  {
    src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde',
    alt: 'Elegant White Kitchen',
    description: 'Timeless elegance with marble accents'
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b',
    alt: 'Designer Kitchen',
    description: 'Bespoke cabinetry and premium appliances'
  }
];

const LuxuryShowcase = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Return null on server-side
  }

  return (
    <section className="relative py-20 overflow-hidden bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A66B]/20 to-transparent" />
        <div className="grid grid-cols-6 gap-8 transform rotate-12 scale-150">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="h-32 bg-[#C9A66B]/10 rounded-full blur-2xl" />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl font-serif text-[#C9A66B] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Luxury Kitchen Collection
            </motion.h2>
            <motion.p 
              className="text-gray-300 text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience the perfect blend of sophistication and functionality with our premium kitchen designs
            </motion.p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {luxuryKitchens.map((kitchen, index) => (
              <motion.div
                key={kitchen.src}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-900">
                  <Image
                    src={kitchen.src}
                    alt={kitchen.alt}
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={95}
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-medium text-white mb-2">{kitchen.alt}</h3>
                    <p className="text-[#C9A66B] text-sm tracking-wide">{kitchen.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-[#C9A66B] text-white rounded-lg hover:bg-[#B08B57] transition-colors duration-300 text-lg font-medium"
            >
              Schedule a Consultation
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LuxuryShowcase; 