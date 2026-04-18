import { HeroCarousel } from "@/components/HeroCarousel";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { heroImages } from "@/data/images";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-ink to-[#10151d] px-6 pb-16 pt-8 text-sand">
      <section className="mx-auto grid w-full max-w-content gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.22em] text-mist">International Coastal Offering</p>
          <h1 className="text-4xl leading-tight md:text-5xl">
            203 Paku Drive, Tairua - A Landmark Coastal Property
          </h1>
          <p className="max-w-xl text-base text-sand/80 md:text-lg">
            Crafted for New Zealand, Australian, and Singaporean buyers seeking a premium coastal foothold with
            panoramic sea views, architectural distinction, and enduring lifestyle value.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact?intent=request-information">Request Information</ButtonLink>
            <ButtonLink href="/contact?intent=register-interest" variant="secondary">
              Register Interest
            </ButtonLink>
          </div>
          <div className="grid gap-4 pt-3 md:grid-cols-3">
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-mist">Ocean Views</p>
              <p className="mt-2 text-sm text-sand/85">Elevated outlooks across coastline and harbour approaches.</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-mist">Architecture</p>
              <p className="mt-2 text-sm text-sand/85">Distinctive design language with adaptable modern living zones.</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-mist">Lifestyle</p>
              <p className="mt-2 text-sm text-sand/85">Close to beaches, marinas, golf, and Tairua village amenities.</p>
            </div>
          </div>
        </div>
        <HeroCarousel images={heroImages} />
      </section>
    </div>
  );
}
