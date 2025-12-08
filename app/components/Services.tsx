// app/components/Services.tsx
'use client';
import { motion } from 'framer-motion';
import { Layout, Calendar, Rocket, Palette, Code2, Smartphone } from 'lucide-react';
import { ReactNode } from 'react';

// Define interface locally to ensure compatibility
interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: 'Custom Web Applications',
    description: 'Scalable, high-performance web apps built with Next.js and React. I build backend-ready solutions.',
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Fullstack Development',
    description: 'End-to-end development including API integration, database design, and server-side logic.',
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'High-Conversion Landing Pages',
    description: 'Optimized pages designed to turn visitors into paying clients with compelling visuals and speed.',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Premium UI/UX Design',
    description: 'User-centric interfaces that feel modern, fluid, and intuitive. I focus on micro-interactions and flow.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-primary-bg relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text">
            My <span className="text-accent underline decoration-accent/30 underline-offset-8">Services</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            I offer a full range of digital services, from design to deployment, ensuring your project succeeds from every angle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-secondary-bg/50 border border-white/5 hover:border-accent/30 transition-all duration-300 hover:bg-secondary-bg hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/5"
            >
              <div className="bg-primary-bg w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-primary-bg transition-all duration-300 shadow-lg shadow-black/50">
                {service.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-4 text-text group-hover:text-accent transition-colors">
                {service.title}
              </h3>

              <p className="text-text-muted leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}