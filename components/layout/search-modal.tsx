"use client";

import { useState } from "react";
import { Search, FileText, Video, BookOpen, Calendar } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

interface SearchResult {
  title: string;
  type: "teaching" | "video" | "book" | "event";
  href: string;
  excerpt?: string;
}

const mockResults: SearchResult[] = [
  {
    title: "Understanding the Bhagavad Gita",
    type: "teaching",
    href: "/teachings/vedanta/bhagavad-gita",
    excerpt: "A comprehensive exploration of Lord Krishna's timeless wisdom...",
  },
  {
    title: "Morning Meditation Practice",
    type: "video",
    href: "/teachings/videos/morning-meditation",
    excerpt: "Learn the traditional approach to morning sadhana...",
  },
  {
    title: "The Path of Self-Knowledge",
    type: "book",
    href: "/publications/books/path-of-self-knowledge",
    excerpt: "Swamiji's seminal work on Advaita Vedanta...",
  },
  {
    title: "Mahashivaratri Celebration 2026",
    type: "event",
    href: "/events/upcoming/mahashivaratri-2026",
    excerpt: "Join us for the sacred night of Lord Shiva...",
  },
];

const typeIcons = {
  teaching: FileText,
  video: Video,
  book: BookOpen,
  event: Calendar,
};

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchModal({ open, onOpenChange }: SearchModalProps) {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  const typeLabels = {
    teaching: t.searchModal.teaching,
    video: t.searchModal.video,
    book: t.searchModal.book,
    event: t.searchModal.event,
  };

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.length > 2) {
      // Mock search - in production, this would call an API
      const filtered = mockResults.filter(
        (r) =>
          r.title.toLowerCase().includes(value.toLowerCase()) ||
          r.excerpt?.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl bg-card">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl">
            {t.searchModal.title}
          </DialogTitle>
        </DialogHeader>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder={t.searchModal.placeholder}
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10 h-12 text-base bg-secondary border-border"
          />
        </div>

        {query.length > 2 && (
          <div className="mt-4 max-h-96 overflow-y-auto">
            {results.length > 0 ? (
              <div className="space-y-2">
                {results.map((result) => {
                  const Icon = typeIcons[result.type];
                  return (
                    <Link
                      key={result.href}
                      href={result.href}
                      onClick={() => onOpenChange(false)}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground">
                          {result.title}
                        </p>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {result.excerpt}
                        </p>
                        <span className="mt-1 inline-block text-xs text-primary/80 uppercase tracking-wider">
                          {typeLabels[result.type]}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="text-muted-foreground">
                  {t.searchModal.noResults} "{query}"
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t.searchModal.trySearching}
                </p>
              </div>
            )}
          </div>
        )}

        {query.length === 0 && (
          <div className="mt-4 py-8 text-center">
            <p className="text-muted-foreground">
              {t.searchModal.searchAcross}
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {["Meditation", "Bhagavad Gita", "Vedanta", "Retreats"].map(
                (term) => (
                  <button
                    key={term}
                    onClick={() => handleSearch(term)}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                  >
                    {term}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
