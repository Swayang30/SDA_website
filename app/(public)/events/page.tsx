import { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/hero-section";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { EventCard } from "@/components/cards/event-card";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Calendar, MapPin, Users, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Events & Activities",
  description:
    "Join our spiritual events, retreats, workshops, and festival celebrations at Swami Debananda Ashram.",
};

const upcomingEvents = [
  {
    title: "Swamiji's Teaching on the Sacred Night of Mahashivaratri",
    description:
      "In this profound video discourse, Swami Debananda illuminates the deeper spiritual significance of Mahashivaratri — the great night of Shiva as pure consciousness. Watch, listen and be transformed.",
    date: "February 26, 2026",
    time: "Video Teaching",
    location: "Watch Online",
    href: "/events/upcoming/mahashivaratri-2026",
    image: "/images/event-satsang.jpg",
    category: "Video Teaching",
  },
  {
    title: "Weekend Meditation Retreat",
    description:
      "A two-day immersive retreat focused on deepening your meditation practice. Includes guided sessions, silent periods, and personal guidance from Swamiji.",
    date: "March 8-9, 2026",
    time: "Saturday 9 AM - Sunday 5 PM",
    location: "Ashram Retreat Center",
    href: "/events/retreats/meditation-march-2026",
    image: "/images/meditation-hall.jpg",
    category: "Retreat",
  },
  {
    title: "Holi Festival Celebration",
    description:
      "Celebrate the festival of colors with devotional singing, prasad distribution, and the traditional Holika Dahan ceremony.",
    date: "March 14, 2026",
    time: "4:00 PM onwards",
    location: "Ashram Grounds",
    href: "/events/upcoming/holi-2026",
    image: "/images/hero-ashram.jpg",
    category: "Festival",
  },
  {
    title: "Introduction to Vedanta - 4 Week Course",
    description:
      "A structured introduction to Advaita Vedanta for beginners. Learn the fundamental concepts, terminology, and practical applications of this ancient wisdom.",
    date: "Starting March 22, 2026",
    time: "Every Saturday, 10 AM - 12 PM",
    location: "Library Hall",
    href: "/events/upcoming/vedanta-intro",
    image: "/images/event-satsang.jpg",
    category: "Course",
  },
  {
    title: "Ram Navami Celebration",
    description:
      "Honor the birth of Lord Rama with ceremonial worship, Ramayana parayana, and prasad distribution.",
    date: "April 6, 2026",
    time: "5:00 AM - 9:00 PM",
    location: "Main Temple Hall",
    href: "/events/upcoming/ram-navami-2026",
    image: "/images/event-satsang.jpg",
    category: "Festival",
  },
  {
    title: "7-Day Silent Retreat",
    description:
      "An intensive week of silence, meditation, and self-inquiry. This retreat offers the deepest opportunity for inner transformation under Swamiji's guidance.",
    date: "April 15-22, 2026",
    time: "Residential",
    location: "Ashram Retreat Center",
    href: "/events/retreats/silent-april-2026",
    image: "/images/meditation-hall.jpg",
    category: "Retreat",
  },
];

const regularPrograms = [
  {
    title: "Morning Meditation",
    description: "Start your day with guided meditation practice",
    time: "5:00 AM - 6:00 AM",
    days: "Daily",
    icon: Clock,
  },
  {
    title: "Evening Satsang",
    description: "Teachings, Q&A, and devotional singing",
    time: "6:00 PM - 7:30 PM",
    days: "Daily",
    icon: Users,
  },
  {
    title: "Bhagavad Gita Study",
    description: "Verse-by-verse study with Swamiji",
    time: "10:00 AM - 12:00 PM",
    days: "Every Sunday",
    icon: Calendar,
  },
  {
    title: "Yoga & Pranayama",
    description: "Traditional yoga and breathing practices",
    time: "6:00 AM - 7:00 AM",
    days: "Daily",
    icon: MapPin,
  },
];

const eventCategories = [
  { value: "all", label: "All Events" },
  { value: "festival", label: "Festivals" },
  { value: "retreat", label: "Retreats" },
  { value: "course", label: "Courses" },
  { value: "workshop", label: "Workshops" },
];

export default function EventsPage() {
  return (
    <>
      <PageHeader
        title="Events & Activities"
        description="Join our spiritual gatherings, retreats, courses, and festival celebrations throughout the year"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events" },
        ]}
      />

      {/* Quick Links */}
      <SectionWrapper variant="white">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Upcoming Events", href: "/events/upcoming", count: "12 events" },
            { title: "Retreats & Workshops", href: "/events/retreats", count: "6 retreats" },
            { title: "Festival Calendar", href: "/events/festivals", count: "15 festivals" },
            { title: "Past Events", href: "/events/past", count: "Archive" },
          ].map((link) => (
            <Link key={link.href} href={link.href}>
              <Card className="h-full bg-secondary hover:bg-primary/10 border-none transition-colors">
                <CardContent className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-foreground">{link.title}</h3>
                    <p className="text-sm text-muted-foreground">{link.count}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* Regular Programs */}
      <SectionWrapper variant="cream">
        <SectionHeader
          title="Regular Programs"
          description="Ongoing daily and weekly activities open to all"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {regularPrograms.map((program) => (
            <Card key={program.title} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <program.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                  {program.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {program.description}
                </p>
                <div className="mt-4 pt-4 border-t border-border space-y-1">
                  <p className="text-sm font-medium text-primary">{program.time}</p>
                  <p className="text-xs text-muted-foreground">{program.days}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Upcoming Events */}
      <SectionWrapper variant="white">
        <SectionHeader
          title="Upcoming Events"
          description="Special events, retreats, and celebrations scheduled for the coming months"
        />

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 bg-secondary">
            {eventCategories.map((cat) => (
              <TabsTrigger
                key={cat.value}
                value={cat.value}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <EventCard key={event.href} {...event} featured={index === 0} />
              ))}
            </div>
          </TabsContent>

          {eventCategories.slice(1).map((cat) => (
            <TabsContent key={cat.value} value={cat.value}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents
                  .filter((e) => e.category.toLowerCase() === cat.value)
                  .map((event) => (
                    <EventCard key={event.href} {...event} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 bg-transparent"
          >
            <Link href="/events/calendar">
              View Full Calendar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>

      {/* Registration Info */}
      <SectionWrapper variant="primary" className="py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-semibold text-primary-foreground">
            How to Register
          </h2>
          <p className="mt-4 text-primary-foreground/80 leading-relaxed">
            Most regular programs are open to all without prior registration. For retreats,
            workshops, and special events, please register in advance as spaces are limited.
            Residential programs require accommodation booking.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild className="bg-card text-foreground hover:bg-card/90">
              <Link href="/contact">Contact for Registration</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Link href="/contact/accommodation">View Accommodation</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
