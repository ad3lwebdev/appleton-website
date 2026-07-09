import Image from "next/image";
import { IMG } from "@/lib/data";

export default function Gallery() {
  const shots = IMG.gallery;
  return (
    <section id="shore" className="bg-white py-24 md:py-32">
      <div className="wrap">
        <div className="mb-14 max-w-[620px]">
          <p className="eyebrow">A look around</p>
          <h2 className="mt-3 font-display text-[30px] leading-[1.1] text-basalt sm:text-[40px]">
            The grounds, in pictures
          </h2>
          <p className="mt-4 text-[16px] text-basalt/70">
            A working preview from the property — swap in fresh drone and
            golden-hour shots as they come in.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {shots.map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-sm ${
                i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
              }`}
            >
              <Image
                src={src}
                alt="Appleton Little Paradise grounds"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(min-width:768px) 25vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
