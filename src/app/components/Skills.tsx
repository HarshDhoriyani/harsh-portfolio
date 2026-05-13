"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { skills, categories } from "@/src/data/skills";

export default function Skills() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? skills : skills.filter((s) => s.category === active);

  // Group skills by category for visualization
  const skillsByCategory = categories.reduce((acc, cat) => {
    acc[cat] = skills.filter((s) => s.category === cat);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div>
      <p className="font-mono text-cyan text-xs tracking-[0.3em] mb-2 opacity-70">
        {"// 04. TECHNICAL SKILLS"}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-white">Tech Stack</h2>
      <div className="section-divider" />

      {/* Category Pills - Horizontal Scroll on Mobile */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
        <motion.button
          onClick={() => setActive("All")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className={`font-mono text-sm tracking-wider px-6 py-2.5 rounded-full border transition-all duration-300 relative group
            ${
              active === "All"
                ? "bg-gradient-to-r from-cyan to-cyan/70 text-charcoal border-cyan shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                : "border-cyan/30 text-grayText hover:border-cyan hover:text-white"
            }`}
        >
          All
          <span className={`ml-2 text-xs font-mono ${
            active === "All" ? "text-charcoal/70" : "text-cyan/60"
          }`}>
            {skills.length}
          </span>
        </motion.button>
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActive(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`font-mono text-sm tracking-wider px-6 py-2.5 rounded-full border transition-all duration-300 relative group
              ${
                active === cat
                  ? "bg-gradient-to-r from-cyan to-cyan/70 text-charcoal border-cyan shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                  : "border-cyan/30 text-grayText hover:border-cyan hover:text-white"
              }`}
          >
            {cat}
            <span className={`ml-2 text-xs font-mono ${
              active === cat ? "text-charcoal/70" : "text-cyan/60"
            }`}>
              {skillsByCategory[cat].length}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Skills Display - Category View */}
      {active === "All" ? (
        <div className="space-y-12">
          {categories.map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className=""
            >
              <h3 className="text-xl font-bold text-cyan mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ background: skillsByCategory[category][0]?.color || "#00F0FF" }} />
                {category}
              </h3>
              <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {skillsByCategory[category].map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="flex flex-col items-center gap-3 p-4 rounded-lg transition-all duration-300
                      hover:bg-gradient-to-b hover:from-slate/40 hover:to-transparent">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}08)`,
                          border: `2px solid ${skill.color}40`,
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
                      </motion.div>
                      <div className="text-center">
                        <p className="font-semibold text-white text-sm">{skill.name}</p>
                        <p className="text-xs text-grayText opacity-70 mt-1 max-w-xs line-clamp-2">{skill.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      ) : (
        /* Single Category View */
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {filtered.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="group relative"
            >
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg transition-all duration-300
                hover:bg-gradient-to-b hover:from-slate/40 hover:to-transparent">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}25, ${skill.color}05)`,
                    border: `2px solid ${skill.color}50`,
                  }}
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={40}
                    height={40}
                    unoptimized
                    className="object-contain"
                  />
                </motion.div>
                <div className="text-center">
                  <p className="font-semibold text-white text-sm">{skill.name}</p>
                  <p className="text-xs text-grayText opacity-70 mt-2 max-w-xs line-clamp-2">{skill.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      <p className="text-center font-mono text-xs text-grayText mt-10 opacity-50">
        ✦ Click category pills to filter or view all skills by category
      </p>
    </div>
  );
}