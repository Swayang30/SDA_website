"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { TeachingCard } from "@/components/cards/teaching-card";
import { EventCard } from "@/components/cards/event-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Heart } from "lucide-react";
import {
  LotusIcon,
  DiyaIcon,
  OmIcon,
  SunriseIcon,
} from "@/components/icons/spiritual-icons";
import { useLanguage } from "@/lib/language-context";
import {
  useScrollAnimation,
  useStaggerAnimation,
} from "@/hooks/use-scroll-animation";
import { DURATION, STAGGER } from "@/lib/animations";
import { PageTransition } from "@/components/layout/page-transition";

const featuredTeachings = [
  {
    title: "The Essence of Vedanta",
    titleHi: "वेदांत का सार",
    titleBn: "বেদান্তের সারমর্ম",
    excerpt:
      "Understanding the core teachings of non-dual philosophy and its practical application in daily life.",
    excerptHi:
      "अद्वैत दर्शन की मूल शिक्षाओं को समझना और दैनिक जीवन में उनका व्यावहारिक अनुप्रयोग।",
    excerptBn:
      "অদ্বৈত দর্শনের মূল শিক্ষা বোঝা এবং দৈনন্দিন জীবনে তাদের ব্যবহারিক প্রয়োগ।",
    href: "/teachings/vedanta/essence",
    type: "article" as const,
    duration: "12 min read",
    date: "January 28, 2026",
    image: "/images/meditation-hall.jpg",
    category: "Vedanta",
  },
  {
    title: "Morning Meditation Practice",
    titleHi: "प्रातः ध्यान अभ्यास",
    titleBn: "প্রাতঃ ধ্যান অভ্যাস",
    excerpt:
      "A guided meditation session to start your day with inner peace and clarity.",
    excerptHi:
      "आंतरिक शांति और स्पष्टता के साथ अपना दिन शुरू करने के लिए एक निर्देशित ध्यान सत्र।",
    excerptBn:
      "অন্তর শান্তি ও স্বচ্ছতার সাথে আপনার দিন শুরু করতে একটি নির্দেশিত ধ্যান সেশন।",
    href: "/teachings/videos/morning-meditation",
    type: "video" as const,
    duration: "25 min",
    date: "January 25, 2026",
    image: "/images/meditation-hall.jpg",
    category: "Meditation",
  },
  {
    title: "Understanding the Self",
    titleHi: "आत्मा को समझना",
    titleBn: "আত্মাকে বোঝা",
    excerpt:
      "An audio discourse on the nature of consciousness and the path to self-realization.",
    excerptHi:
      "चेतना की प्रकृति और आत्म-साक्षात्कार के मार्ग पर एक ऑडियो प्रवचन।",
    excerptBn:
      "চেতনার প্রকৃতি এবং আত্ম-উপলব্ধির পথ সম্পর্কে একটি অডিও প্রবচন।",
    href: "/teachings/audio/understanding-self",
    type: "audio" as const,
    duration: "45 min",
    date: "January 20, 2026",
    image: "/images/event-satsang.jpg",
    category: "Discourses",
  },
];

const upcomingEvents = [
  {
    title: "Mahashivaratri Celebration",
    titleHi: "महाशिवरात्रि समारोह",
    titleBn: "মহাশিবরাত্রি উদযাপন",
    description:
      "Join us for an all-night celebration of Lord Shiva with chanting, meditation, and special pujas. Experience the profound energy of this sacred night.",
    descriptionHi:
      "जप, ध्यान और विशेष पूजाओं के साथ भगवान शिव की रात्रि भर उत्सव में हमसे जुड़ें। इस पवित्र रात्रि की गहन ऊर्जा का अनुभव करें।",
    descriptionBn:
      "জপ, ধ্যান এবং বিশেষ পূজার সাথে ভগবান শিবের সারারাত উদযাপনে আমাদের সাথে যোগ দিন। এই পবিত্র রাতের গভীর শক্তি অনুভব করুন।",
    date: "February 26, 2026",
    time: "6:00 PM onwards",
    location: "Main Temple Hall",
    href: "/events/upcoming/mahashivaratri-2026",
    image: "/images/event-satsang.jpg",
    featured: true,
    category: "Festival",
  },
  {
    title: "Weekend Meditation Retreat",
    titleHi: "सप्ताहांत ध्यान शिविर",
    titleBn: "সাপ্তাহিক ধ্যান শিবির",
    description:
      "A two-day immersive retreat focused on deepening your meditation practice with guidance from Swamiji.",
    descriptionHi:
      "स्वामीजी के मार्गदर्शन में अपने ध्यान अभ्यास को गहरा करने पर केंद्रित दो दिवसीय गहन शिविर।",
    descriptionBn:
      "স্বামীজীর নির্দেশনায় আপনার ধ্যান অনুশীলনকে গভীর করতে দুই দিনের নিবিড় শিবির।",
    date: "March 8-9, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "Ashram Retreat Center",
    href: "/events/retreats/meditation-march-2026",
    category: "Retreat",
  },
  {
    title: "Bhagavad Gita Study Circle",
    titleHi: "भगवद्गीता अध्ययन मंडल",
    titleBn: "ভগবদ্গীতা অধ্যয়ন চক্র",
    description:
      "Weekly study and discussion of the Bhagavad Gita with verse-by-verse analysis and practical insights.",
    descriptionHi:
      "भगवद्गीता का साप्ताहिक अध्ययन और चर्चा, श्लोक-दर-श्लोक विश्लेषण और व्यावहारिक अंतर्दृष्टि के साथ।",
    descriptionBn:
      "ভগবদ্গীতার সাপ্তাহিক অধ্যয়ন ও আলোচনা, শ্লোক-বাই-শ্লোক বিশ্লেষণ এবং ব্যবহারিক অন্তর্দৃষ্টি সহ।",
    date: "Every Sunday",
    time: "10:00 AM - 12:00 PM",
    location: "Library Hall",
    href: "/events/upcoming/gita-study",
    category: "Study",
  },
];

export default function HomePage() {
  const { language, t } = useLanguage();

  // ─── Scroll animation refs ────────────────────────────────────
  const welcomeTextRef = useScrollAnimation({ type: "slide-left", duration: DURATION.slow });
  const welcomeImageRef = useScrollAnimation({ type: "slide-right", duration: DURATION.slow });
  const valuesGridRef = useStaggerAnimation({ stagger: STAGGER.cards });
  const teachingsGridRef = useStaggerAnimation({ stagger: STAGGER.cards });
  const eventsGridRef = useStaggerAnimation({ stagger: STAGGER.cards });
  const statsGridRef = useStaggerAnimation({ type: "scale-in", stagger: STAGGER.stats });
  const ctaRef = useScrollAnimation({ type: "fade-up", duration: DURATION.slow });
  const scheduleLeftRef = useScrollAnimation({ type: "slide-left" });
  const scheduleRightRef = useScrollAnimation({ type: "slide-right" });

  const coreValues = [
    {
      icon: OmIcon,
      title: t.values.spiritualWisdom,
      description: t.values.spiritualWisdomDesc,
    },
    {
      icon: LotusIcon,
      title: t.values.innerTransformation,
      description: t.values.innerTransformationDesc,
    },
    {
      icon: DiyaIcon,
      title: t.values.sevaService,
      description: t.values.sevaServiceDesc,
    },
    {
      icon: SunriseIcon,
      title: t.values.universalHarmony,
      description: t.values.universalHarmonyDesc,
    },
  ];

  const dailySchedule = [
    { time: "5:00 AM", activity: t.schedule.morningMeditation },
    { time: "6:00 AM", activity: t.schedule.yogaPranayama },
    { time: "7:30 AM", activity: t.schedule.breakfast },
    { time: "9:00 AM", activity: t.schedule.scriptureStudy },
    { time: "12:30 PM", activity: t.schedule.lunchRest },
    { time: "4:00 PM", activity: t.schedule.seva },
    { time: "6:00 PM", activity: t.schedule.eveningSatsang },
    { time: "8:00 PM", activity: t.schedule.dinnerNightMeditation },
  ];

  const getLocalizedTeaching = (teaching: (typeof featuredTeachings)[0]) => ({
    ...teaching,
    title:
      language === "hi"
        ? teaching.titleHi
        : language === "bn"
          ? teaching.titleBn
          : teaching.title,
    excerpt:
      language === "hi"
        ? teaching.excerptHi
        : language === "bn"
          ? teaching.excerptBn
          : teaching.excerpt,
  });

  const getLocalizedEvent = (event: (typeof upcomingEvents)[0]) => ({
    ...event,
    title:
      language === "hi"
        ? event.titleHi
        : language === "bn"
          ? event.titleBn
          : event.title,
    description:
      language === "hi"
        ? event.descriptionHi
        : language === "bn"
          ? event.descriptionBn
          : event.description,
  });

  return (
    <>
      <Navbar />

      <PageTransition>
        <main>
        {/* Hero Section */}
        <HeroSection
          title={t.hero.title}
          subtitle={t.hero.subtitle}
          description={t.hero.description}
          primaryAction={{
            label: t.hero.exploreTeachings,
            href: "/teachings",
          }}
          secondaryAction={{
            label: t.hero.visitAshram,
            href: "/contact/visit",
          }}
          backgroundImage="/images/hero-ashram.jpg"
          showScrollIndicator
          size="large"
        />

        {/* Welcome Section */}
        <SectionWrapper variant="white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div ref={welcomeTextRef}>
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
                {t.welcome.eyebrow}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-balance">
                {t.welcome.title}
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                {t.welcome.description1}
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {t.welcome.description2}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Link href="/about/swamiji">
                    {t.welcome.aboutSwamiji}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  <Link href="/about/history">{t.welcome.ourHistory}</Link>
                </Button>
              </div>
            </div>
            <div className="relative" ref={welcomeImageRef}>
              <div className="aspect-4/3 overflow-hidden rounded-2xl">
                <img
                  src="/images/swamiji-portrait.jpg"
                  alt="Swami Debananda in meditation"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
                <p className="font-serif text-lg italic text-foreground">
                  &quot;{t.welcome.quote}&quot;
                </p>
                <p className="mt-2 text-sm text-primary font-medium">
                  — Swami Debananda
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Core Values Section */}
        <SectionWrapper variant="cream">
          <SectionHeader
            eyebrow={t.values.eyebrow}
            title={t.values.title}
            description={t.values.description}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" ref={valuesGridRef}>
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="bg-card p-6 rounded-xl text-center group hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Featured Teachings */}
        <SectionWrapper variant="white">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
                {t.teachings.eyebrow}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
                {t.teachings.title}
              </h2>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              <Link href="/teachings">
                {t.teachings.viewAll}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" ref={teachingsGridRef}>
            {featuredTeachings.map((teaching) => (
              <TeachingCard
                key={teaching.href}
                {...getLocalizedTeaching(teaching)}
              />
            ))}
          </div>
        </SectionWrapper>

        {/* Upcoming Events */}
        <SectionWrapper variant="cream">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
                {t.events.eyebrow}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
                {t.events.title}
              </h2>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              <Link href="/events">
                {t.events.viewAll}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" ref={eventsGridRef}>
            {upcomingEvents.map((event, index) => (
              <EventCard
                key={event.href}
                {...getLocalizedEvent(event)}
                featured={index === 0}
              />
            ))}
          </div>
        </SectionWrapper>

        {/* Statistics Section */}
        <SectionWrapper variant="primary" className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" ref={statsGridRef}>
            {[
              { value: "30+", label: t.stats.yearsOfService, icon: SunriseIcon },
              { value: "50,000+", label: t.stats.devoteesServed, icon: Users },
              { value: "200+", label: t.stats.publications, icon: BookOpen },
              { value: "1,000+", label: t.stats.hoursOfTeachings, icon: Heart },
            ].map((stat) => (
              <div key={stat.label}>
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary-foreground/80" />
                <p className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-primary-foreground/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Call to Action */}
        <SectionWrapper variant="white">
          <div className="text-center max-w-3xl mx-auto" ref={ctaRef}>
            <LotusIcon className="h-12 w-12 text-primary mx-auto" />
            <h2 className="mt-6 font-serif text-3xl md:text-4xl font-semibold text-foreground text-balance">
              {t.cta.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {t.cta.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              >
                <Link href="/contact/visit">{t.cta.planVisit}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 px-8 bg-transparent"
              >
                <Link href="/donate">{t.cta.supportMission}</Link>
              </Button>
            </div>
          </div>
        </SectionWrapper>

        {/* Daily Schedule Preview */}
        <SectionWrapper variant="cream">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-video overflow-hidden rounded-2xl" ref={scheduleLeftRef}>
              <img
                src="/images/meditation-hall.jpg"
                alt="Meditation hall at the ashram"
                className="h-full w-full object-cover"
              />
            </div>
            <div ref={scheduleRightRef}>
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
                {t.schedule.eyebrow}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-balance">
                {t.schedule.title}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {t.schedule.description}
              </p>
              <div className="mt-8 space-y-4">
                {dailySchedule.map((item) => (
                  <div
                    key={item.time}
                    className="flex items-center gap-4 text-sm"
                  >
                    <span className="w-20 font-medium text-primary">
                      {item.time}
                    </span>
                    <span className="text-muted-foreground">
                      {item.activity}
                    </span>
                  </div>
                ))}
              </div>
              <Button
                asChild
                className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="/media/life">
                  {t.schedule.exploreAshramLife}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </SectionWrapper>
        </main>
      </PageTransition>

      <Footer />
    </>
  );
}
