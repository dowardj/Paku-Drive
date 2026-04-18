import Image from "next/image";
import type { PropertyImage } from "@/data/images";

type GalleryGridProps = {
  images: PropertyImage[];
};

export function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => (
        <figure key={image.src} className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-soft">
          <div className="relative aspect-[4/3]">
            <Image
              src={encodeURI(image.src)}
              alt={image.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
          <figcaption className="px-4 py-3 text-sm text-ink/75">{image.alt}</figcaption>
        </figure>
      ))}
    </div>
  );
}
