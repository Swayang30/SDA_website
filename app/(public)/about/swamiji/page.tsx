"use client";

import { PageHeader } from "@/components/sections/hero-section";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { LotusIcon } from "@/components/icons/spiritual-icons";
import { useLanguage } from "@/lib/language-context";

export default function AboutSwamiji() {
  const { t } = useLanguage();
  const p = t.swamijiPage;

  return (
    <>
      <PageHeader
        title={p.title}
        description={p.description}
        breadcrumbs={[
          { label: t.common.home, href: "/" },
          { label: p.breadcrumbAbout, href: "/about" },
          { label: p.breadcrumbSwamiji, href: "/about/swamiji" },
        ]}
      />

      {/* Introduction */}
      <SectionWrapper variant="white">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="aspect-3/4 overflow-hidden rounded-2xl">
              <img
                src="/images/swamiji-portrait.jpg"
                alt="Swami Debananda Maharaj"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-foreground">
              {p.introHeading}
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>{p.introP1}</p>
              <p>{p.introP2}</p>
              <p>{p.introP3}</p>
              <p>{p.introP4}</p>
            </div>

            <div className="mt-8 p-6 bg-secondary rounded-xl">
              <LotusIcon className="h-8 w-8 text-primary" />
              <blockquote className="mt-4 font-serif text-xl italic text-foreground">
                &ldquo;{p.quote}&rdquo;
              </blockquote>
              <p className="mt-3 text-sm text-primary font-medium">
                — {p.quoteAuthor}
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper variant="cream">
        <SectionHeader title={p.timelineTitle} description={p.timelineDesc} />
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />
          <div className="space-y-12">
            {p.timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-1.5" />
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  }`}
                >
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {item.year}
                  </span>
                  <h3 className="mt-3 font-serif text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Teaching Philosophy */}
      <SectionWrapper variant="white">
        <SectionHeader
          title={p.philosophyTitle}
          description={p.philosophyDesc}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {p.philosophy.map((item, index) => (
            <div key={index} className="p-6 bg-secondary rounded-xl">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
