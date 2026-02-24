"use client";

import Link from "next/link";
import { Play, Clock, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TeachingCardProps {
  title: string;
  excerpt: string;
  href: string;
  type: "article" | "video" | "audio";
  duration?: string;
  date?: string;
  image?: string;
  category?: string;
}

const typeConfig = {
  article: {
    icon: BookOpen,
    label: "Article",
  },
  video: {
    icon: Play,
    label: "Video",
  },
  audio: {
    icon: Play,
    label: "Audio",
  },
};

export function TeachingCard({
  title,
  excerpt,
  href,
  type,
  duration,
  date,
  image,
  category,
}: TeachingCardProps) {
  const { icon: TypeIcon, label: typeLabel } = typeConfig[type];

  return (
    <Link href={href} className="group block">
      <Card className="h-full overflow-hidden bg-card border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300">
        {image && (
          <div className="relative aspect-video overflow-hidden">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {type !== "article" && (
              <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Play className="h-6 w-6 ml-1" />
                </div>
              </div>
            )}
          </div>
        )}
        <CardContent className="p-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
              <TypeIcon className="h-3 w-3" />
              {typeLabel}
            </span>
            {category && (
              <span className="text-xs text-muted-foreground">{category}</span>
            )}
          </div>

          <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-balance">
            {title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {excerpt}
          </p>

          <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
            {duration && (
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {duration}
              </span>
            )}
            {date && <span>{date}</span>}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
