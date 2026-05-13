"use client";
import { motion } from "framer-motion";

/* ── Inline SVG images (no icon fonts) ─────────────────── */
const LightningImg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="#00F0FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const LayersImg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="#00F0FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const MapPinImg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="#00F0FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const AwardImg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="#00F0FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const BriefcaseImg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="#00F0FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const facts = [
  { Image: LightningImg, label: "Focus",    value: "Full Stack + AI/ML"      },
  { Image: LayersImg,    label: "Stack",    value: "React · Spring · Python"  },
  { Image: MapPinImg,    label: "Location", value: "India"                    },
  { Image: AwardImg,     label: "Degree",   value: "B.Tech CS (ongoing)"      },
  { Image: BriefcaseImg, label: "Open to",  value: "Internships & Roles"      },
];

export default function About() {
  return (
    <div>
      <p className="font-mono text-cyan text-xs tracking-[0.3em] mb-2 opacity-70">
        {"// 03. ABOUT ME"}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-white">Who I Am</h2>
      <div className="section-divider" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl space-y-6 text-grayText text-base leading-relaxed"
      >
        <p>
          I&apos;m{" "}
          <span className="text-white font-semibold">Harsh Dhoriyani</span>, a Full Stack
          &amp; AI/ML Developer passionate about shipping products that feel as good as they
          look. I thrive at the intersection of clean backend architecture and pixel-perfect
          frontends.
        </p>
        <p>
          From building community reporting platforms with real-time geolocation to
          collaborating with ML teams on health-tech UIs, I bring a holistic perspective to
          every project — caring equally about code quality, user experience, and performance.
        </p>
        <p>
          When I&apos;m not coding, I&apos;m exploring LLM fine-tuning, contributing to open
          source, or chasing the next interesting problem.
        </p>

        {/* Facts as text */}
        <div className="space-y-3 pt-4 border-t border-cyan/10">
          {facts.map(({ Image: FactImage, label, value }) => (
            <div key={label} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                <FactImage />
              </div>
              <div>
                <span className="font-mono text-xs text-cyan tracking-wider uppercase">{label}:</span>
                <span className="text-white ml-2 font-medium">{value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 border border-cyan/30 rounded-full px-4 py-2 mt-4">
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
          <span className="font-mono text-xs text-cyan tracking-wider">
            Available for opportunities
          </span>
        </div>
      </motion.div>
    </div>
  );
}