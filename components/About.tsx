import Image from "next/image";
import { IMG, site } from "@/lib/data";

export default function About() {
  return (
    <section id="stay" className="bg-foam py-24 md:py-32">
      <div className="wrap grid grid-cols-1 items-center gap-14 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="eyebrow">The resort</p>
          <h2 className="mt-3 font-display text-[30px] leading-[1.1] text-basalt sm:text-[40px]">
            A rare shoreline, where a river argues with the sea
          </h2>
          <p className="mt-6 text-[16.5px] leading-relaxed text-basalt/75">
            Appleton Little Paradise sits on a bridge over Sitio Talisay, in
            Barangay Capalong, Real — the exact point where a freshwater
            river runs into the open Pacific. It's an unusual setting for a
            resort, and it's the reason the beach here is part dark volcanic
            sand, part river current, and entirely unlike the calm, pale
            coves further down the coast.
          </p>
          <p className="mt-4 text-[16.5px] leading-relaxed text-basalt/75">
            Since {site.established}, the resort has grown from a family
            beach stop into a full property: pools, riverside glamping, a
            function hall, and a seafood kitchen that runs on the same-day
            catch — while keeping the thing people actually drive three
            hours for: the water, from two directions at once.
          </p>
          <div className="mt-10 flex flex-wrap gap-10">
            {[
              ["8+", "Room & villa types"],
              ["2", "Bodies of water on-site"],
              ["7", "Days a week dining"],
            ].map(([n, l]) => (
              <div key={l}>
                <strong className="block font-display text-[30px] text-estuary">
                  {n}
                </strong>
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-basalt/60">
                  {l}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-soft">
          <Image
            src={IMG.about}
            alt="Appleton Little Paradise grounds at golden hour"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 45vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
