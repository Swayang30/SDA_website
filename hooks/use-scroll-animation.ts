"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ANIMATION_FROM,
  ANIMATION_TO,
  DEFAULT_SCROLL_TRIGGER,
  DURATION,
  EASE,
  STAGGER,
  type AnimationType,
} from "@/lib/animations";

// Register ScrollTrigger only once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── Options ──────────────────────────────────────────────────────
interface UseScrollAnimationOptions {
  /** Animation type (default: "fade-up") */
  type?: AnimationType;
  /** Duration override */
  duration?: number;
  /** Easing override */
  ease?: string;
  /** Delay before animation starts */
  delay?: number;
  /** ScrollTrigger start position (default: "top 85%") */
  start?: string;
  /** If true, animation fires only once (default: true) */
  once?: boolean;
  /** Disable the animation entirely */
  disabled?: boolean;
}

/**
 * Attaches a GSAP scroll-reveal animation to a single element.
 *
 * Usage:
 *   const ref = useScrollAnimation<HTMLDivElement>({ type: "fade-up" });
 *   return <div ref={ref}>…</div>;
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
) {
  const ref = useRef<T>(null);

  const {
    type = "fade-up",
    duration = DURATION.reveal,
    ease = EASE.smooth,
    delay = 0,
    start = DEFAULT_SCROLL_TRIGGER.start,
    once = true,
    disabled = false,
  } = options;

  useEffect(() => {
    if (disabled || !ref.current) return;

    const el = ref.current;
    const fromVars = ANIMATION_FROM[type];
    const toVars = ANIMATION_TO[type];

    // Set initial state immediately (prevents layout flash)
    gsap.set(el, fromVars);

    const tween = gsap.to(el, {
      ...toVars,
      duration,
      ease,
      delay,
      scrollTrigger: {
        trigger: el,
        start,
        once,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled]);

  return ref;
}

// ─── Staggered Children ──────────────────────────────────────────

interface UseStaggerAnimationOptions {
  /** Animation type for each child (default: "fade-up") */
  type?: AnimationType;
  /** Duration per child */
  duration?: number;
  /** Easing */
  ease?: string;
  /** Stagger amount between children (default: STAGGER.cards) */
  stagger?: number;
  /** CSS selector for children inside the container (default: "> *") */
  childSelector?: string;
  /** ScrollTrigger start (default: ":scope > *") */
  start?: string;
  /** Fire only once */
  once?: boolean;
  /** Disable animation */
  disabled?: boolean;
}

/**
 * Attaches a staggered GSAP scroll-reveal to children of a container.
 *
 * Usage:
 *   const ref = useStaggerAnimation<HTMLDivElement>({ stagger: 0.12 });
 *   return <div ref={ref}><Card/><Card/><Card/></div>;
 */
export function useStaggerAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseStaggerAnimationOptions = {}
) {
  const ref = useRef<T>(null);

  const {
    type = "fade-up",
    duration = DURATION.reveal,
    ease = EASE.smooth,
    stagger = STAGGER.cards,
    childSelector = ":scope > *",
    start = DEFAULT_SCROLL_TRIGGER.start,
    once = true,
    disabled = false,
  } = options;

  useEffect(() => {
    if (disabled || !ref.current) return;

    const container = ref.current;
    const children = container.querySelectorAll(childSelector);
    if (children.length === 0) return;

    const fromVars = ANIMATION_FROM[type];
    const toVars = ANIMATION_TO[type];

    gsap.set(children, fromVars);

    const tween = gsap.to(children, {
      ...toVars,
      duration,
      ease,
      stagger,
      scrollTrigger: {
        trigger: container,
        start,
        once,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled]);

  return ref;
}
