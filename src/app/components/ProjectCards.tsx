"use client";
import { projects } from "@/src/data/projects";
import TiltCard from "./TiltCard";
import { motion } from "framer-motion";

export default function ProjectCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {projects.map((project, idx) => (
                <motion.div 
                    key={project.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <TiltCard>
                        <h3 className="text-2xl font-bold text-cyan mb-2">{project.title}</h3>
                        <p className="text-grayText text-sm leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2 my-4">
                            {project.tech.map((tech) => (
                                <span key={tech} className="text-xs bg-cyan/10 text-cyan px-2 py-1 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm border-b border-cyan text-gray-200 hover:text-cyan transition">
                                Github →
                            </a>
                            {project.demo && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sm border-b border-cyan text-gray-200 hover:text-cyan transition">
                                    Live Demo →
                                </a>
                            )}
                        </div>
                    </TiltCard>
                </motion.div>
            ))}
        </div>
    );
}