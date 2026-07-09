import { Facebook, Instagram } from "lucide-react";
import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-estuary-dark py-14 text-foam/70">
      <div className="wrap">
        <div className="flex flex-wrap justify-between gap-10 border-b border-foam/10 pb-9">
          <div className="max-w-[280px]">
            <a href="#arrival" className="font-display italic text-lg text-foam">
              {site.name}
            </a>
            <p className="mt-3 text-[14px]">
              A beachfront resort and restaurant where a river meets the
              Pacific, in Real, Quezon.
            </p>
          </div>

          <div className="flex flex-wrap gap-14">
            <FootCol
              title="Explore"
              links={[
                ["Rooms & villas", "#rooms"],
                ["Restaurant", "#dine"],
                ["Gallery", "#gallery"],
                ["Location", "#location"],
              ]}
            />
            <FootCol
              title="Guests"
              links={[
                ["FAQ", "#faq"],
                ["Book direct", "#booking"],
              ]}
            />
            <FootCol
              title="Contact"
              links={[
                [site.phones[0], `tel:${site.phones[0].replace(/\s/g, "")}`],
                ["facebook.com/ALPBeachREAL", site.facebook],
              ]}
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 text-[12.5px]">
          <span>
            © {new Date().getFullYear()} {site.full}. All rights reserved.
          </span>
          <div className="flex gap-4">
            <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FootCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h5 className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.08em] text-brass">
        {title}
      </h5>
      {links.map(([label, href]) => (
        <a key={label} href={href} className="mb-2.5 block text-[14px] hover:text-foam">
          {label}
        </a>
      ))}
    </div>
  );
}
