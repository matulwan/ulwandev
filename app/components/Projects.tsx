// app/components/Projects.tsx
'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Folder } from 'lucide-react';
import Image from 'next/image';

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
}

const projects: Project[] = [
  {
    title: 'Laravel Dashboard',
    category: 'Dashboard',
    description: 'A sleek Laravel dashboard for real-time data monitoring and efficient user management.',
    tags: ['Laravel', 'React', 'TypeScript'],
    image: '/images/dashboard.png',
  },
  {
    title: 'Restaurant Landing Page',
    category: 'Website',
    description: 'A modern landing page for restaurant promotion and reservations info.',
    tags: ['Next.js', 'TypeScript'],
    image: '/images/restaurant1.png',
  },
  {
    title: 'Barber Booking System',
    category: 'Website Application',
    description: 'A web app enabling users to book and manage barber appointments effortlessly',
    tags: ['Laravel', 'Livewire', 'TailwindCSS'],
    image: '/images/barber1.png',
  },
  {
    title: 'Travel Booking',
    category: 'UI/UX Design',
    description: 'Immersive travel booking interface with simplified user flow and booking engine.',
    tags: ['Figma', 'UI Design'],
    image: '/images/travel.png',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary-bg relative overflow-hidden">
      {/* Background decoration - Green line separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>

      {/* Background visual cues */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-bg/5 skew-x-12 transform origin-top-right" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text">
              Selected <span className="text-accent">Projects</span>
            </h2>
            <p className="text-text-muted text-lg max-w-xl">
              A collection of work that demonstrates my ability to solve complex problems with simple, elegant solutions.
            </p>
          </div>


        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Project Image Container */}
              <div className="relative aspect-video bg-primary-bg rounded-xl overflow-hidden mb-6 border border-white/5 group-hover:border-accent/30 transition-colors shadow-2xl">
                {/* Project Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Floating overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Project Info */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-accent text-sm font-medium tracking-wider uppercase">{project.category}</span>
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs text-text-muted px-2 py-1 rounded bg-primary-bg/50 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-text mb-2 group-hover:text-accent transition-colors cursor-pointer">
                  {project.title}
                </h3>

                <p className="text-text-muted leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}