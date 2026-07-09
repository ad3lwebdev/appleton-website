import { amenitiesList } from "@/lib/data";
import {
  Waves,
  Droplets,
  Flame,
  Tent,
  UtensilsCrossed,
  Music,
  Car,
  Sprout,
  Bath,
} from "lucide-react";

const icons: Record<string, React.ElementType> = {
  waves: Waves,
  droplets: Droplets,
  flame: Flame,
  tent: Tent,
  "utensils-crossed": UtensilsCrossed,
  music: Music,
  "waves-ladder": Bath,
  car: Car,
  sprout: Sprout,
};

export default function Amenities() {
  return (
    <section id="grounds" className="bg-estuary py-24 text-foam md:py-32">
      <div className="wrap">
        <div className="mb-14 max-w-[620px]">
          <p className="eyebrow-light">On the grounds</p>
          <h2 className="mt-3 font-display text-[30px] leading-[1.1] text-foam sm:text-[40px]">
            Everything either side of the water needs
          </h2>
          <p className="mt-4 text-[16px] text-foam/70">
            No resort fees, no surprise add-ons — these come standard with
            every stay.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-foam/10 bg-foam/10 sm:grid-cols-2 lg:grid-cols-3">
          {amenitiesList.map((a) => {
            const Icon = icons[a.icon] ?? Waves;
            return (
              <div key={a.label} className="flex flex-col gap-3.5 bg-estuary-dark p-8">
                <Icon className="h-6 w-6 text-brass" strokeWidth={1.5} />
                <h4 className="font-display text-[17px] text-foam">
                  {a.label}
                </h4>
                <p className="text-[14px] leading-relaxed text-foam/60">
                  {a.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
