import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import {
  ArchitecturalRendersPlaceholder,
  DroneVideoPlaceholder,
  FloorplanPlaceholder,
  InteriorGalleryPlaceholder,
  Walkthrough3DPlaceholder,
} from "@/components/placeholders";
import { propertyImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View the image gallery for 203 Paku Drive, Tairua, including panoramic outlooks and interior spaces.",
};

export default function GalleryPage() {
  return (
    <div className="px-6 py-12">
      <section className="mx-auto w-full max-w-content space-y-8">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-bronze">Visual Portfolio</p>
          <h1 className="text-4xl text-ink">Property Gallery</h1>
          <p className="max-w-3xl text-ink/75">
            A curated look at elevation, outlook, and interior living zones for 203 Paku Drive.
          </p>
        </div>

        <GalleryGrid images={propertyImages} />

        <div className="grid gap-4 md:grid-cols-2">
          <DroneVideoPlaceholder />
          <Walkthrough3DPlaceholder />
          <InteriorGalleryPlaceholder />
          <FloorplanPlaceholder />
          <ArchitecturalRendersPlaceholder />
        </div>
      </section>
    </div>
  );
}
