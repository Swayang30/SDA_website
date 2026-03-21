"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Initial state
    gsap.set(el, { opacity: 0, y: 15 });

    // Animate in
    requestAnimationFrame(() => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        clearProps: "all", // Remove inline styles after animation to prevent performance issues and layout bugs
      });
    });

  }, [pathname]); // Re-run animation if pathname happens to trigger the same template

  return (
    <div ref={containerRef} style={{ opacity: 0, transform: "translateY(15px)" }}>
      {children}
    </div>
  );
}
