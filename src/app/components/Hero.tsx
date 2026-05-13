"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "AI / ML Engineer",
  "Software Architect",
  "Open Source Builder",
];

const stats = [
  { label: "Projects Built",  value: 10, suffix: "+" },
  { label: "Technologies",    value: 26, suffix: "+" },
  { label: "Commits (2024)",  value: 300, suffix: "+" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target]);

  return <>{count}{suffix}</>;
}

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [roleIdx,   setRoleIdx]   = useState(0);
  const [charIdx,   setCharIdx]   = useState(0);
  const [deleting,  setDeleting]  = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), 75);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), 38);
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDeleting(false);
      setRoleIdx((r) => (r + 1) % roles.length);
    }

    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(0,240,255,0.07) 0%, transparent 70%)" }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-mono text-xs tracking-[0.4em] text-cyan mb-6 uppercase"
        >
          {"// 01. Hello World"}
        </motion.p>

        {/* Glitch name */}
        <h1
          className="glitch text-5xl sm:text-7xl md:text-8xl font-extrabold text-white leading-none mb-4"
          data-text="HARSH DHORIYANI"
        >
          HARSH DHORIYANI
        </h1>

        {/* Typewriter role */}
        <div className="h-10 flex items-center justify-center mb-6">
          <span className="text-xl md:text-2xl font-mono text-cyan">
            {displayed}
            <span className="cursor-blink text-magenta">|</span>
          </span>
        </div>

        {/* Sub-line */}
        <p className="max-w-xl text-grayText text-base md:text-lg leading-relaxed mb-10">
          Building immersive digital experiences with clean architecture,
          cutting-edge AI, and obsessive attention to craft.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a          
            href="#work"
            className="px-7 py-3 bg-cyan text-charcoal font-bold font-mono text-sm rounded
              hover:bg-white transition-all duration-200 hover:shadow-[0_0_24px_rgba(0,240,255,0.4)]"
            >
            View Work →
          </a>
          <a
            href="https://github.com/HarshDhoriyani"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 border border-cyan/50 text-cyan font-mono text-sm rounded
              hover:bg-cyan/10 transition-all duration-200"
          >
            GitHub ↗
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.15 }}
              className="flex flex-col items-center"
            >
              <span className="text-4xl md:text-5xl font-extrabold text-cyan">
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </span>
              <span className="font-mono text-xs tracking-widest text-grayText mt-1 uppercase">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-widest text-grayText uppercase">Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-cyan to-transparent" />
      </motion.div>
    </section>
  );
}