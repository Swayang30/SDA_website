import { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/hero-section";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  MessageCircle,
  Calendar,
  Home,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Visit",
  description:
    "Get in touch with Swami Debananda Ashram. Plan your visit, find directions, and learn about accommodation options.",
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@swamidebanandaashram.org",
    href: "mailto:info@swamidebanandaashram.org",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 123 456 7890",
    href: "tel:+911234567890",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Swami Debananda Ashram, Village Road, District, West Bengal 700001",
    href: "#map",
  },
  {
    icon: Clock,
    title: "Visiting Hours",
    value: "Daily 5:00 AM - 9:00 PM",
  },
];

const quickLinks = [
  {
    title: "Visit the Ashram",
    description: "Plan your pilgrimage and learn what to expect",
    href: "/contact/visit",
    icon: Calendar,
  },
  {
    title: "Accommodation",
    description: "Stay at the ashram during your visit",
    href: "/contact/accommodation",
    icon: Home,
  },
  {
    title: "FAQs",
    description: "Common questions answered",
    href: "/contact/faq",
    icon: HelpCircle,
  },
  {
    title: "Location & Directions",
    description: "How to reach us",
    href: "/contact/location",
    icon: MapPin,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact & Visit"
        description="We welcome sincere seekers. Reach out to us or plan your visit to the ashram."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      {/* Quick Links */}
      <SectionWrapper variant="white">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href} className="group block">
              <Card className="h-full bg-secondary hover:bg-primary/10 border-none transition-colors">
                <CardContent className="p-5">
                  <link.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-3 font-medium text-foreground group-hover:text-primary transition-colors">
                    {link.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {link.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* Contact Form & Info */}
      <SectionWrapper variant="cream">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Send Us a Message
            </h2>
            <p className="mt-2 text-muted-foreground">
              Fill out the form below and we will get back to you within 2-3 business days.
            </p>

            <form className="mt-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your name" className="mt-1.5 bg-card" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="mt-1.5 bg-card"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone">Phone (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="mt-1.5 bg-card"
                />
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Select>
                  <SelectTrigger className="mt-1.5 bg-card">
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="visit">Planning a Visit</SelectItem>
                    <SelectItem value="accommodation">Accommodation Booking</SelectItem>
                    <SelectItem value="event">Event Registration</SelectItem>
                    <SelectItem value="donation">Donation Inquiry</SelectItem>
                    <SelectItem value="volunteer">Volunteering</SelectItem>
                    <SelectItem value="teachings">Teachings & Publications</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows={5}
                  className="mt-1.5 bg-card"
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Send Message
                <MessageCircle className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Contact Information
            </h2>
            <p className="mt-2 text-muted-foreground">
              Reach out to us through any of the following channels.
            </p>

            <div className="mt-8 space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div id="map" className="mt-8">
              <div className="aspect-4/3 bg-muted rounded-xl overflow-hidden">
                <div className="h-full w-full flex items-center justify-center bg-secondary">
                  <div className="text-center p-6">
                    <MapPin className="h-12 w-12 text-primary mx-auto" />
                    <p className="mt-4 font-medium text-foreground">
                      Swami Debananda Ashram
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Village Road, District Name
                      <br />
                      West Bengal, India - 700001
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="mt-4 border-primary text-primary hover:bg-primary/10 bg-transparent"
                    >
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open in Google Maps
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8 p-6 bg-card rounded-xl border border-border">
              <h3 className="font-medium text-foreground">Connect With Us</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Follow us on social media for daily updates, teachings, and ashram news.
              </p>
              <div className="mt-4 flex gap-3">
                {["Facebook", "YouTube", "Instagram"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Visit Guidelines */}
      <SectionWrapper variant="white">
        <SectionHeader
          title="Visiting Guidelines"
          description="To maintain the sacred atmosphere of the ashram, we request visitors to observe the following"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Dress Code",
              description:
                "Please wear modest, simple clothing. White or light-colored garments are preferred. Avoid shorts and sleeveless tops.",
            },
            {
              title: "Silence",
              description:
                "Maintain silence in meditation areas and during scheduled silent periods. Mobile phones should be on silent mode.",
            },
            {
              title: "Shoes",
              description:
                "Remove footwear before entering the temple, meditation hall, and other sacred spaces.",
            },
            {
              title: "Photography",
              description:
                "Photography is permitted in outdoor areas only. Please ask permission before taking photos of residents.",
            },
            {
              title: "Schedule",
              description:
                "Visitors are encouraged to participate in the ashram schedule, including morning meditation and evening satsang.",
            },
            {
              title: "Offerings",
              description:
                "If you wish to bring offerings, simple items like fruits, flowers, or incense are appreciated.",
            },
          ].map((item) => (
            <Card key={item.title} className="bg-secondary border-none">
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
