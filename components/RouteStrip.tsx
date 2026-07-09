const stats = [
  { label: "From Manila", value: "~140 km via Marilaque" },
  { label: "Drive time", value: "~3 hrs by car" },
  { label: "Since", value: "Open year-round since 2018" },
  { label: "Address", value: "Brgy. Capalong, Real, Quezon" },
];

export default function RouteStrip() {
  return (
    <div className="bg-estuary-dark text-foam">
      <div className="wrap flex flex-wrap">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex-1 basis-[220px] border-b border-r border-foam/10 px-8 py-6 last:border-r-0 ${
              i === stats.length - 1 ? "border-r-0" : ""
            }`}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-foam/50">
              {s.label}
            </div>
            <div className="mt-1 font-mono text-[14.5px] font-medium">
              {s.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
