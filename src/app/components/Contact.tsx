"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harshdhoriyani/",
    icon: "https://cdn.simpleicons.org/linkedin/0A66C2",
    bg: "rgba(10,102,194,0.12)",
    border: "rgba(10,102,194,0.35)",
  },
  {
    label: "GitHub",
    href: "https://github.com/HarshDhoriyani",
    icon: "https://cdn.simpleicons.org/github/A0AAB0",
    bg: "rgba(160,170,176,0.10)",
    border: "rgba(160,170,176,0.25)",
  },
];

const EMAIL = "harshdhoriyani03@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="text-center">
      <p className="font-mono text-cyan text-xs tracking-[0.3em] mb-2 opacity-70">
        {"// 06. LET&apos;S CONNECT"}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Get In Touch</h2>
      <div className="section-divider mx-auto" />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-grayText text-base max-w-lg mx-auto leading-relaxed mb-12"
      >
        Have a project, an internship opportunity, or just want to say hello?
        My inbox is always open.
      </motion.p>

      {/* Email block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-4 bg-slate/60 backdrop-blur-sm border border-cyan/20
          rounded-2xl px-6 py-4 mb-8 hover:border-cyan/50 transition-all duration-300"
      >
        {/* Gmail logo */}
        <Image
          src="https://cdn.simpleicons.org/gmail/EA4335"
          alt="Gmail"
          width={20}
          height={20}
          unoptimized
          className="shrink-0"
        />
        <a
          href={`mailto:${EMAIL}`}
          className="font-mono text-cyan text-sm md:text-base tracking-wide hover:underline"
        >
          {EMAIL}
        </a>
        <button
          onClick={handleCopy}
          className="font-mono text-xs border border-cyan/30 text-grayText px-3 py-1 rounded
            hover:border-cyan hover:text-cyan transition-all duration-200 whitespace-nowrap"
        >
          {copied ? "✓ Copied!" : "Copy"}
        </button>
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 mb-20"
      >
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 backdrop-blur-sm rounded-xl px-6 py-3
              hover:shadow-[0_0_20px_rgba(0,240,255,0.08)] transition-all duration-300 group"
            style={{ background: s.bg, border: `1px solid ${s.border}` }}
          >
            <Image
              src={s.icon}
              alt={s.label}
              width={22}
              height={22}
              unoptimized
              className="object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-semibold text-grayText group-hover:text-white transition-colors text-sm">
              {s.label}
            </span>
          </a>
        ))}
      </motion.div>

      {/* Footer */}
      <div className="border-t border-cyan/10 pt-8">
        <p className="font-mono text-xs text-grayText opacity-50 tracking-widest">
          © {new Date().getFullYear()} Harsh Dhoriyani — Crafted with obsession.
        </p>
      </div>
    </div>
  );
}