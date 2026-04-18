import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request information or register interest for 203 Paku Drive, Tairua.",
};

type ContactPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = (await searchParams) ?? {};
  const intentRaw = Array.isArray(params.intent) ? params.intent[0] : params.intent;
  const intent =
    intentRaw === "register-interest"
      ? "I would like to register interest in 203 Paku Drive."
      : intentRaw === "request-information"
        ? "Please send me the information pack for 203 Paku Drive."
        : "";

  return (
    <div className="px-6 py-12">
      <section className="mx-auto grid w-full max-w-content gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-bronze">Private Enquiries</p>
          <h1 className="text-4xl text-ink">Contact the Marketing Team</h1>
          <p className="text-ink/75">
            Submit your details to receive the digital information memorandum, pricing context, and viewing
            availability.
          </p>
          <div className="space-y-1 text-ink/80">
            <p>Email: {siteConfig.email}</p>
            <p>Phone: {siteConfig.phone}</p>
            <p>
              WhatsApp (SG buyers):{" "}
              <a className="text-bronze underline" href={siteConfig.whatsapp}>
                Start chat
              </a>
            </p>
          </div>
        </div>

        <form className="space-y-4 rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
          <label className="block space-y-2 text-sm font-medium text-ink">
            Full name
            <input className="w-full rounded-lg border border-black/20 px-3 py-2" type="text" name="name" required />
          </label>
          <label className="block space-y-2 text-sm font-medium text-ink">
            Email address
            <input className="w-full rounded-lg border border-black/20 px-3 py-2" type="email" name="email" required />
          </label>
          <label className="block space-y-2 text-sm font-medium text-ink">
            Phone / WhatsApp
            <input className="w-full rounded-lg border border-black/20 px-3 py-2" type="tel" name="phone" />
          </label>
          <label className="block space-y-2 text-sm font-medium text-ink">
            Country
            <select className="w-full rounded-lg border border-black/20 px-3 py-2" name="country" defaultValue="NZ">
              <option value="NZ">New Zealand</option>
              <option value="AU">Australia</option>
              <option value="SG">Singapore</option>
              <option value="OTHER">Other</option>
            </select>
          </label>
          <label className="block space-y-2 text-sm font-medium text-ink">
            Message
            <textarea
              className="w-full rounded-lg border border-black/20 px-3 py-2"
              name="message"
              rows={4}
              defaultValue={intent}
            />
          </label>
          <label className="flex items-start gap-2 text-sm text-ink/80">
            <input type="checkbox" className="mt-1" name="consent" required />
            I consent to being contacted about this property and related updates.
          </label>
          <button className="rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white">
            Submit Enquiry
          </button>
        </form>
      </section>
    </div>
  );
}
