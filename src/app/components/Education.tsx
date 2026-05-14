"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { education, certifications } from "@/src/data/education";

export default function Education() {
  return (
    <div>
      <p className="font-mono text-cyan text-xs tracking-[0.3em] mb-2 opacity-70">
        {"// 05. EDUCATION"}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-white">Academic Background</h2>
      <div className="section-divider" />

      {/* ── Education cards ──────────────────────────── */}
      <div className="space-y-6 mb-14">
        {education.map((edu, idx) => (
          <motion.div
            key={edu.university}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.55 }}
            viewport={{ once: true }}
            className="group relative bg-slate/50 backdrop-blur-sm border border-white/5
              rounded-2xl overflow-hidden hover:border-cyan/25 transition-all duration-400"
          >
            {/* Top gradient line */}
            <div
              className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full
                bg-gradient-to-r from-cyan to-magenta transition-all duration-700"
            />

            {/* Glow accent */}
            <div
              className="absolute top-0 right-0 w-48 h-48 opacity-0 group-hover:opacity-100
                transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(0,240,255,0.05) 0%, transparent 70%)",
              }}
            />

            <div className="p-8 md:p-10 relative z-10">

              {/* ── Header row ── */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-8">
                <div>
                  <span
                    className="inline-block font-mono text-[10px] tracking-[0.3em] uppercase
                      text-cyan border border-cyan/30 bg-cyan/5 rounded-full px-3 py-1 mb-4"
                  >
                    Education
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-cyan font-semibold text-lg">{edu.field}</p>
                  <p className="text-grayText text-sm mt-2">{edu.university}</p>
                </div>

                {/* CGPA + Period block */}
                <div className="md:text-right shrink-0">
                  <p className="font-mono text-sm text-grayText mb-3">{edu.period}</p>
                  {edu.cgpa && (
                    <div className="inline-flex flex-col items-end border border-cyan/20
                      bg-cyan/5 rounded-xl px-5 py-3">
                      <span className="font-mono text-[10px] tracking-widest uppercase text-grayText mb-1">
                        CGPA
                      </span>
                      <span className="text-3xl font-black text-cyan">{edu.cgpa}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* ── Relevant Coursework ── */}
              <div className="mb-7">
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-grayText mb-3">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.courses?.map((course) => (
                    <span
                      key={course}
                      className="text-xs font-mono text-grayText border border-white/8
                        bg-white/3 px-3 py-1.5 rounded-full hover:border-cyan/30
                        hover:text-white transition-colors duration-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* ── Achievements ── */}
              {(edu.achievements || []).length > 0 && (
                <div className="pt-6 border-t border-white/5">
                  <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-grayText mb-4">
                    Highlights
                  </p>
                  <ul className="space-y-3">
                    {edu.achievements?.map((ach) => (
                      <li key={ach} className="flex items-start gap-3 text-grayText text-sm">
                        <span className="text-cyan mt-0.5 shrink-0 text-xs">▸</span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Certifications ─────────────────────────── */}
      {certifications.length > 0 && (
        <>
          <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => (
              <motion.a
                key={cert.name}
                href={cert.credentialUrl || "#"}
                target={cert.credentialUrl ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group flex items-center gap-4 bg-slate/50 border border-white/5
                  rounded-xl p-5 hover:border-cyan/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0
                  bg-white/5 border border-white/10 group-hover:border-cyan/30 transition-colors">
                  <Image
                    src={cert.icon ?? ""}
                    alt={cert.issuer}
                    width={24}
                    height={24}
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm leading-tight">{cert.name}</p>
                  <p className="font-mono text-xs text-grayText mt-1">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}