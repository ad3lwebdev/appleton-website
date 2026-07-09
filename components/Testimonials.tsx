import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-estuary-dark py-24 text-foam md:py-28">
      <div className="wrap">
        <div className="mx-auto mb-14 max-w-[560px] text-center">
          <p className="eyebrow-light">What guests say</p>
          <h2 className="mt-3 font-display text-[30px] leading-[1.1] text-foam sm:text-[36px]">
            Stories from the shore
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.quote}
              className="rounded-sm border border-foam/10 bg-foam/[0.04] p-8"
            >
              <div className="mb-4 flex gap-1 text-brass">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-brass" />
                ))}
              </div>
              <p className="font-display text-[17px] italic leading-relaxed text-foam/95">
                “{t.quote}”
              </p>
              <div className="mt-6 border-t border-foam/10 pt-4">
                <div className="text-[14px] font-medium">{t.name}</div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.06em] text-brass-light">
                  {t.context}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
