"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { skills, categories } from "@/src/data/skills";

export default function Skills() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <div>
      <p className="font-mono text-cyan text-xs tracking-[0.3em] mb-2 opacity-70">
        {"// 04. TECHNICAL SKILLS"}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-white">Tech Stack</h2>
      <div className="section-divider" />

      {/* ── Filter tabs (horizontal scroll on mobile) ── */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-3 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`whitespace-nowrap shrink-0 font-mono text-xs tracking-wider
              px-5 py-2.5 rounded-full border transition-all duration-200
              ${
                active === cat
                  ? "bg-cyan text-charcoal border-cyan font-bold"
                  : "border-cyan/20 text-grayText hover:border-cyan/50 hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="font-mono text-xs text-grayText mb-8">
        Showing{" "}
        <span className="text-cyan font-bold">{filtered.length}</span>{" "}
        technologies
      </p>

      {/* ── Grid ──────────────────────────────────────── */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 24, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.22, delay: Math.min(i * 0.04, 0.4) }}
              className="group relative overflow-hidden bg-slate/50 backdrop-blur-sm
                border border-white/5 rounded-2xl p-5
                hover:border-cyan/30 hover:-translate-y-1
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]
                transition-all duration-300 cursor-default"
            >
              {/* Brand glow behind logo */}
              <div
                className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full
                  blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                style={{ background: skill.color }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center gap-3">

                {/* Logo */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center
                    transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${skill.color}18`,
                    border: `1px solid ${skill.color}35`,
                  }}
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={32}
                    height={32}
                    unoptimized
                    className="object-contain"
                  />
                </div>

                {/* Name */}
                <p className="font-bold text-white text-sm leading-tight">{skill.name}</p>

                {/* Category */}
                <p
                  className="font-mono text-[10px] tracking-wider"
                  style={{ color: skill.color, opacity: 0.8 }}
                >
                  {skill.category}
                </p>

                {/* Description — slides in on hover */}
                <div
                  className="max-h-0 group-hover:max-h-20 overflow-hidden
                    transition-all duration-300"
                >
                  <p
                    className="text-grayText text-[11px] leading-relaxed text-center
                      opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100
                      pt-2 border-t border-white/8"
                  >
                    {skill.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <p className="text-center font-mono text-xs text-grayText mt-8 opacity-40 tracking-widest">
        HOVER ANY CARD FOR DETAILS
      </p>
    </div>
  );
}