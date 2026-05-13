"use client";
import { projects } from "@/src/data/projects";
import { motion } from "framer-motion";

export default function ProjectCards() {
  return (
    <div className="space-y-8 mt-8">
      {projects.map((project, idx) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="pb-8 border-b border-cyan/10 last:border-b-0"
        >
          {/* Tag */}
          <span className="inline-block font-mono text-[10px] tracking-widest uppercase
            text-magenta mb-2">
            {project.tag}
          </span>

          <h3 className="text-2xl font-bold text-white mb-3 hover:text-cyan transition-colors">
            {project.title}
          </h3>
          <p className="text-grayText text-base leading-relaxed mb-4">
            {project.longDesc}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span key={tech}
                className="text-xs bg-cyan/10 text-cyan border border-cyan/20 px-3 py-1 rounded-full font-mono">
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-6 items-center">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-grayText hover:text-white border-b border-transparent
                hover:border-white transition-all duration-200 tracking-wider"
            >
              GitHub →
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-cyan hover:text-white border-b border-cyan
                  hover:border-white transition-all duration-200 tracking-wider"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}