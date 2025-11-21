// app/components/Hero.tsx
'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default function Hero() {
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTypingComplete(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-bg via-secondary-bg to-primary-bg relative overflow-hidden">
      


      {/* Subtle mesh gradient overlay */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 20% 30%, rgba(0, 227, 164, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(0, 180, 216, 0.1) 0%, transparent 50%)',
        }}
        animate={{
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Bottom gradient to black */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[40%] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0.8) 70%, #000000 100%)',
        }}
      />
      
      <div className="container mx-auto px-6 text-center z-10 relative">
        {/* Main Heading with Glow Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white tracking-tight">
            <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              Ulwan Ukail
            </span>
          </h1>
        </motion.div>
        
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-300">
            Fullstack Web Developer
          </h2>
        </motion.div>
        
        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="text-lg md:text-xl lg:text-2xl text-gray-400 inline-block">
            <span className={`typewriter ${isTypingComplete ? 'border-r-0' : ''}`}>
              I turn caffeine into websites.
            </span>
          </div>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="https://wa.me/60172052095?text=Hi%20Ulwan,%20I%20need%20a%20website"
            className="btn-primary group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <WhatsAppIcon />
              WhatsApp
            </span>
          </motion.a>
          
          <motion.a
            href="mailto:ulwandev@gmail.com?subject=Website Inquiry"
            className="btn-secondary group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <EmailIcon />
              Email
            </span>
          </motion.a>
        </motion.div>
      </div>


    </section>
  );
}