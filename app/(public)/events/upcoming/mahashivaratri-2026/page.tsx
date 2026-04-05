"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { PageHeader } from "@/components/sections/hero-section";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { LotusIcon } from "@/components/icons/spiritual-icons";
import { useLanguage } from "@/lib/language-context";
import {
  Share2,
  Facebook,
  Twitter,
  Mail,
  MessageCircle,
  Link2,
  Check,
  ArrowLeft,
  Calendar,
  PlayCircle,
  X,
} from "lucide-react";

const YOUTUBE_ID = "v1hFUd20arY";
const FALLBACK_URL =
  "https://swamidebanandaashram.org/events/upcoming/mahashivaratri-2026";

// ─── Share Modal ─────────────────────────────────────────────────────────────

function ShareModal({
  isOpen,
  onClose,
  url,
}: {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}) {
  const { t } = useLanguage();
  const p = t.videoTeachingPage;
  const [copied, setCopied] = useState(false);

  const shareText = `${p.title} — ${p.shareText}`;

  const platforms = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      color: "bg-green-500 hover:bg-green-600",
      action: () =>
        window.open(
          `https://wa.me/?text=${encodeURIComponent(`${shareText}\n${url}`)}`,
          "_blank"
        ),
    },
    {
      name: "Facebook",
      icon: Facebook,
      color: "bg-blue-600 hover:bg-blue-700",
      action: () =>
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
          "_blank"
        ),
    },
    {
      name: "X (Twitter)",
      icon: Twitter,
      color: "bg-neutral-900 hover:bg-neutral-800",
      action: () =>
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`,
          "_blank"
        ),
    },
    {
      name: "Email",
      icon: Mail,
      color: "bg-amber-600 hover:bg-amber-700",
      action: () =>
        window.open(
          `mailto:?subject=${encodeURIComponent(p.title)}&body=${encodeURIComponent(`${shareText}\n\n${url}`)}`,
          "_blank"
        ),
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-card shadow-2xl border border-border overflow-hidden">
        {/* Header */}
        <div className="bg-primary/10 px-6 py-5 border-b border-border flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Share2 className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium uppercase tracking-widest text-primary">
                {p.shareModalTitle}
              </span>
            </div>
            <p className="font-serif text-base font-semibold text-foreground line-clamp-2">
              {p.title}
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 mt-0.5 rounded-full p-1 hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={t.common.close}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Share Platforms */}
        <div className="p-6 space-y-4">
          <p className="text-sm text-muted-foreground">{p.shareModalDesc}</p>
          <div className="grid grid-cols-2 gap-3">
            {platforms.map((platform) => (
              <button
                key={platform.name}
                onClick={platform.action}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-white text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${platform.color}`}
              >
                <platform.icon className="h-4 w-4 flex-shrink-0" />
                {platform.name}
              </button>
            ))}
          </div>

          {/* Copy Link */}
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wide">
              {p.copyLink}
            </p>
            <div className="flex items-center gap-2 bg-secondary rounded-xl p-1 pl-3">
              <span className="text-xs text-muted-foreground flex-1 truncate">
                {url}
              </span>
              <button
                onClick={handleCopy}
                className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                  copied
                    ? "bg-green-500 text-white"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    {p.copied}
                  </>
                ) : (
                  <>
                    <Link2 className="h-3.5 w-3.5" />
                    {p.copy}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function MahashivaratriVideoPage() {
  const { t } = useLanguage();
  const p = t.videoTeachingPage;

  const [shareOpen, setShareOpen] = useState(false);
  // Initialise with static fallback — both SSR and first client render match.
  // Updated to real browser URL after mount (hydration-safe).
  const [pageUrl, setPageUrl] = useState(FALLBACK_URL);

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: p.title,
          text: `${p.title} — ${p.shareText}`,
          url: pageUrl,
        });
      } catch {
        setShareOpen(true);
      }
    } else {
      setShareOpen(true);
    }
  };

  return (
    <>
      <ShareModal
        isOpen={shareOpen}
        onClose={() => setShareOpen(false)}
        url={pageUrl}
      />

      <PageHeader
        title={p.pageTitle}
        description={p.pageDescription}
        breadcrumbs={[
          { label: t.common.home, href: "/" },
          { label: t.nav.events, href: "/events" },
          { label: p.breadcrumbUpcoming, href: "/events/upcoming" },
          { label: p.breadcrumbPage, href: "/events/upcoming/mahashivaratri-2026" },
        ]}
      />

      <SectionWrapper variant="white">
        <div className="max-w-4xl mx-auto">

          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
              {p.backToEvents}
            </Link>
          </div>

          {/* Category + Date row */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider text-primary bg-primary/10">
              <PlayCircle className="h-3.5 w-3.5" />
              {p.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 text-primary" />
              {p.date}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight text-balance mb-4">
            {p.title}
          </h1>

          {/* Share Button */}
          <div className="flex items-center gap-3 mb-8">
            <Button
              onClick={handleNativeShare}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent gap-2 transition-all duration-200"
              id="share-teaching-button"
            >
              <Share2 className="h-4 w-4" />
              {p.shareButton}
            </Button>
          </div>

          {/* Divider with lotus */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-border" />
            <LotusIcon className="h-5 w-5 text-primary/40" />
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* YouTube Embed */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-border mb-8 bg-neutral-950">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1&color=white`}
                title={p.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* Caption / Description */}
          <div className="bg-secondary rounded-2xl p-6 md:p-8 mb-8 border border-border">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 mt-0.5 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <LotusIcon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h2 className="font-serif text-lg font-semibold text-foreground mb-1">
                  {p.aboutHeading}
                </h2>
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                  {p.authorLine} • {p.date}
                </span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base">
              {p.caption}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {p.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/8 text-primary border border-primary/20 hover:bg-primary/15 transition-colors cursor-default"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Bottom Share CTA */}
          <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-amber-50/50 border border-primary/20 p-6 md:p-8 text-center">
            <LotusIcon className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
              {p.spreadTitle}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-md mx-auto">
              {p.spreadDesc}
            </p>
            <Button
              onClick={handleNativeShare}
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
              id="share-teaching-bottom-button"
            >
              <Share2 className="h-4 w-4" />
              {p.shareButton}
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Explore More Section */}
      <SectionWrapper variant="cream">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
            {p.continueJourney}
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
            {p.exploreMore}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
            {p.exploreDesc}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/teachings">{p.browseAll}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              <Link href="/events">{p.viewEvents}</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
