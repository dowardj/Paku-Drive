import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#2a2e35] bg-ink py-10">
      <div className="mx-auto flex w-full max-w-content flex-col gap-6 px-6 text-sm text-sand/75 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-base font-semibold text-sand">{siteConfig.address}</p>
          <p>{siteConfig.email}</p>
          <p>{siteConfig.phone}</p>
        </div>
        <div className="flex gap-5">
          <Link href="/gallery" className="hover:text-sand">
            Gallery
          </Link>
          <Link href="/property" className="hover:text-sand">
            Property
          </Link>
          <Link href="/contact" className="hover:text-sand">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
