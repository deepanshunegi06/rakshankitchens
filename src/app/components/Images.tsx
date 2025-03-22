'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Image data structure
const kitchenImages = {
  gallery: [
    {
      src: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4',
      alt: 'Modern Luxury Kitchen with Island',
      category: 'Contemporary'
    },
    {
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      alt: 'Premium White Kitchen Design',
      category: 'Modern'
    },
    {
      src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea',
      alt: 'Elegant Kitchen with Golden Accents',
      category: 'Luxury'
    }
  ],
  features: [
    {
      src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d',
      alt: 'Smart Storage & Organization',
      category: 'Features'
    },
    {
      src: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc',
      alt: 'Premium Materials & Finishes',
      category: 'Details'
    }
  ]
};

interface ImageProps {
  src: string;
  alt: string;
  category?: string;
  priority?: boolean;
}

const OptimizedImage = ({ src, alt, category, priority = false }: ImageProps) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl bg-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transform transition-all duration-500 hover:scale-105"
          priority={priority}
          quality={95}
        />
      </div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
        whileHover={{ opacity: 1 }}
      >
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
          <p className="text-white text-xl font-medium mb-1">{alt}</p>
          {category && (
            <p className="text-[#C9A66B] text-sm font-medium tracking-wide uppercase">{category}</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const KitchenGallery = () => {
  return (
    <div className="space-y-16">
      {/* Gallery Section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {kitchenImages.gallery.map((image, index) => (
            <OptimizedImage
              key={image.src}
              {...image}
              priority={index === 0}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {kitchenImages.features.map((image) => (
            <OptimizedImage
              key={image.src}
              {...image}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default KitchenGallery; 