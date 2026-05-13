"use client";
import { motion } from "framer-motion";
import { experiences } from "@/src/data/experience";

// Filter only education items
const educationItems = experiences.filter((item) => item.type === "education");

export default function Education() {
  return (
    <div>
      <p className="font-mono text-cyan text-xs tracking-[0.3em] mb-2 opacity-70">
        {"// 05. EDUCATION"}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-white">Education & Learning</h2>
      <div className="section-divider" />

      <div className="space-y-8">
        {educationItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="pb-6 border-b border-cyan/10 last:border-b-0"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
              <div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="font-mono text-sm text-cyan mt-1">{item.org}</p>
              </div>
              <span className="font-mono text-xs text-grayText whitespace-nowrap">{item.period}</span>
            </div>

            <p className="text-grayText text-base leading-relaxed mb-4">{item.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-cyan/10 text-cyan border border-cyan/20 px-3 py-1 rounded-full font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
