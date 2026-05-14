"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/src/data/projects";

export default function ProjectCards() {
  return (
    <div className="space-y-6 mt-8">
      {projects.map((project, idx) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.12, duration: 0.6 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-2xl border border-white/5
            hover:border-cyan/30 transition-all duration-500 bg-slate/40 backdrop-blur-sm"
        >
          {/* Animated gradient border on top */}
          <div
            className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full
              bg-gradient-to-r from-cyan via-magenta to-cyan transition-all duration-700"
          />

          <div className="flex flex-col lg:flex-row">

            {/* ── Left: Content ─────────────────────────── */}
            <div className="flex-1 p-8 md:p-10 relative overflow-hidden">

              {/* Large background project number */}
              <span
                className="absolute -top-4 -left-3 text-[9rem] md:text-[11rem] font-black leading-none
                  select-none font-mono text-white/[0.025] group-hover:text-cyan/[0.06]
                  transition-all duration-700"
              >
                {String(idx + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10">
                {/* Tag badge */}
                <span
                  className="inline-block font-mono text-[10px] tracking-[0.3em] uppercase
                    text-magenta border border-magenta/30 bg-magenta/5 rounded-full px-3 py-1 mb-5"
                >
                  {project.tag}
                </span>

                {/* Title */}
                <h3
                  className="text-3xl md:text-4xl font-extrabold text-white mb-4
                    group-hover:text-cyan transition-colors duration-300"
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-grayText text-sm md:text-base leading-relaxed max-w-xl mb-7">
                  {project.longDesc}
                </p>

                {/* Tech name pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t.name}
                      className="font-mono text-xs text-cyan border border-cyan/25
                        bg-cyan/5 px-3 py-1.5 rounded-full"
                    >
                      {t.name}
                    </span>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm font-bold text-charcoal bg-cyan px-6 py-3
                        rounded-xl hover:bg-white transition-all duration-200
                        hover:shadow-[0_0_24px_rgba(0,240,255,0.35)]"
                    >
                      Live Demo ↗
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-white border border-white/20 px-6 py-3
                      rounded-xl hover:border-cyan hover:text-cyan transition-all duration-200"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>

            {/* ── Right: Tech logo grid ──────────────────── */}
            <div
              className="lg:w-56 xl:w-64 border-t lg:border-t-0 lg:border-l border-white/5
                p-7 flex flex-col justify-center gap-5"
            >
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-grayText">
                Built With
              </p>

              <div className="grid grid-cols-2 gap-3">
                {project.tech.map((t) => (
                  <motion.div
                    key={t.name}
                    whileHover={{ scale: 1.07 }}
                    className="flex flex-col items-center justify-center gap-2 p-3
                      rounded-xl border border-white/8 bg-white/3
                      hover:border-cyan/30 transition-colors duration-200"
                    title={t.name}
                  >
                    <Image
                      src={t.icon}
                      alt={t.name}
                      width={28}
                      height={28}
                      unoptimized
                      className="object-contain"
                    />
                    <span className="font-mono text-[9px] text-grayText text-center leading-tight">
                      {t.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}