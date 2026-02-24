"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function GalleryGrid({
  images,
  columns = 3,
  className,
}: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === images.length - 1 ? 0 : selectedIndex + 1
      );
    }
  };

  const columnClasses = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  };

  return (
    <>
      <div className={cn("grid gap-4", columnClasses[columns], className)}>
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative aspect-square overflow-hidden rounded-lg bg-muted"
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
            {image.caption && (
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-foreground/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-sm text-background">{image.caption}</p>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-5xl bg-foreground/95 border-none p-0">
          <div className="relative">
            {selectedIndex !== null && (
              <>
                <img
                  src={images[selectedIndex].src || "/placeholder.svg"}
                  alt={images[selectedIndex].alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                {images[selectedIndex].caption && (
                  <p className="absolute bottom-0 inset-x-0 p-4 bg-linear-to-t from-foreground to-transparent text-background text-center">
                    {images[selectedIndex].caption}
                  </p>
                )}
              </>
            )}

            {/* Navigation */}
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-background hover:bg-background/20"
            >
              <ChevronLeft className="h-8 w-8" />
              <span className="sr-only">Previous image</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-background hover:bg-background/20"
            >
              <ChevronRight className="h-8 w-8" />
              <span className="sr-only">Next image</span>
            </Button>

            {/* Counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-foreground/50 backdrop-blur-sm text-background text-sm px-3 py-1 rounded-full">
              {selectedIndex !== null && `${selectedIndex + 1} / ${images.length}`}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
