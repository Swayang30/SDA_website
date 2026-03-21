"use client";

import Link from "next/link";
import { PageHeader } from "@/components/sections/hero-section";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useStaggerAnimation } from "@/hooks/use-scroll-animation";

export function AboutClient() {
  const { t } = useLanguage();
  const staggerRef = useStaggerAnimation<HTMLDivElement>();

  const aboutSections = [
    {
      title: t.aboutPage.sections.swamiji.title,
      description: t.aboutPage.sections.swamiji.description,
      href: "/about/swamiji",
      image: "/images/swamiji-portrait.jpg",
    },
    {
      title: t.aboutPage.sections.philosophy.title,
      description: t.aboutPage.sections.philosophy.description,
      href: "/about/philosophy",
      image: "/images/meditation-hall.jpg",
    },
    {
      title: t.aboutPage.sections.message.title,
      description: t.aboutPage.sections.message.description,
      href: "/about/message",
      image: "/images/event-satsang.jpg",
    },
    {
      title: t.aboutPage.sections.history.title,
      description: t.aboutPage.sections.history.description,
      href: "/about/history",
      image: "/images/hero-ashram.jpg",
    },
    {
      title: t.aboutPage.sections.lineage.title,
      description: t.aboutPage.sections.lineage.description,
      href: "/about/lineage",
      image: "/images/meditation-hall.jpg",
    },
  ];

  return (
    <>
      <PageHeader
        title={t.aboutPage.title}
        description={t.aboutPage.description}
        breadcrumbs={[
          { label: t.common.home, href: "/" },
          { label: t.nav.about, href: "/about" },
        ]}
      />

      <SectionWrapper variant="white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" ref={staggerRef}>
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
                    {t.common.learnMore}
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
