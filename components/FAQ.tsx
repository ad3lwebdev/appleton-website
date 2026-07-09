import { faqs } from "@/lib/data";

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-24 md:py-28">
      <div className="wrap">
        <div className="mx-auto mb-14 max-w-[560px] text-center">
          <p className="eyebrow">Good to know</p>
          <h2 className="mt-3 font-display text-[30px] leading-[1.1] text-basalt sm:text-[36px]">
            Frequently asked questions
          </h2>
        </div>

        <div className="mx-auto max-w-[760px]">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              open={i === 0}
              className="group border-b border-basalt/10 py-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[18px] text-basalt">
                {f.q}
                <span className="shrink-0 text-tide transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3.5 max-w-[640px] text-[15px] leading-relaxed text-basalt/65">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
