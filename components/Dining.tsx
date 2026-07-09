import Image from "next/image";
import { dishes } from "@/lib/data";

export default function Dining() {
  return (
    <section id="table" className="bg-foam py-24 md:py-32">
      <div className="wrap">
        <div className="mb-14 max-w-[620px]">
          <p className="eyebrow">The restaurant</p>
          <h2 className="mt-3 font-display text-[30px] leading-[1.1] text-basalt sm:text-[40px]">
            Dine at the river's mouth
          </h2>
          <p className="mt-4 text-[16px] text-basalt/70">
            Seafood restaurant, seaside dining, and a riverside bar with free
            videoke — open to overnight guests and day visitors, seven days
            a week.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {dishes.map((d) => (
            <div
              key={d.name}
              className="overflow-hidden rounded-sm border border-basalt/10 bg-white"
            >
              <div className="relative h-44">
                <Image
                  src={d.img}
                  alt={d.name}
                  fill
                  className="object-cover"
                  sizes="(min-width:768px) 33vw, 100vw"
                />
              </div>
              <div className="p-6">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ember">
                  {d.tag}
                </p>
                <h4 className="mt-2 font-display text-[19px] text-basalt">
                  {d.name}
                </h4>
                <p className="mt-2 text-[14.5px] leading-relaxed text-basalt/65">
                  {d.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
