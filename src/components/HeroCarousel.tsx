"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { PropertyImage } from "@/data/images";

type HeroCarouselProps = {
  images: PropertyImage[];
};

export function HeroCarousel({ images }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative min-h-[68vh] overflow-hidden rounded-3xl border border-white/20 bg-ink">
      {images.map((image, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={encodeURI(image.src)}
              alt={image.alt}
              fill
              priority={index < 2}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        );
      })}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="absolute bottom-6 left-6 flex gap-2">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className={`h-2.5 w-8 rounded-full transition ${index === activeIndex ? "bg-white" : "bg-white/35"}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
