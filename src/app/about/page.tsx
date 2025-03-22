'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AboutPage() {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-black/60 overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt="Kitchen Design Background"
          fill
          className="object-cover mix-blend-overlay scale-110 animate-subtle-zoom"
          priority
        />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col justify-center items-center text-white"
        >
          <div className="container">
            <div className="flex items-center gap-2 text-sm mb-4">
              <Link href="/" className="text-primary hover:text-primary-hover transition-colors">
                HOME
              </Link>
              <span>/</span>
              <span>ABOUT US</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif">Our Story</h1>
          </div>
        </motion.div>
      </div>

      {/* Owner Introduction Section */}
      <section className="py-20 bg-white" ref={sectionRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative z-10 text-center"
              >
                <Image
                  src="/images/owner.jpg"
                  alt="S K Dogra - Founder & CEO"
                  width={350}
                  height={400}
                  className="object-cover rounded-lg shadow-xl mx-auto"
                  style={{ 
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                  priority
                  onError={(e) => {
                    console.error('Image failed to load:', e);
                    const img = e.target as HTMLImageElement;
                    img.style.border = '2px solid red';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-4 text-center"
                >
                  <h3 className="text-xl font-serif text-[#1A1A1A]">S K Dogra</h3>
                  <p className="text-[#C9A66B] font-medium">Founder & CEO</p>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#C9A66B]/10 rounded-lg z-0"
              />
            </div>
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4 }}
                className="text-[#C9A66B] font-medium mb-2 block"
              >
                25+ YEARS OF EXCELLENCE
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl font-serif mb-6"
              >
                Crafting Dream Kitchens Since 1998
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4 text-gray-600"
              >
                <p>
                  Welcome to Rakshan Kitchen, where passion meets expertise in kitchen design. As the founder and principal designer, I, S K Dogra, have dedicated over two and a half decades to transforming ordinary spaces into extraordinary culinary havens.
                </p>
                <p>
                  My journey in kitchen design began in 1998, driven by a vision to create spaces that perfectly blend functionality with aesthetic beauty. Over the years, I've had the privilege of working with hundreds of families across India, understanding their unique needs, and turning their kitchen dreams into reality.
                </p>
                <p>
                  What sets us apart is our unwavering commitment to quality and attention to detail. Every project we undertake is treated with the same level of dedication and precision, whether it's a modest renovation or a luxury custom design. Our team's expertise in both traditional and modern kitchen designs has made us a trusted name in the industry.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center p-6">
              <div className="text-4xl font-serif text-[#C9A66B] mb-2">25+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-serif text-[#C9A66B] mb-2">1000+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-serif text-[#C9A66B] mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Presence */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-serif mb-6">Our Social Presence</h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <svg className="h-12 w-12 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
              <div className="text-left">
                <div className="text-4xl font-serif text-[#C9A66B]">5K+</div>
                <div className="text-gray-600">Facebook Followers</div>
              </div>
            </div>
            <p className="text-gray-600 mb-8">
              Join our growing community of over 5,000 followers on Facebook, where we share our latest kitchen designs, renovation projects, and design inspiration. Follow us to stay updated with the latest trends in kitchen design and get exclusive insights into our creative process.
            </p>
            <a
              href="https://www.facebook.com/rakshankitchen/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1877F2] text-white px-8 py-3 rounded hover:bg-[#166FE5] transition-colors duration-200"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
              Follow Us on Facebook
            </a>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-serif mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-8">
              "To create exceptional kitchen spaces that inspire culinary creativity and bring families together. We believe that every kitchen should be a perfect harmony of beauty, functionality, and personal expression."
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#C9A66B] text-white px-8 py-3 rounded hover:bg-[#B08B57] transition-colors duration-200"
            >
              Start Your Kitchen Journey
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 