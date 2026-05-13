"use client";
import { useEffect } from "react";

export default function CursorGlow() {
    useEffect(() => {
        const dot = document.getElementById("cursor-dot");
        const ring = document.getElementById("cursor-ring");

        let ringX = 0, ringY = 0;
        let mouseX = 0, mouseY = 0;

        const onMove = (e : MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (dot) {
                dot.style.left = `${mouseX}px`;
                dot.style.top = `${mouseY}px`;
            }
        };

        const animateRing = () => {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            if (ring) {
                ring.style.left = `${ringX}px`;
                ring.style.top = `${ringY}px`;
            }
            requestAnimationFrame(animateRing);
        };

        window.addEventListener("mousemove", onMove);
        animateRing();
        return () => window.removeEventListener("mousemove", onMove);
    }, []);

    return (
        <>
            <div id="cursor-dot" />
            <div id="cursor-ring" />
        </>
    );
}