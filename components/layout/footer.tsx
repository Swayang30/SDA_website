"use client";

import Link from "next/link";
import {
  Facebook,
  Youtube,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LotusIcon } from "@/components/icons/spiritual-icons";
import { useLanguage } from "@/lib/language-context";

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export function Footer() {
  const { language, t } = useLanguage();

  const footerLinks = {
    about: [
      { title: t.nav.aboutSwamiji, href: "/about/swamiji" },
      { title: t.nav.history, href: "/about/history" },
      { title: t.nav.philosophy, href: "/about/philosophy" },
      { title: t.nav.lineage, href: "/about/lineage" },
    ],
    teachings: [
      { title: t.nav.dailyTeachings, href: "/teachings/daily" },
      { title: t.nav.articles, href: "/teachings/articles" },
      { title: t.nav.audioDiscourses, href: "/teachings/audio" },
      { title: t.nav.videoTeachings, href: "/teachings/videos" },
    ],
    visit: [
      { title: t.nav.contactInfo, href: "/contact" },
      { title: t.nav.visitAshram, href: "/contact/visit" },
      { title: t.nav.accommodation, href: "/contact/accommodation" },
      { title: t.nav.faqs, href: "/contact/faq" },
    ],
    support: [
      { title: t.nav.donate, href: "/donate" },
      { title: t.nav.volunteer, href: "/donate/volunteer" },
      { title: t.nav.transparency, href: "/donate/transparency" },
      { title: t.nav.newsletters, href: "/publications/newsletters" },
    ],
  };

  const ashramName =
    language === "hi"
      ? "स्वामी देबानंद"
      : language === "bn"
        ? "স্বামী দেবানন্দ"
        : "Swami Debananda";

  const ashramLabel =
    language === "hi" ? "आश्रम" : language === "bn" ? "আশ্রম" : "Ashram";

  return (
    <footer className="bg-foreground text-background">
      {/* Spiritual Quote Banner */}
      <div className="bg-primary py-8">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="font-serif text-xl md:text-2xl text-primary-foreground italic">
            "{t.welcome.quote}"
          </p>
          <p className="mt-3 text-primary-foreground/80 text-sm">
            — Swami Debananda
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                <LotusIcon className="h-7 w-7 text-primary" />
              </div>
              <div>
                <p className="font-serif text-lg font-semibold text-background">
                  {ashramName}
                </p>
                <p className="text-xs text-background/60 tracking-wider uppercase">
                  {ashramLabel}
                </p>
              </div>
            </Link>
            <p className="mt-6 text-sm text-background/70 leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a
                href="mailto:info@swamidebanandaashram.org"
                className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@swamidebanandaashram.org
              </a>
              <a
                href="tel:+911234567890"
                className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 123 456 7890
              </a>
              <div className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  {t.footer.address}
                  <br />
                  {t.footer.city}
                  <br />
                  {t.footer.country}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-primary/20 text-background/70 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-background">
                {t.nav.about}
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.about.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-primary transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-background">
                {t.nav.teachings}
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.teachings.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-primary transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-background">
                {t.nav.contact}
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.visit.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-primary transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-background">
                {t.nav.donate}
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-primary transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Donation CTA */}
        <div className="mt-16 rounded-xl bg-primary/10 p-8 text-center">
          <h3 className="font-serif text-2xl text-background">
            {t.cta.supportMission}
          </h3>
          <p className="mt-2 text-background/70 max-w-md mx-auto">
            {t.donatePage.heroDescription}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link href="/donate">{t.nav.donateNow}</Link>
          </Button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Swami Debananda Ashram Trust.{" "}
              {t.footer.allRightsReserved}
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-background/60 hover:text-primary transition-colors"
              >
                {t.footer.privacyPolicy}
              </Link>
              <Link
                href="/terms"
                className="text-sm text-background/60 hover:text-primary transition-colors"
              >
                {t.footer.termsOfService}
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-background/50 font-serif">
              {t.footer.mantra}
            </p>
            <p className="mt-2 text-xs text-background/40 italic">
              {t.footer.mantraTranslation}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
