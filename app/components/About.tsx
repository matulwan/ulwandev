// app/components/About.tsx
'use client';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const skills = [
    "Laravel", "Next.js", "React", "TypeScript", "Node.js", "Bootstrap", "TailwindCSS", "MySQL", "SQLite", "Figma",
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-primary-bg relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text">
                            Transforming Ideas into <br />
                            <span className="text-accent">Digital Reality</span>
                        </h2>

                        <div className="space-y-6 text-text-muted text-lg leading-relaxed">
                            <p>
                                I am <strong className="text-white">Ulwan Ukail</strong> a passionate Fullstack Developer with a knack for building sleek, high-performing web applications.
                            </p>
                            <p>
                                With a deep understanding of modern web technologies, I bridge the gap between complex backend logic and beautiful frontend design. My goal is simple to create digital experiences that not only look amazing but also solve real business problems.
                            </p>
                            <p>
                                Whether you need a custom SaaS platform, a high converting landing page, or a complete brand overhaul, I bring technical expertise and creative vision to every project.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-bg border border-white/5 text-sm md:text-base text-gray-300">
                                    <CheckCircle2 className="w-4 h-4 text-accent" />
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual/Image Area */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-secondary-bg border border-white/10 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                            {/* Gemini Images Grid */}
                            <div className="absolute inset-0 flex items-center justify-center p-6">
                                <div className="grid grid-cols-2 gap-4 w-full h-full">
                                    {[
                                        '/images/Gemini_Generated_Image_6m73qd6m73qd6m73.png',
                                        '/images/Gemini_Generated_Image_yvyc1vyvyc1vyvyc.png',
                                        '/images/Gemini_Generated_Image_fc1zu2fc1zu2fc1z.png',
                                        '/images/Gemini_Generated_Image_feqjqmfeqjqmfeqj.png',
                                        
                                    
                                    ].map((imagePath, index) => (
                                        <motion.div
                                            key={index}
                                            className="relative rounded-lg overflow-hidden border border-white/10 hover:border-accent/50 transition-all hover:scale-105"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1, duration: 0.5 }}
                                            viewport={{ once: true }}
                                        >
                                            <Image
                                                src={imagePath}
                                                alt={`Portfolio showcase ${index + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-secondary-bg p-4 rounded-xl border border-white/10 shadow-xl backdrop-blur-md">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold">
                                    ✓
                                </div>
                                <div>
                                    <div className="text-white font-bold">Verified Expert</div>
                                    <div className="text-xs text-gray-400">Web Development</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
