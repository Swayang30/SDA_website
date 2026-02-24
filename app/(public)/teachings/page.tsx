import { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/hero-section";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { TeachingCard } from "@/components/cards/teaching-card";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Video, Headphones, BookOpen, Calendar, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Teachings",
  description:
    "Access the spiritual teachings of Swami Debananda - articles, videos, audio discourses, and meditation guidance.",
};

const teachingCategories = [
  {
    title: "Daily Teachings",
    description: "Fresh wisdom and reflections shared daily to guide your spiritual practice",
    href: "/teachings/daily",
    icon: Calendar,
    count: "365+ teachings",
  },
  {
    title: "Articles & Essays",
    description: "In-depth explorations of Vedantic philosophy and spiritual topics",
    href: "/teachings/articles",
    icon: FileText,
    count: "150+ articles",
  },
  {
    title: "Vedanta & Scriptures",
    description: "Commentaries on Upanishads, Bhagavad Gita, and other sacred texts",
    href: "/teachings/vedanta",
    icon: BookOpen,
    count: "80+ commentaries",
  },
  {
    title: "Meditation & Sadhana",
    description: "Practical guidance for meditation, pranayama, and daily spiritual practice",
    href: "/teachings/meditation",
    icon: Sparkles,
    count: "60+ guides",
  },
  {
    title: "Audio Discourses",
    description: "Listen to Swamiji's talks and discourses on various spiritual topics",
    href: "/teachings/audio",
    icon: Headphones,
    count: "200+ hours",
  },
  {
    title: "Video Teachings",
    description: "Watch recorded satsangs, lectures, and guided meditations",
    href: "/teachings/videos",
    icon: Video,
    count: "100+ videos",
  },
];

const featuredTeachings = [
  {
    title: "The Essence of Vedanta: Understanding Non-Duality",
    excerpt:
      "An introduction to Advaita Vedanta and its practical application in daily life. Learn how the ancient teachings of non-duality can transform your understanding of self and reality.",
    href: "/teachings/vedanta/essence-of-vedanta",
    type: "article" as const,
    duration: "15 min read",
    date: "January 28, 2026",
    image: "/images/meditation-hall.jpg",
    category: "Vedanta",
  },
  {
    title: "Guided Morning Meditation",
    excerpt:
      "Start your day with this peaceful guided meditation. Swamiji leads you through a traditional practice of breath awareness and self-inquiry.",
    href: "/teachings/videos/morning-meditation",
    type: "video" as const,
    duration: "25 min",
    date: "January 25, 2026",
    image: "/images/meditation-hall.jpg",
    category: "Meditation",
  },
  {
    title: "Commentary on Mandukya Upanishad",
    excerpt:
      "A detailed exploration of this profound Upanishad that reveals the nature of consciousness through the analysis of the states of waking, dream, and deep sleep.",
    href: "/teachings/audio/mandukya-commentary",
    type: "audio" as const,
    duration: "1 hr 15 min",
    date: "January 22, 2026",
    image: "/images/event-satsang.jpg",
    category: "Scriptures",
  },
  {
    title: "The Practice of Self-Inquiry",
    excerpt:
      "Learn the method of Atma-vichara (self-inquiry) as taught by the great sages. This practical guide helps you turn your attention inward.",
    href: "/teachings/meditation/self-inquiry",
    type: "article" as const,
    duration: "10 min read",
    date: "January 20, 2026",
    image: "/images/swamiji-portrait.jpg",
    category: "Sadhana",
  },
  {
    title: "Bhagavad Gita Chapter 2: Sankhya Yoga",
    excerpt:
      "Swamiji's comprehensive discourse on the second chapter of the Gita, covering the immortality of the Self and the nature of wise action.",
    href: "/teachings/videos/gita-chapter-2",
    type: "video" as const,
    duration: "55 min",
    date: "January 18, 2026",
    image: "/images/event-satsang.jpg",
    category: "Bhagavad Gita",
  },
  {
    title: "Understanding Karma and Its Resolution",
    excerpt:
      "A clear explanation of the law of karma, types of karma, and how spiritual practice leads to freedom from karmic bondage.",
    href: "/teachings/articles/understanding-karma",
    type: "article" as const,
    duration: "12 min read",
    date: "January 15, 2026",
    image: "/images/hero-ashram.jpg",
    category: "Philosophy",
  },
];

const dailyTeaching = {
  date: "February 3, 2026",
  title: "The Witness Consciousness",
  content:
    "You are not the thoughts that arise in your mind, nor the emotions that color your experience. You are the unchanging witness - the pure awareness in which all experiences appear and disappear. Today, practice stepping back into this witnessing presence. Observe your thoughts without judgment, watch your feelings without reaction. In this watching, you will glimpse your true nature - ever-present, ever-peaceful, ever-free.",
  source: "— From today's morning satsang",
};

export default function TeachingsPage() {
  return (
    <>
      <PageHeader
        title="Spiritual Teachings"
        description="Explore the timeless wisdom of Vedanta through articles, videos, discourses, and guided practices"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Teachings", href: "/teachings" },
        ]}
      />

      {/* Daily Teaching */}
      <SectionWrapper variant="white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Today's Teaching — {dailyTeaching.date}
            </span>
          </div>
          <Card className="bg-secondary border-none">
            <CardContent className="p-8 md:p-12">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center">
                {dailyTeaching.title}
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-center text-lg">
                {dailyTeaching.content}
              </p>
              <p className="mt-6 text-sm text-primary text-center font-medium">
                {dailyTeaching.source}
              </p>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Teaching Categories */}
      <SectionWrapper variant="cream">
        <SectionHeader
          title="Browse by Category"
          description="Find teachings organized by topic and format"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachingCategories.map((category) => (
            <Link key={category.href} href={category.href} className="group block">
              <Card className="h-full bg-card border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {category.description}
                  </p>
                  <p className="mt-3 text-xs text-primary font-medium">
                    {category.count}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* Featured Teachings */}
      <SectionWrapper variant="white">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              Featured
            </p>
            <h2 className="font-serif text-3xl font-semibold text-foreground">
              Recent Teachings
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 bg-transparent"
          >
            <Link href="/teachings/all">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTeachings.map((teaching) => (
            <TeachingCard key={teaching.href} {...teaching} />
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper variant="primary" className="py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-semibold text-primary-foreground">
            Subscribe to Daily Teachings
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Receive Swamiji's daily spiritual wisdom directly in your inbox each morning.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
            />
            <Button className="bg-card text-foreground hover:bg-card/90 px-6">
              Subscribe
            </Button>
          </form>
        </div>
      </SectionWrapper>
    </>
  );
}
