"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  as?: "section" | "div" | "article";
  variant?: "default" | "cream" | "white" | "primary";
}

export function SectionWrapper({
  children,
  className,
  containerClassName,
  id,
  as: Component = "section",
  variant = "default",
}: SectionWrapperProps) {
  const variantStyles = {
    default: "bg-background",
    cream: "bg-secondary",
    white: "bg-card",
    primary: "bg-primary text-primary-foreground",
  };

  return (
    <Component
      id={id}
      className={cn(
        "py-16 md:py-24",
        variantStyles[variant],
        className
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
          containerClassName
        )}
      >
        {children}
      </div>
    </Component>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
