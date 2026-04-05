"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { LotusIcon } from "@/components/icons/spiritual-icons";
import TextType from "@/components/TextType";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  backgroundImage?: string;
  showScrollIndicator?: boolean;
  overlay?: "light" | "dark" | "gradient";
  align?: "left" | "center";
  size?: "default" | "large" | "small";
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
  showScrollIndicator = false,
  overlay = "gradient",
  align = "center",
  size = "default",
}: HeroSectionProps) {
  const sizeClasses = {
    small: "min-h-[50vh] py-24",
    default: "min-h-[80vh] py-32",
    large: "min-h-screen py-40",
  };

  const overlayClasses = {
    light: "bg-background/60",
    dark: "bg-foreground/50",
    gradient:
      "bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/70",
  };

  return (
    <section
      className={`relative flex items-center justify-center ${sizeClasses[size]}`}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <img
            src={backgroundImage || "/placeholder.svg"}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
        </div>
      )}

      {/* Content */}
      <div
        className={`relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 ${align === "center" ? "text-center" : "text-center"
          }`}
      >
        {subtitle && (
          <div className="mb-6 flex items-center justify-center gap-3">
            <LotusIcon className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              {subtitle}
            </span>
            <LotusIcon className="h-6 w-6 text-primary" />
          </div>
        )}

        <h1 className="font-serif text-4xl font-semibold tracking-tight text-background sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          <TextType
            text={[title]}
            as="span"
            typingSpeed={55}
            pauseDuration={1500}
            showCursor
            cursorCharacter="|"
            deletingSpeed={50}
            loop={false}
          />
        </h1>

        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-lg text-background/80 leading-relaxed text-pretty">
            {description}
          </p>
        )}

        {(primaryAction || secondaryAction) && (
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {primaryAction && (
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 text-base"
              >
                <Link href={primaryAction.href}>{primaryAction.label}</Link>
              </Button>
            )}
            {secondaryAction && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-background/30 text-background hover:bg-background/10 px-8 text-base bg-transparent"
              >
                <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-background/60" />
        </div>
      )}
    </section>
  );
}

// Page Header for inner pages
interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href: string }[];
  backgroundImage?: string;
}

export function PageHeader({
  title,
  description,
  breadcrumbs,
  backgroundImage,
}: PageHeaderProps) {
  return (
    <section className="relative py-24 md:py-32 bg-secondary">
      {backgroundImage && (
        <div className="absolute inset-0">
          <img
            src={backgroundImage || "/placeholder.svg"}
            alt=""
            className="h-full w-full object-cover opacity-20"
          />
        </div>
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center gap-2">
                  {index > 0 && (
                    <span className="text-muted-foreground">/</span>
                  )}
                  <Link
                    href={crumb.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {crumb.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
