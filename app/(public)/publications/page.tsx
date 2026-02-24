import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { LotusIcon } from "@/components/icons/spiritual-icons";
import {
  BookOpen,
  Download,
  FileText,
  Search,
  ShoppingCart,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Explore books, articles, and spiritual literature by Swami Debananda. Download free PDFs and access newsletters.",
};

const books = [
  {
    id: 1,
    title: "The Path of Self-Realization",
    author: "Swami Debananda",
    description:
      "A comprehensive guide to understanding the nature of self and the journey towards spiritual awakening through Vedantic wisdom.",
    pages: 324,
    year: 2023,
    price: 450,
    image: "/images/hero-ashram.jpg",
    format: ["Hardcover", "PDF"],
    bestseller: true,
  },
  {
    id: 2,
    title: "Meditation: The Inner Journey",
    author: "Swami Debananda",
    description:
      "Practical techniques and philosophical insights into the art of meditation, suitable for beginners and advanced practitioners.",
    pages: 218,
    year: 2022,
    price: 350,
    image: "/images/meditation-hall.jpg",
    format: ["Paperback", "PDF"],
    bestseller: false,
  },
  {
    id: 3,
    title: "Bhagavad Gita: A Modern Commentary",
    author: "Swami Debananda",
    description:
      "Fresh perspectives on the timeless wisdom of the Gita, making ancient teachings relevant for contemporary life.",
    pages: 512,
    year: 2021,
    price: 550,
    image: "/images/event-satsang.jpg",
    format: ["Hardcover", "Paperback"],
    bestseller: true,
  },
  {
    id: 4,
    title: "Living Vedanta",
    author: "Swami Debananda",
    description:
      "How to apply Vedantic principles in daily life for peace, purpose, and spiritual growth.",
    pages: 186,
    year: 2020,
    price: 299,
    image: "/images/gallery-1.jpg",
    format: ["Paperback"],
    bestseller: false,
  },
];

const freePdfs = [
  {
    title: "Introduction to Vedanta",
    pages: 42,
    downloads: 12500,
    description: "A beginner-friendly introduction to Vedantic philosophy.",
  },
  {
    title: "Daily Prayers & Mantras",
    pages: 28,
    downloads: 8200,
    description: "Collection of essential prayers and mantras for daily practice.",
  },
  {
    title: "The Art of Selfless Service",
    pages: 36,
    downloads: 5600,
    description: "Understanding Karma Yoga and the path of selfless action.",
  },
  {
    title: "Meditation Guide for Beginners",
    pages: 24,
    downloads: 15800,
    description: "Step-by-step guide to starting your meditation practice.",
  },
];

const newsletters = [
  { title: "January 2026 - New Year Blessings", date: "January 2026" },
  { title: "December 2025 - Year in Review", date: "December 2025" },
  { title: "November 2025 - Diwali Special", date: "November 2025" },
  { title: "October 2025 - Navratri Teachings", date: "October 2025" },
];

export default function PublicationsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative bg-linear-to-b from-secondary to-background py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <LotusIcon className="mx-auto mb-6 h-16 w-16 text-primary" />
            <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
              Publications
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Explore the written wisdom of Swami Debananda through books, articles,
              and spiritual literature that illuminate the path of self-realization.
            </p>
          </div>
        </section>

        {/* Books Section */}
        <SectionWrapper
          title="Books by Swami Debananda"
          subtitle="Comprehensive spiritual literature for seekers at all stages of their journey"
        >
          {/* Search */}
          <div className="mx-auto mb-10 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search publications..."
                className="pl-9"
              />
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {books.map((book) => (
              <Card key={book.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="relative h-64 w-full md:h-auto md:w-48 shrink-0">
                    <Image
                      src={book.image || "/placeholder.svg"}
                      alt={book.title}
                      fill
                      className="object-cover"
                    />
                    {book.bestseller && (
                      <Badge className="absolute left-2 top-2 bg-primary">
                        Bestseller
                      </Badge>
                    )}
                  </div>
                  <CardContent className="flex flex-col justify-between p-6">
                    <div>
                      <h3 className="font-serif text-xl font-semibold">
                        {book.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        by {book.author}
                      </p>
                      <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
                        {book.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {book.format.map((fmt) => (
                          <Badge key={fmt} variant="outline">
                            {fmt}
                          </Badge>
                        ))}
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {book.pages} pages | Published {book.year}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        ₹{book.price}
                      </span>
                      <Button size="sm">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Order Now
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </SectionWrapper>

        {/* Free Downloads Section */}
        <SectionWrapper
          title="Free Downloads"
          subtitle="Complimentary spiritual resources to support your practice"
          className="bg-secondary/30"
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {freePdfs.map((pdf, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold">{pdf.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {pdf.description}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {pdf.pages} pages | {pdf.downloads.toLocaleString()} downloads
                  </p>
                  <Button variant="outline" className="mt-4 w-full bg-transparent">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionWrapper>

        {/* Newsletter Archive */}
        <SectionWrapper
          title="Newsletter Archive"
          subtitle="Monthly spiritual insights and ashram updates"
        >
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 rounded-lg bg-primary/5 p-6 text-center">
              <h3 className="font-serif text-lg font-semibold">
                Subscribe to Our Newsletter
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Receive monthly teachings, event updates, and spiritual inspiration
              </p>
              <div className="mt-4 flex gap-2">
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="flex-1"
                />
                <Button>Subscribe</Button>
              </div>
            </div>

            <h3 className="mb-4 font-serif text-lg font-semibold">
              Recent Newsletters
            </h3>
            <div className="space-y-3">
              {newsletters.map((newsletter, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-secondary/50"
                >
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{newsletter.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {newsletter.date}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl font-bold">
              Support Our Publication Work
            </h2>
            <p className="mx-auto mt-4 max-w-2xl opacity-90">
              Your donations help us publish and distribute spiritual literature to
              seekers around the world, many of whom receive these teachings free of
              cost.
            </p>
            <Link href="/donate">
              <Button
                size="lg"
                variant="outline"
                className="mt-8 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Support Publications
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
