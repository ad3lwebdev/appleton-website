"use client";

import { useEffect, useRef, useState } from "react";
import { estuaryNodes } from "@/lib/data";

// The Estuary Line: a fixed rail tracing the same journey a guest makes —
// off the highway, over the bridge, through the grounds, to the table,
// along the shore, and out to the water. It fills as you scroll and
// mirrors the resort's own pitch: ocean-and-riverfront, in one shape.
export default function EstuaryRail() {
  const [active, setActive] = useState(0);
  const [fillPct, setFillPct] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = estuaryNodes
      .map((n) => document.getElementById(n.id))
      .filter(Boolean) as HTMLElement[];

    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      const pct = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
      setFillPct(pct);

      let idx = 0;
      sections.forEach((sec, i) => {
        if (window.scrollY + window.innerHeight * 0.4 >= sec.offsetTop) idx = i;
      });
      setActive(idx);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={railRef}
      className="pointer-events-none fixed left-6 top-0 z-40 hidden h-screen w-10 lg:flex"
      aria-hidden="true"
    >
      <div className="relative mx-auto h-[70vh] w-px translate-y-[15vh] bg-basalt/15">
        <div
          className="absolute left-0 top-0 w-px bg-gradient-to-b from-tide via-brass to-ember transition-[height] duration-150 ease-out"
          style={{ height: `${fillPct * 100}%` }}
        />
        {estuaryNodes.map((node, i) => (
          <div
            key={node.id}
            className="absolute -left-[3px] flex items-center"
            style={{ top: `${(i / (estuaryNodes.length - 1)) * 100}%` }}
          >
            <span
              className={`block h-[7px] w-[7px] rounded-full transition-colors duration-300 ${
                i <= active ? "bg-brass" : "bg-basalt/25"
              }`}
            />
            <span
              className={`pointer-events-auto ml-3 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.14em] transition-opacity duration-300 ${
                i === active ? "opacity-100 text-basalt" : "opacity-0"
              }`}
            >
              {node.sub} · {node.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
