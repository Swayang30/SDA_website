import { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/hero-section";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { GalleryGrid } from "@/components/cards/gallery-grid";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ImageIcon, Video, Newspaper, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Media & Gallery",
  description:
    "Explore photos, videos, and media coverage of Swami Debananda Ashram.",
};

const galleryImages = [
  {
    src: "/images/hero-ashram.jpg",
    alt: "Ashram main entrance at sunrise",
    caption: "The ashram main entrance bathed in morning light",
  },
  {
    src: "/images/meditation-hall.jpg",
    alt: "Meditation hall interior",
    caption: "The peaceful meditation hall where daily satsangs are held",
  },
  {
    src: "/images/swamiji-portrait.jpg",
    alt: "Swami Debananda",
    caption: "Swamiji in meditation",
  },
  {
    src: "/images/event-satsang.jpg",
    alt: "Evening satsang gathering",
    caption: "Devotees gathered for evening satsang",
  },
  {
    src: "/images/gallery-1.jpg",
    alt: "Ashram gardens",
    caption: "The serene lotus pond in ashram gardens",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Temple ceremony",
    caption: "Traditional evening aarti ceremony",
  },
];

const mediaCategories = [
  {
    title: "Photo Gallery",
    description: "Beautiful moments captured at the ashram throughout the years",
    href: "/media/photos",
    icon: ImageIcon,
    count: "500+ photos",
  },
  {
    title: "Video Gallery",
    description: "Recordings of satsangs, ceremonies, and ashram documentaries",
    href: "/media/videos",
    icon: Video,
    count: "100+ videos",
  },
  {
    title: "Ashram Life",
    description: "Daily rhythms and routines of life at the ashram",
    href: "/media/life",
    icon: Camera,
    count: "Photo stories",
  },
  {
    title: "Media Mentions",
    description: "Press coverage and media features about the ashram",
    href: "/media/press",
    icon: Newspaper,
    count: "25+ features",
  },
];

const recentVideos = [
  {
    title: "Ashram Documentary: A Day in Spiritual Life",
    duration: "28 min",
    thumbnail: "/images/meditation-hall.jpg",
    href: "/media/videos/ashram-documentary",
  },
  {
    title: "Guru Purnima Celebration 2025",
    duration: "45 min",
    thumbnail: "/images/event-satsang.jpg",
    href: "/media/videos/guru-purnima-2025",
  },
  {
    title: "Interview: The Relevance of Vedanta Today",
    duration: "32 min",
    thumbnail: "/images/swamiji-portrait.jpg",
    href: "/media/videos/vedanta-interview",
  },
];

export default function MediaPage() {
  return (
    <>
      <PageHeader
        title="Media & Gallery"
        description="Visual glimpses into the spiritual life and activities at Swami Debananda Ashram"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Media", href: "/media" },
        ]}
      />

      {/* Media Categories */}
      <SectionWrapper variant="white">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaCategories.map((category) => (
            <Link key={category.href} href={category.href} className="group block">
              <Card className="h-full bg-card border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
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

      {/* Featured Gallery */}
      <SectionWrapper variant="cream">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              Featured
            </p>
            <h2 className="font-serif text-3xl font-semibold text-foreground">
              Photo Gallery
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 bg-transparent"
          >
            <Link href="/media/photos">
              View All Photos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <GalleryGrid images={galleryImages} columns={3} />
      </SectionWrapper>

      {/* Recent Videos */}
      <SectionWrapper variant="white">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              Watch
            </p>
            <h2 className="font-serif text-3xl font-semibold text-foreground">
              Recent Videos
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 bg-transparent"
          >
            <Link href="/media/videos">
              View All Videos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {recentVideos.map((video) => (
            <Link key={video.href} href={video.href} className="group block">
              <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Video className="h-6 w-6" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 px-2 py-1 bg-foreground/80 text-background text-xs rounded">
                  {video.duration}
                </span>
              </div>
              <h3 className="mt-3 font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {video.title}
              </h3>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
