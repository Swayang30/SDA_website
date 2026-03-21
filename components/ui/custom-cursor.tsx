"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Only run on non-touch devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    // Set initial position
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    const xToCursor = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power2.out" });
    const yToCursor = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power2.out" });
    
    const xToFollower = gsap.quickTo(follower, "x", { duration: 0.6, ease: "power3.out" });
    const yToFollower = gsap.quickTo(follower, "y", { duration: 0.6, ease: "power3.out" });

    const onMouseMove = (e: MouseEvent) => {
      xToCursor(e.clientX);
      yToCursor(e.clientY);
      xToFollower(e.clientX);
      yToFollower(e.clientY);
    };

    const attachHoverEvents = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, input[type='button'], input[type='submit'], .hover-target"
      );

      const onMouseEnter = () => {
        gsap.to(follower, {
          scale: 1.5,
          opacity: 0.5,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(cursor, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
        });
      };

      const onMouseLeave = () => {
        gsap.to(follower, {
          scale: 1,
          opacity: 0.3,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(cursor, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
        });
      };

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnter);
        el.addEventListener("mouseleave", onMouseLeave);
      });

      return () => {
        interactiveElements.forEach((el) => {
          el.removeEventListener("mouseenter", onMouseEnter);
          el.removeEventListener("mouseleave", onMouseLeave);
        });
      };
    };

    window.addEventListener("mousemove", onMouseMove);
    
    // Slight delay to ensure elements are rendered before attaching listeners
    const timeoutId = setTimeout(attachHoverEvents, 500);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      clearTimeout(timeoutId);
    };
  }, [pathname]); // Re-attach listeners when path changes

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2.5 w-2.5 rounded-full bg-primary mix-blend-multiply hidden md:block"
        style={{ willChange: "transform" }}
      />
      <div
        ref={followerRef}
        className="pointer-events-none fixed left-0 top-0 z-[90] h-10 w-10 rounded-full border border-primary bg-primary/10 opacity-30 mix-blend-multiply hidden md:block transition-colors"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
