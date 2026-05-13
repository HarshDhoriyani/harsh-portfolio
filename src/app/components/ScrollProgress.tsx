"use client";
import { useEffect } from "react";

export default function ScrollProgress() {
    useEffect(() => {
        const bar = document.getElementById("scroll-progress");
        const onScroll = () => {
            const scrolled = window.scrollY;
            const total = document.body.scrollHeight - window.innerHeight;
            const pct = total > 0 ? (scrolled / total) * 100 : 0;
            if (bar) bar.style.width = `${pct}%`;
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return <div id="scroll-progress" />;
}