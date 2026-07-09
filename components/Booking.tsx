"use client";

import { useState } from "react";
import { Phone, Facebook, MapPin, CalendarCheck } from "lucide-react";
import { site } from "@/lib/data";

export default function Booking() {
  const [sent, setSent] = useState(false);

  return (
    <section id="booking" className="bg-estuary py-24 text-foam md:py-32">
      <div className="wrap grid grid-cols-1 gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow-light">Book direct</p>
          <h2 className="mt-3 font-display text-[30px] leading-[1.1] text-foam sm:text-[42px]">
            Your little paradise is waiting
          </h2>
          <p className="mt-5 max-w-[420px] text-[16px] text-foam/75">
            Send your dates and we'll confirm availability directly — no
            platform fees, no middleman.
          </p>
          <ul className="mt-9 divide-y divide-foam/10 border-t border-foam/10">
            {[
              { icon: Phone, label: site.phones.join(" / ") },
              { icon: Facebook, label: "facebook.com/ALPBeachREAL" },
              { icon: MapPin, label: site.address },
            ].map((c) => (
              <li key={c.label} className="flex items-center gap-3.5 py-4 text-[14.5px]">
                <c.icon className="h-4 w-4 shrink-0 text-brass" strokeWidth={1.5} />
                {c.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-sm bg-foam p-8 text-basalt md:p-10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Full name">
                <input required placeholder="Juan Dela Cruz" className="field-input" />
              </Field>
              <Field label="Guests">
                <input required type="number" min={1} placeholder="2" className="field-input" />
              </Field>
              <Field label="Check-in">
                <input required type="date" className="field-input" />
              </Field>
              <Field label="Check-out">
                <input required type="date" className="field-input" />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Message">
                <textarea
                  rows={3}
                  placeholder="Room type, group size, or anything else we should know"
                  className="field-input"
                />
              </Field>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button type="submit" className="btn btn-primary">
                <CalendarCheck className="h-4 w-4" /> Check availability &amp; book
              </button>
              <a href={site.messenger} target="_blank" rel="noreferrer" className="btn btn-outline">
                <Facebook className="h-4 w-4" /> Message on Facebook
              </a>
            </div>

            {sent && (
              <p className="mt-4 text-[14px] font-medium text-tide">
                Thanks — we've received your request and will confirm by
                phone or Facebook shortly.
              </p>
            )}
            <p className="mt-4 text-[13px] text-basalt/50">
              This form is a placeholder — connect it to email, SMS, or a
              channel manager (e.g. an API route + Resend/Twilio) to go live.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-mono text-[10.5px] uppercase tracking-[0.06em] text-basalt/60">
        {label}
      </span>
      {children}
    </label>
  );
}
