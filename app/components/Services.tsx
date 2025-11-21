// app/components/Services.tsx
'use client';
import { motion } from 'framer-motion';
import { Service } from '../types';

const services: Service[] = [
  {
    icon: '🏢',
    title: 'Business Website',
    description: 'Professional websites that represent your brand and drive business growth.',
  },
  {
    icon: '📅',
    title: 'Booking Page',
    description: 'Seamless booking systems for appointments, services, and reservations.',
  },
  {
    icon: '🚀',
    title: 'Landing Page',
    description: 'High-converting landing pages that capture leads and boost conversions.',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Creative and user-friendly interface designs that enhance user experience.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20 bg-primary-bg">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-white"
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="service-card group"
            >
              <div className="text-3xl md:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}