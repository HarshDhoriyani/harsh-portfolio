"use client";
import { motion } from "framer-motion";
import { experiences } from "@/src/data/experience";

const typeColors: Record<string, string> = {
  education: "#00F0FF",
  project:   "#FF2D78",
  work:      "#6DB33F",
};

const typeLabels: Record<string, string> = {
  education: "Education",
  project:   "Project",
  work:      "Work",
};

export default function Experience() {
  return (
    <div>
      <p className="font-mono text-cyan text-xs tracking-[0.3em] mb-2 opacity-70">
        {"// 05. JOURNEY"}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-white">Experience</h2>
      <div className="section-divider" />

      <div className="relative pl-8 space-y-8">
        {/* Vertical timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px
          bg-linear-to-b from-cyan via-cyan/30 to-transparent" />

        {experiences.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline dot */}
            <div
              className="absolute -left-9.25 top-5 w-3 h-3 rounded-full border-2 border-charcoal"
              style={{ background: typeColors[item.type] }}
            />

            {/* Card */}
            <div className="bg-slate/30 backdrop-blur-sm border border-cyan/5 rounded-xl p-5
              hover:border-cyan/20 hover:bg-slate/40 transition-all duration-300">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                {/* Type badge */}
                <span
                  className="font-mono text-[10px] tracking-widest uppercase rounded-full px-3 py-1 border"
                  style={{
                    color:        typeColors[item.type],
                    borderColor:  `${typeColors[item.type]}40`,
                    background:   `${typeColors[item.type]}10`,
                  }}
                >
                  {typeLabels[item.type]}
                </span>

                {/* Period */}
                <span className="font-mono text-xs text-grayText ml-auto">{item.period}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
              <p className="font-mono text-xs text-grayText mb-3">{item.org}</p>
              <p className="text-grayText text-sm leading-relaxed mb-4">{item.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag}
                    className="text-xs bg-cyan/8 text-cyan border border-cyan/20 px-2 py-1 rounded-full font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}