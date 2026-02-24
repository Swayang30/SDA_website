import { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/hero-section";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About the Ashram",
  description:
    "Learn about Swami Debananda Ashram, our history, philosophy, and spiritual mission.",
};

const aboutSections = [
  {
    title: "About Swamiji",
    description:
      "Discover the life, teachings, and spiritual journey of Swami Debananda, the founder of our ashram.",
    href: "/about/swamiji",
    image: "/images/swamiji-portrait.jpg",
  },
  {
    title: "Core Values & Philosophy",
    description:
      "Explore the Vedantic principles and core values that guide our spiritual community.",
    href: "/about/philosophy",
    image: "/images/meditation-hall.jpg",
  },
  {
    title: "Message from Swamiji",
    description:
      "Read Swamiji's message to seekers on the spiritual path and his vision for the ashram.",
    href: "/about/message",
    image: "/images/event-satsang.jpg",
  },
  {
    title: "Ashram History",
    description:
      "Trace the journey of Swami Debananda Ashram from its humble beginnings to the present day.",
    href: "/about/history",
    image: "/images/hero-ashram.jpg",
  },
  {
    title: "Lineage & Tradition",
    description:
      "Learn about the sacred lineage (parampara) and the tradition that informs our teachings.",
    href: "/about/lineage",
    image: "/images/meditation-hall.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About the Ashram"
        description="A sacred space dedicated to spiritual growth, Vedantic wisdom, and inner transformation"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      <SectionWrapper variant="white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutSections.map((section) => (
            <Link key={section.href} href={section.href} className="group block">
              <Card className="h-full overflow-hidden border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={section.image || "/placeholder.svg"}
                    alt={section.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h2 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {section.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
