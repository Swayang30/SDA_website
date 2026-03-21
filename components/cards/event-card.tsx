"use client";

import Link from "next/link";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time?: string;
  location?: string;
  href: string;
  image?: string;
  featured?: boolean;
  category?: string;
}

export function EventCard({
  title,
  description,
  date,
  time,
  location,
  href,
  image,
  featured = false,
  category,
}: EventCardProps) {
  const { t } = useLanguage();

  return (
    <Card
      className={cn(
        "group overflow-hidden bg-card border-border hover:shadow-lg transition-all duration-300",
        featured && "md:col-span-2"
      )}
    >
      {image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <CardContent className={cn("p-6", featured && "md:p-8")}>
        {category && (
          <span className="inline-block mb-3 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 rounded-full">
            {category}
          </span>
        )}
        <h3
          className={cn(
            "font-serif font-semibold text-foreground group-hover:text-primary transition-colors text-balance",
            featured ? "text-2xl md:text-3xl" : "text-xl"
          )}
        >
          {title}
        </h3>
        <p className="mt-3 text-muted-foreground line-clamp-2 leading-relaxed">
          {description}
        </p>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{date}</span>
          </div>
          {time && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" />
              <span>{time}</span>
            </div>
          )}
          {location && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{location}</span>
            </div>
          )}
        </div>

        <Button
          asChild
          variant="outline"
          className="mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
        >
          <Link href={href}>{t.common.learnMore}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
