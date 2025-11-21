// app/components/Projects.tsx
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: 'Barbershop Booking',
    description: 'Online booking system for barbershop services',
    image: '/images/barbershop.jpg',
  },
  {
    title: 'Restaurant Menu',
    description: 'Digital menu platform for restaurants and cafes',
    image: '/images/restaurant.jpg',
  },
  {
    title: 'Tuition Center',
    description: 'Educational platform for tuition centers',
    image: '/images/tuition.jpg',
  },
  {
    title: 'Company Profile',
    description: 'Professional landing page for businesses',
    image: '/images/company.jpg',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-16 md:py-20 bg-secondary-bg">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-white"
        >
          Project Showcase
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card group transition-transform duration-300 hover:scale-105"
              onMouseEnter={() => setSelectedProject(project.title)}
              onMouseLeave={() => setSelectedProject(null)}
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-40 md:h-48 bg-gradient-to-br from-accent/20 to-secondary-bg flex items-center justify-center">
                  <div className="text-4xl opacity-50">
                    {project.title.split(' ')[0].charAt(0)}
                  </div>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}