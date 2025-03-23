'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import emailjs from '@emailjs/browser';

const services = [
  { value: 'custom-design', label: 'Custom Kitchen Design' },
  { value: 'renovation', label: 'Kitchen Renovation' },
  { value: 'modular', label: 'Modular Solutions' },
  { value: 'material', label: 'Material Selection' },
];

// ContactForm component that uses searchParams
function ContactForm() {
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      setSelectedService(serviceParam);
      const serviceName = services.find(s => s.value === serviceParam)?.label || '';
      setMessage(`I'm interested in your ${serviceName} service. Please provide more information.`);
    }
  }, [searchParams]);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const form = e.target as HTMLFormElement;
    const formData = {
      from_name: (form.elements.namedItem('name') as HTMLInputElement).value,
      from_email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone_number: (form.elements.namedItem('phone') as HTMLInputElement).value,
      service: services.find(s => s.value === selectedService)?.label || 'Not specified',
      message: message,
      to_email: 'rakshankitchenlimited@gmail.com',
      to_phone: '+91 9310123565'
    };

    try {
      // Send email via EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        formData
      );

      // Send SMS via our API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send SMS');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.'
      });
      form.reset();
      setSelectedService('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {submitStatus.type && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 mb-6 rounded ${
            submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}
        >
          {submitStatus.message}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name*
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-3 border border-gray-200 rounded-none focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-200 hover:border-primary"
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email*
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 border border-gray-200 rounded-none focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-200 hover:border-primary"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone Number*
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-4 py-3 border border-gray-200 rounded-none focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-200 hover:border-primary"
            placeholder="Enter Your Phone Number"
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit phone number"
            required
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-2">
            Service*
          </label>
          <select
            id="service"
            value={selectedService}
            onChange={(e) => {
              setSelectedService(e.target.value);
              const serviceName = services.find(s => s.value === e.target.value)?.label || '';
              if (serviceName) {
                setMessage(`I'm interested in your ${serviceName} service. Please provide more information.`);
              }
            }}
            className="w-full px-4 py-3 border border-gray-200 rounded-none focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-200 hover:border-primary"
            required
          >
            <option value="">Select a Service</option>
            {services.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-none focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-200 hover:border-primary resize-none"
            placeholder="Enter Your Message"
          ></textarea>
        </div>
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileTap={{ scale: 0.98 }}
          className={`w-full bg-primary text-white py-4 px-8 hover:bg-primary-hover transition-all duration-200 relative overflow-hidden group ${
            isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
          }`}
        >
          <span className="relative z-10">
            {isSubmitting ? 'SENDING...' : 'SUBMIT'}
          </span>
          <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 group-hover:w-full" />
        </motion.button>
      </form>
    </>
  );
}

// Loading fallback for Suspense
function ContactFormLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-20 bg-gray-100"></div>
      <div className="h-20 bg-gray-100"></div>
      <div className="h-20 bg-gray-100"></div>
      <div className="h-20 bg-gray-100"></div>
      <div className="h-32 bg-gray-100"></div>
      <div className="h-14 bg-gray-200"></div>
    </div>
  );
}

export default function ContactPage() {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <main className="min-h-screen">
      {/* Hero Section with Background */}
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
              <span>CONTACT US</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif">Contact Us</h1>
          </div>
        </motion.div>
      </div>

      {/* Contact Form Section */}
      <section className="py-20" ref={sectionRef}>
        <div className="container max-w-2xl mx-auto px-4">
          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif mb-4">Get in touch</h2>
            <p className="text-gray-600 mb-8">
              We will be delighted to answer any queries or questions you may have about our kitchen design services by sending this form.
            </p>

            <Suspense fallback={<ContactFormLoading />}>
              <ContactForm />
            </Suspense>
          </motion.div>
        </div>
      </section>

      {/* Large Logo Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-secondary relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A66B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container relative">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[120px] md:text-[200px] font-serif text-[#C9A66B] text-center select-none relative"
            >
              RAKSHAN KITCHEN
              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-[#C9A66B]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto"
            >
              Crafting Luxury Kitchen Spaces Since 1999
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Footer Section */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-secondary text-white py-16 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A66B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <motion.h3 
                className="text-3xl font-serif mb-4 text-[#C9A66B] relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                RAKSHAN KITCHEN
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A66B] group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </motion.h3>
              <p className="text-gray-400">
                Creating exceptional kitchen spaces that inspire and delight.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-serif mb-4 text-[#C9A66B]">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-[#C9A66B] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-[#C9A66B] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-[#C9A66B] transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-gray-400 hover:text-[#C9A66B] transition-colors">
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-serif mb-4 text-[#C9A66B]">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#C9A66B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Vatika Kunj, Gurgaon, Haryana
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#C9A66B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 9310123565
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#C9A66B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  rakshankitchenlimited@gmail.com
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-serif mb-4 text-[#C9A66B]">Follow Us</h4>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://www.facebook.com/rakshankitchen/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-[#C9A66B] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} RAKSHAN KITCHEN. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </main>
  );
}