"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Search, Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { languages } from "@/lib/navigation";
import { LotusIcon } from "@/components/icons/spiritual-icons";
import { cn } from "@/lib/utils";
import { SearchModal } from "./search-modal";
import { useLanguage } from "@/lib/language-context";
import type { Language } from "@/lib/translations";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

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
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <LotusIcon className="h-7 w-7 text-primary" />
              </div>
              <div className="hidden sm:block">
                <p className="font-serif text-lg font-semibold text-foreground leading-tight">
                  {language === "hi" ? "स्वामी देबानंद" : language === "bn" ? "স্বামী দেবানন্দ" : "Swami Debananda"}
                </p>
                <p className="text-xs text-muted-foreground tracking-wider uppercase">
                  {language === "hi" ? "आश्रम" : language === "bn" ? "আশ্রম" : "Ashram"}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {mainNavigation.map((item) => (
                <DropdownMenu key={item.title}>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-primary/5">
                      {item.title}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="w-72 bg-card p-2"
                  >
                    {item.children?.map((child) => (
                      <DropdownMenuItem key={child.href} asChild>
                        <Link
                          href={child.href}
                          className="flex flex-col items-start gap-1 p-3 rounded-md cursor-pointer"
                        >
                          <span className="font-medium text-foreground">
                            {child.title}
                          </span>
                          {child.description && (
                            <span className="text-xs text-muted-foreground">
                              {child.description}
                            </span>
                          )}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
            </div>

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

              {/* Mobile Menu Toggle */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden text-foreground"
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-96 bg-card">
                  <SheetHeader>
                    <SheetTitle className="flex items-center gap-3">
                      <LotusIcon className="h-8 w-8 text-primary" />
                      <span className="font-serif">
                        {language === "hi" ? "स्वामी देबानंद आश्रम" : language === "bn" ? "স্বামী দেবানন্দ আশ্রম" : "Swami Debananda Ashram"}
                      </span>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="mt-8">
                    <Accordion type="single" collapsible className="w-full">
                      {mainNavigation.map((item) => (
                        <AccordionItem key={item.title} value={item.title}>
                          <AccordionTrigger className="text-foreground p-3 hover:text-primary">
                            {item.title}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col gap-2 pl-4">
                              {item.children?.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                  {child.title}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                    
                    {/* Mobile Language Switcher */}
                    <div className="mt-6 pt-6 pl-3 border-t">
                      <p className="text-sm font-medium text-foreground mb-3">{t.nav.changeLanguage}</p>
                      <div className="flex flex-wrap gap-2">
                        {languages.map((lang) => (
                          <Button
                            key={lang.code}
                            variant={language === lang.code ? "default" : "outline"}
                            size="sm"
                            onClick={() => setLanguage(lang.code as Language)}
                            className={cn(
                              language === lang.code 
                                ? "bg-primary text-primary-foreground" 
                                : "border-primary text-primary hover:bg-primary/10 bg-transparent"
                            )}
                          >
                            {lang.nativeName}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t">
                      <Button
                        asChild
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <Link
                          href="/donate"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {t.cta.supportMission}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </header>

      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
