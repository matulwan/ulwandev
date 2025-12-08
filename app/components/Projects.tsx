// app/components/Projects.tsx
'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Folder } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    description: 'A modern shopping experience with seamless checkout and inventory management.',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
  },
  {
    title: 'SaaS Dashboard',
    category: 'Web App',
    description: 'Real-time analytics dashboard for data visualization and team management.',
    tags: ['React', 'TypeScript', 'Charts'],
  },
  {
    title: 'Portfolio V1',
    category: 'Frontend',
    description: 'Minimalist portfolio template designed for creatives and developers.',
    tags: ['Framer Motion', 'Next.js'],
  },
  {
    title: 'Travel Booking',
    category: 'UI/UX Design',
    description: 'Immersive travel booking interface with simplified user flow and booking engine.',
    tags: ['Figma', 'UI Design'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary-bg relative overflow-hidden">
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

          <motion.a
            href="https://github.com/ulwandev"
            target="_blank"
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-accent font-medium hover:text-white transition-colors"
          >
            View Github <ArrowUpRight className="w-5 h-5" />
          </motion.a>
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
              {/* Screenshot Placeholder Container */}
              <div className="relative aspect-video bg-primary-bg rounded-xl overflow-hidden mb-6 border border-white/5 group-hover:border-accent/30 transition-colors shadow-2xl">
                {/* Floating overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                {/* Placeholder Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3 text-white/20 group-hover:text-accent/50 transition-colors">
                    <Folder className="w-12 h-12" />
                    <span className="text-sm font-medium uppercase tracking-widest">Project Screenshot</span>
                  </div>
                </div>

                {/* Hover Overlay with Actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <button className="p-3 bg-white text-black rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-110">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-black/50 text-white border border-white/20 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:scale-110 hover:bg-black">
                    <Github className="w-5 h-5" />
                  </button>
                </div>
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