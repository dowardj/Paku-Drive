import type { Metadata } from "next";
import { lifestyleProfiles, propertyDetails } from "@/config/property";

export const metadata: Metadata = {
  title: "Property Details",
  description:
    "Explore key features, architecture, and lifestyle highlights for 203 Paku Drive, Tairua.",
};

export default function PropertyPage() {
  return (
    <div className="px-6 py-12">
      <section className="mx-auto w-full max-w-content space-y-10">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-bronze">Property Overview</p>
          <h1 className="text-4xl text-ink">Property Details</h1>
          <p className="max-w-3xl text-ink/75">{propertyDetails.tagline}</p>
        </div>

        <div className="grid gap-6 rounded-2xl border border-black/10 bg-white p-6 shadow-soft md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-ink/50">Floor Area</p>
            <p className="mt-2 text-lg font-semibold text-ink">{propertyDetails.floorArea}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-ink/50">Land Size</p>
            <p className="mt-2 text-lg font-semibold text-ink">{propertyDetails.landSize}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-ink/50">Status</p>
            <p className="mt-2 text-lg font-semibold text-ink">Specifications to be confirmed</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
            <h2 className="text-2xl text-ink">Key Features</h2>
            <ul className="mt-4 space-y-2 text-ink/80">
              {propertyDetails.keyFeatures.map((feature) => (
                <li key={feature}>- {feature}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
            <h2 className="text-2xl text-ink">Architectural Notes</h2>
            <p className="mt-4 text-ink/80">{propertyDetails.architecturalNotes}</p>
          </article>
        </div>

        <article className="rounded-2xl border border-black/10 bg-white p-4 shadow-soft">
          <h2 className="px-2 pt-2 text-2xl text-ink">Location</h2>
          <div className="mt-4 overflow-hidden rounded-xl">
            <iframe
              title="203 Paku Drive map"
              src="https://www.google.com/maps?q=203+Paku+Drive,+Tairua,+New+Zealand&output=embed"
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </article>

        <section className="space-y-4">
          <h2 className="text-2xl text-ink">Lifestyle Highlights by Buyer Profile</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {lifestyleProfiles.map((profile) => (
              <article key={profile.market} className="rounded-2xl border border-black/10 bg-white p-5 shadow-soft">
                <h3 className="text-xl text-ink">{profile.market}</h3>
                <ul className="mt-3 space-y-2 text-sm text-ink/80">
                  {profile.highlights.map((point) => (
                    <li key={point}>- {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
