"use client";
import { motion } from "framer-motion";
import { skills, categories } from "@/src/data/skills";
import Image from "next/image";

export default function SkillsVisualization() {
  // Group skills by category for visualization
  const categoryData = categories.map((category) => {
    const categorySkills = skills.filter((s) => s.category === category);
    return {
      name: category,
      count: categorySkills.length,
      skills: categorySkills,
    };
  });

  // Calculate positions for circular layout
  const getCirclePosition = (index: number, total: number, radius: number) => {
    const angle = (index / total) * Math.PI * 2;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  const totalSkills = skills.length;

  return (
    <div className="space-y-12">
      {/* Bar Chart Style Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h3 className="text-xl font-bold text-cyan flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan" />
          Skills by Category
        </h3>

        {/* Horizontal Bar Chart */}
        <div className="space-y-6">
          {categoryData.map((category, idx) => {
            const percentage = (category.count / totalSkills) * 100;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-white font-semibold">
                    {category.name}
                  </span>
                  <span className="font-mono text-xs text-cyan">
                    {category.count} skills
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-slate/30 rounded-full overflow-hidden border border-cyan/20">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    transition={{ delay: idx * 0.1 + 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-cyan to-magenta rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Bubble/Grid Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h3 className="text-xl font-bold text-magenta flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-magenta" />
          Skill Proficiency Matrix
        </h3>

        {/* Proficiency Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categoryData.map((category, catIdx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: catIdx * 0.1 }}
              viewport={{ once: true }}
              className="p-4 rounded-lg border border-cyan/20 bg-gradient-to-br from-slate/10 to-transparent"
            >
              <h4 className="text-sm font-semibold text-white mb-4 font-mono">
                {category.name}
              </h4>

              <div className="grid grid-cols-3 gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{
                      delay: catIdx * 0.1 + skillIdx * 0.03,
                      type: "spring",
                      stiffness: 300,
                    }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-2 p-2 rounded-md 
                      hover:bg-gradient-to-b hover:from-slate/40 hover:to-transparent
                      transition-all duration-300 cursor-pointer group"
                    title={skill.desc}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300
                        border"
                      style={{
                        background: `linear-gradient(135deg, ${skill.color}15, ${skill.color}05)`,
                        borderColor: `${skill.color}40`,
                      }}
                    >
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={24}
                        height={24}
                        unoptimized
                        className="object-contain"
                      />
                    </div>
                    <p className="text-xs font-semibold text-white text-center line-clamp-2 group-hover:text-cyan transition-colors">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Statistics */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-cyan/10"
      >
        {categoryData.map((category) => (
          <motion.div
            key={category.name}
            whileHover={{ y: -5 }}
            className="text-center p-4 rounded-lg bg-gradient-to-b from-slate/20 to-transparent
              border border-cyan/10 hover:border-cyan/40 transition-all duration-300"
          >
            <p className="font-mono text-2xl font-bold text-cyan mb-1">
              {category.count}
            </p>
            <p className="font-mono text-xs text-grayText uppercase tracking-wider">
              {category.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
