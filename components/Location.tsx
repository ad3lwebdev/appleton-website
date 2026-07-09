import { MapPin, Route, Milestone, Bike } from "lucide-react";
import { site } from "@/lib/data";

const points = [
  { icon: MapPin, title: "Address", body: site.address },
  {
    icon: Route,
    title: "Via Marilaque",
    body: "Marikina → Infanta → Real. About three hours from Manila by car.",
  },
  {
    icon: Milestone,
    title: "Nearby",
    body: "Real town proper, and the jump-off point for Cagbalete Island.",
  },
  {
    icon: Bike,
    title: "Road conditions",
    body: "Fully paved via Marilaque — a well-travelled weekend route for riders.",
  },
];

export default function Location() {
  return (
    <section id="location" className="bg-foam py-24 md:py-32">
      <div className="wrap grid grid-cols-1 items-center gap-14 md:grid-cols-2">
        <div>
          <p className="eyebrow">Getting here</p>
          <h2 className="mt-3 font-display text-[30px] leading-[1.1] text-basalt sm:text-[36px]">
            Real, Quezon — Pacific coast
          </h2>
          <ul className="mt-7 divide-y divide-basalt/10">
            {points.map((p) => (
              <li key={p.title} className="flex gap-4 py-4">
                <p.icon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-tide" strokeWidth={1.5} />
                <div>
                  <strong className="block text-[15px] font-semibold text-basalt">
                    {p.title}
                  </strong>
                  <span className="text-[14.5px] text-basalt/65">{p.body}</span>
                </div>
              </li>
            ))}
          </ul>
          <a href={site.mapsQuery} target="_blank" rel="noreferrer" className="btn btn-outline mt-2">
            Get directions
          </a>
        </div>

        <div className="relative h-[380px] overflow-hidden rounded-sm bg-estuary-dark md:h-[440px]">
          <svg viewBox="0 0 500 420" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
            <rect width="500" height="420" fill="#0A211D" />
            <path
              d="M80,40 C140,90 120,150 170,190 C220,230 210,280 260,310 C300,335 320,360 360,380"
              stroke="#173E37"
              strokeWidth="10"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M80,40 C140,90 120,150 170,190 C220,230 210,280 260,310 C300,335 320,360 360,380"
              stroke="#E0B36B"
              strokeWidth="1.6"
              strokeDasharray="3 8"
              fill="none"
              opacity="0.85"
            />
            <circle cx="80" cy="40" r="6" fill="#BE8A3F" />
            <circle cx="360" cy="380" r="7" fill="#BE8A3F" />
            <path
              d="M0,420 L0,340 C90,320 150,350 230,338 C320,324 380,350 500,330 L500,420 Z"
              fill="#081A16"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
