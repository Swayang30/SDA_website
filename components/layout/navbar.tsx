"use client";

import { useState, useEffect, useRef, useLayoutEffect, useCallback } from "react";
import Link from "next/link";
import { Search, Globe, Check, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { languages } from "@/lib/navigation";
import { LotusIcon } from "@/components/icons/spiritual-icons";
import { cn } from "@/lib/utils";
import { SearchModal } from "./search-modal";
import { useLanguage } from "@/lib/language-context";
import type { Language } from "@/lib/translations";

// Card color palette for the CardNav-style animation
const cardColors = [
  { bg: "#c06014", text: "#fff" },  // warm saffron
  { bg: "#a0522d", text: "#fff" },  // deep sienna
  { bg: "#8b4513", text: "#fff" },  // saddle brown
  { bg: "#b5651d", text: "#fff" },  // golden ochre
  { bg: "#9b4f2b", text: "#fff" },  // terracotta
  { bg: "#7a4a2a", text: "#fff" },  // earthy brown
  { bg: "#6b3a2a", text: "#fff" },  // maroon earth
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // CardNav animation state
  const [isCardNavOpen, setIsCardNavOpen] = useState(false);
  const [isCardNavExpanded, setIsCardNavExpanded] = useState(false);
  const cardNavRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  const calculateCardNavHeight = useCallback(() => {
    const navEl = cardNavRef.current;
    if (!navEl) return 0;
    const contentEl = navEl.querySelector('.cardnav-content') as HTMLElement;
    if (contentEl) {
      const clone = contentEl.cloneNode(true) as HTMLElement;
      clone.style.visibility = 'hidden';
      clone.style.position = 'absolute';
      clone.style.height = 'auto';
      clone.style.pointerEvents = 'none';
      navEl.appendChild(clone);
      const h = clone.scrollHeight + 16;
      navEl.removeChild(clone);
      return h;
    }
    return 300;
  }, []);

  const createCardNavTimeline = useCallback(() => {
    const navEl = cardNavRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 0, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateCardNavHeight,
      duration: 0.4,
      ease: 'power3.out',
    });

    tl.to(
      cardsRef.current,
      { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out', stagger: 0.08 },
      '-=0.1'
    );

    return tl;
  }, [calculateCardNavHeight]);

  useLayoutEffect(() => {
    const tl = createCardNavTimeline();
    tlRef.current = tl;
    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [createCardNavTimeline]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;
      if (isCardNavExpanded) {
        const newHeight = calculateCardNavHeight();
        gsap.set(cardNavRef.current, { height: newHeight });
        tlRef.current.kill();
        const newTl = createCardNavTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createCardNavTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isCardNavExpanded, calculateCardNavHeight, createCardNavTimeline]);

  const toggleCardNav = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isCardNavExpanded) {
      setIsCardNavOpen(true);
      setIsCardNavExpanded(true);
      tl.play(0);
    } else {
      setIsCardNavOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsCardNavExpanded(false));
      tl.reverse();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Build navigation from translations
  const mainNavigation = [
    {
      title: t.nav.about,
      children: [
        { title: t.nav.aboutSwamiji, href: "/about/swamiji", description: "" },
        { title: t.nav.philosophy, href: "/about/philosophy", description: "" },
        { title: t.nav.message, href: "/about/message", description: "" },
        { title: t.nav.history, href: "/about/history", description: "" },
        { title: t.nav.lineage, href: "/about/lineage", description: "" },
      ],
    },
    {
      title: t.nav.teachings,
      children: [
        { title: t.nav.dailyTeachings, href: "/teachings/daily", description: "" },
        { title: t.nav.articles, href: "/teachings/articles", description: "" },
        { title: t.nav.vedanta, href: "/teachings/vedanta", description: "" },
        { title: t.nav.meditation, href: "/teachings/meditation", description: "" },
        { title: t.nav.audioDiscourses, href: "/teachings/audio", description: "" },
        { title: t.nav.videoTeachings, href: "/teachings/videos", description: "" },
      ],
    },
    {
      title: t.nav.events,
      children: [
        { title: t.nav.upcomingEvents, href: "/events/upcoming", description: "" },
        { title: t.nav.pastEvents, href: "/events/past", description: "" },
        { title: t.nav.retreats, href: "/events/retreats", description: "" },
        { title: t.nav.festivals, href: "/events/festivals", description: "" },
        { title: t.nav.calendar, href: "/events/calendar", description: "" },
      ],
    },
    {
      title: t.nav.publications,
      children: [
        { title: t.nav.books, href: "/publications/books", description: "" },
        { title: t.nav.articlesAndPdfs, href: "/publications/articles", description: "" },
        { title: t.nav.downloads, href: "/publications/downloads", description: "" },
        { title: t.nav.newsletters, href: "/publications/newsletters", description: "" },
      ],
    },
    {
      title: t.nav.donate,
      children: [
        { title: t.nav.donateNow, href: "/donate", description: "" },
        { title: t.nav.donationChannels, href: "/donate/channels", description: "" },
        { title: t.nav.impact, href: "/donate/impact", description: "" },
        { title: t.nav.volunteer, href: "/donate/volunteer", description: "" },
        { title: t.nav.transparency, href: "/donate/transparency", description: "" },
      ],
    },
    {
      title: t.nav.media,
      children: [
        { title: t.nav.photoGallery, href: "/media/photos", description: "" },
        { title: t.nav.videoGallery, href: "/media/videos", description: "" },
        { title: t.nav.ashramLife, href: "/media/life", description: "" },
        { title: t.nav.mediaMentions, href: "/media/mentions", description: "" },
      ],
    },
    {
      title: t.nav.contact,
      children: [
        { title: t.nav.contactInfo, href: "/contact", description: "" },
        { title: t.nav.visitAshram, href: "/contact/visit", description: "" },
        { title: t.nav.location, href: "/contact/location", description: "" },
        { title: t.nav.accommodation, href: "/contact/accommodation", description: "" },
        { title: t.nav.faqs, href: "/contact/faqs", description: "" },
      ],
    },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-card/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="flex h-20 items-center justify-between">
            {/* Left: CardNav Hamburger Toggle */}
            <div className="flex items-center">
              <button
                className="group flex flex-col items-center justify-center gap-[6px] cursor-pointer p-2 rounded-md hover:bg-primary/5 transition-colors"
                onClick={toggleCardNav}
                aria-label={isCardNavExpanded ? 'Close menu' : 'Open menu'}
              >
                <div
                  className={cn(
                    "w-[24px] h-[2px] bg-foreground/80 transition-all duration-300 ease-linear origin-center group-hover:opacity-75",
                    isCardNavOpen && "translate-y-[4px] rotate-45"
                  )}
                />
                <div
                  className={cn(
                    "w-[24px] h-[2px] bg-foreground/80 transition-all duration-300 ease-linear origin-center group-hover:opacity-75",
                    isCardNavOpen && "-translate-y-[4px] -rotate-45"
                  )}
                />
              </button>
            </div>

            {/* Center: Logo + Name */}
            <Link href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <LotusIcon className="h-6 w-6 text-primary" />
              </div>
              <span className="hidden sm:inline font-serif text-lg font-semibold text-foreground whitespace-nowrap">
                {language === "hi" ? "स्वामी देबानंद आश्रम" : language === "bn" ? "স্বামী দেবানন্দ আশ্রম" : "Swami Debananda Ashram"}
              </span>
            </Link>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2">
              {/* Search Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
                className="text-foreground/70 hover:text-primary"
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">{t.nav.search}</span>
              </Button>

              {/* Language Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-foreground/70 hover:text-primary"
                  >
                    <Globe className="h-5 w-5" />
                    <span className="sr-only">{t.nav.changeLanguage}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as Language)}
                      className={cn(
                        "cursor-pointer flex items-center justify-between",
                        language === lang.code && "bg-primary/10"
                      )}
                    >
                      <div className="flex flex-col">
                        <span className="font-medium">{lang.nativeName}</span>
                        <span className="text-xs text-muted-foreground">
                          {lang.name}
                        </span>
                      </div>
                      {language === lang.code && (
                        <Check className="h-4 w-4 text-primary" />
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Donate Button */}
              <Button
                asChild
                className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="/donate">{t.nav.donateNow}</Link>
              </Button>
            </div>
          </div>

          {/* CardNav Expandable Panel */}
          <div
            ref={cardNavRef}
            className={cn(
              "absolute left-0 right-0 top-20 z-40 rounded-b-xl shadow-lg overflow-hidden",
              isScrolled ? "bg-card/95 backdrop-blur-md" : "bg-card/95 backdrop-blur-md"
            )}
            style={{ height: 0 }}
          >
            <div
              className={cn(
                "cardnav-content p-3 flex flex-wrap gap-3 justify-center",
                isCardNavExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
              )}
            >
              {mainNavigation.map((item, idx) => (
                <div
                  key={`card-${item.title}-${idx}`}
                  ref={setCardRef(idx)}
                  className="nav-card select-none relative flex flex-col gap-2 p-4 rounded-xl min-w-[140px] flex-[1_1_auto] max-w-[200px]"
                  style={{
                    backgroundColor: cardColors[idx % cardColors.length].bg,
                    color: cardColors[idx % cardColors.length].text,
                  }}
                >
                  <div className="font-medium tracking-tight text-lg mb-1">
                    {item.title}
                  </div>
                  <div className="flex flex-col gap-[2px] mt-auto">
                    {item.children?.map((child, i) => (
                      <Link
                        key={`${child.href}-${i}`}
                        href={child.href}
                        className="inline-flex items-center gap-1 text-sm no-underline transition-opacity duration-300 hover:opacity-75"
                        style={{ color: cardColors[idx % cardColors.length].text }}
                        onClick={() => {
                          setIsCardNavOpen(false);
                          const tl = tlRef.current;
                          if (tl) {
                            tl.eventCallback('onReverseComplete', () => setIsCardNavExpanded(false));
                            tl.reverse();
                          }
                        }}
                      >
                        <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
