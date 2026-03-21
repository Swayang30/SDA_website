/**
 * Global Animation Configuration
 * Unified GSAP presets for the Swami Debananda Ashram website.
 * All animations share a calm, spiritual aesthetic.
 */

// ─── Easing Presets ───────────────────────────────────────────────
export const EASE = {
  /** Smooth, gentle reveal — default for scroll animations */
  smooth: "power2.out",
  /** Slightly more pronounced start — good for cards */
  gentle: "power3.out",
  /** Very soft entrance — good for hero text */
  soft: "power1.out",
  /** Elastic-style subtle bounce (use sparingly) */
  bounce: "back.out(1.2)",
} as const;

// ─── Duration Presets ─────────────────────────────────────────────
export const DURATION = {
  /** Fast micro-interactions (hover, focus) */
  fast: 0.3,
  /** Standard transition */
  normal: 0.6,
  /** Scroll-reveal sections */
  reveal: 1.0,
  /** Slow, majestic reveals (hero, large elements) */
  slow: 1.4,
} as const;

// ─── Stagger Presets ──────────────────────────────────────────────
export const STAGGER = {
  /** Cards in a grid */
  cards: 0.12,
  /** List items / schedule rows */
  list: 0.08,
  /** Stats counters */
  stats: 0.15,
} as const;

// ─── Scroll Animation "From" States ──────────────────────────────
export type AnimationType =
  | "fade-up"
  | "fade-in"
  | "slide-left"
  | "slide-right"
  | "scale-in";

export const ANIMATION_FROM: Record<
  AnimationType,
  gsap.TweenVars
> = {
  "fade-up": { opacity: 0, y: 40 },
  "fade-in": { opacity: 0 },
  "slide-left": { opacity: 0, x: -60 },
  "slide-right": { opacity: 0, x: 60 },
  "scale-in": { opacity: 0, scale: 0.92 },
};

// ─── Scroll Animation "To" States ────────────────────────────────
export const ANIMATION_TO: Record<
  AnimationType,
  gsap.TweenVars
> = {
  "fade-up": { opacity: 1, y: 0 },
  "fade-in": { opacity: 1 },
  "slide-left": { opacity: 1, x: 0 },
  "slide-right": { opacity: 1, x: 0 },
  "scale-in": { opacity: 1, scale: 1 },
};

// ─── Default ScrollTrigger Config ─────────────────────────────────
export const DEFAULT_SCROLL_TRIGGER = {
  start: "top 85%",
  end: "bottom 20%",
  once: true,
} as const;

// ─── Hover Animation Presets ──────────────────────────────────────
export const HOVER = {
  /** Subtle card lift */
  cardLift: {
    y: -4,
    scale: 1.02,
    duration: DURATION.fast,
    ease: EASE.smooth,
  },
  /** Card return to rest */
  cardRest: {
    y: 0,
    scale: 1,
    duration: DURATION.fast,
    ease: EASE.smooth,
  },
  /** Button subtle scale */
  buttonLift: {
    scale: 1.04,
    duration: 0.25,
    ease: EASE.smooth,
  },
  /** Button rest */
  buttonRest: {
    scale: 1,
    duration: 0.25,
    ease: EASE.smooth,
  },
} as const;
