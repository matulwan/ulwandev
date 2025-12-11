// app/components/Hero.tsx
'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary-bg pt-24">

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px]"
        />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >

          {/* Main Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-text mb-8 tracking-tight leading-[1.1]"
          >
            Crafting Digital <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
              Experiences
            </span> That Matter.
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            I help businesses grow by building premium, high-performance websites and applications that look great and work perfectly.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-accent text-primary-bg px-8 py-4 rounded-xl font-semibold flex items-center gap-2 text-lg hover:bg-accent-hover transition-all shadow-lg shadow-accent/20"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="https://wa.me/60172052095?text=Hi%20Ulwan,%20I%20need%20a%20website"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-xl font-semibold text-text border border-white/10 hover:bg-white/5 flex items-center gap-2 transition-all backdrop-blur-sm"
            >
              <MessageCircle className="w-5 h-5 text-accent" />
              Let's Talk
            </motion.a>
          </motion.div>

          {/* Stats or Trust Indicators (Optional Polish) */}
          <motion.div
            variants={fadeInUp}
            className="mt-20 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: "Years Experience", value: "3+" },
              { label: "Projects Completed", value: "10+" },
              { label: "Client Satisfaction", value: "100%" },
              { label: "Response Time", value: "< 24h" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}