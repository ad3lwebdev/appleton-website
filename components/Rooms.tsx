import Image from "next/image";
import { rooms, statusMap } from "@/lib/data";

export default function Rooms() {
  return (
    <section id="rooms" className="bg-white py-24 md:py-32">
      <div className="wrap">
        <div className="mb-14 max-w-[620px]">
          <p className="eyebrow">Where to stay</p>
          <h2 className="mt-3 font-display text-[30px] leading-[1.1] text-basalt sm:text-[40px]">
            Villas, cottages & riverside rooms
          </h2>
          <p className="mt-4 text-[16px] text-basalt/70">
            Eight room types across the property, from day-use cottages on
            the sand to air-conditioned villas facing open water. Book
            direct and skip the platform fees.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => {
            const status = statusMap[room.status];
            return (
              <div
                key={room.name}
                className="group overflow-hidden rounded-sm border border-basalt/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={room.img}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <h3 className="font-display text-[20px] text-basalt">
                      {room.name}
                    </h3>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.05em] ${status.className}`}
                    >
                      {status.label}
                    </span>
                  </div>
                  <p className="mb-5 text-[14.5px] leading-relaxed text-basalt/65">
                    {room.desc}
                  </p>
                  <div className="flex items-center justify-between border-t border-basalt/10 pt-4">
                    <div className="font-mono text-[13.5px] text-basalt">
                      {room.price}{" "}
                      <span className="text-basalt/50">{room.unit}</span>
                    </div>
                    <a
                      href="#booking"
                      className="flex items-center gap-1.5 text-[13px] font-semibold text-estuary transition-transform hover:gap-2.5"
                    >
                      Check dates →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
