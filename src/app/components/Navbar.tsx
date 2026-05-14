"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("hero");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
            },
            { threshold: 0.4 }
        );
        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-17 transition-all duration-300 ${scrolled ? "bg-charcoal/80 backdrop-blur-md border-b border-cyan/10" : "bg-transparent"}`}
            >
                {/* Logo */}
                <a href="#hero" className="font-mono text-cyan text-xl font-bold tracking-widest">
                    HD<span className="text-magenta">.</span>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`font-mono text-xs tracking-[0.2em] uppercase transition-colors duration-200 ${active === link.href.slice(1) ? "text-cyan" : "text-grayText hover:text-white"}`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="mailto:harshdhoriyani03@gmail.com"
                        className="font-mono text-xs tracking-widest border border-cyan/50 text-cyan px-4 py-2 rounded hover:bg-cyan hover:text-charcoal transition-all duration-200"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-cyan text-xl font-mono"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </motion.nav>

            {/* Mobile full-screen menu */} 
            <AnimatePresence>
                {menuOpen && (
                    <motion.div 
                        initial={{opacity: 0, x: "100%"}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: "100%"}}
                        transition={{duration: 0.3, ease: "easeInOut"}}
                        className="fixed inset-0 z-40 bg-charcoal flex flex-col items-center justify-center gap-10"
                    >
                        {links.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                initial={{opacity: 0, y: 20}}
                                animate={{ opacity: 1, y: 0}}
                                transition={{ delay: i * 0.07}}
                                className="text-3xl font-bold text-grayText hover:text-cyan transition-colors"
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <motion.a
                            href="mailto:harshdhoriyani03@gmail.com"
                            initial={{opacity: 0, y: 20}}
                            animate={{ opacity: 1, y: 0}}
                            transition={{ delay: links.length * 0.07}}
                            className="font-mono text-sm border border-cyan/50 text-cyan px-6 py-3 rounded mt-4 hover:bg-cyan hover:text-charcoal transition-all"
                        >
                            Hire Me
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}