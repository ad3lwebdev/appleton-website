export default function Hero() {
  return (
    <section
      id="arrival"
      className="relative flex min-h-screen items-end overflow-hidden bg-gradient-to-b from-[#F6C878] via-[#D97C56] to-estuary-dark"
    >
      <div className="absolute left-1/2 top-[20%] h-36 w-36 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_40%_35%,#FFEBC2,#E0B36B_70%)] shadow-[0_0_100px_rgba(224,179,107,0.55)]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        {/* Sierra Madre silhouette */}
        <path d="M0,560 C220,500 340,520 480,470 C620,420 700,360 820,330 C930,304 1040,260 1160,210 C1280,160 1360,140 1440,130 L1440,0 L0,0 Z" fill="#173E37" opacity="0.5" />
        <path d="M0,620 C240,560 360,600 520,540 C660,488 760,430 900,400 C1040,370 1160,320 1440,240 L1440,0 L0,0 Z" fill="#0F2E29" opacity="0.4" />

        {/* the river, winding from the mountains to the sea */}
        <path
          d="M120,420 C220,470 300,510 350,555 C400,600 430,635 470,655 C520,680 560,700 610,730 C660,758 700,790 760,810"
          stroke="#F4EFE3"
          strokeWidth="2.5"
          strokeDasharray="1 9"
          strokeLinecap="round"
          fill="none"
          opacity="0.65"
        />
        <circle cx="120" cy="420" r="5" fill="#BE8A3F" />
        <circle cx="760" cy="810" r="6" fill="#BE8A3F" />

        {/* estuary / river mouth meeting the sea */}
        <path d="M0,900 L0,700 C180,660 300,690 440,660 C600,626 700,650 840,640 C980,630 1080,660 1220,645 C1320,634 1380,655 1440,640 L1440,900 Z" fill="#0A211D" opacity="0.92" />
        <path d="M0,900 L0,780 C220,745 360,770 520,745 C680,718 780,748 940,736 C1100,722 1220,752 1440,730 L1440,900 Z" fill="#081A16" />

        {/* palms */}
        <g fill="#081A16" opacity="0.92">
          <path d="M180,900 L184,760 C186,748 194,748 196,760 L200,900 Z" />
          <path d="M188,758 C160,730 130,738 108,724 C132,742 160,742 188,758 Z" />
          <path d="M188,758 C214,726 246,732 268,714 C246,738 214,742 188,758 Z" />
          <path d="M190,758 C176,720 178,690 162,664 C186,684 194,720 190,758 Z" />
        </g>
        <g fill="#081A16" opacity="0.92">
          <path d="M1250,900 L1254,780 C1256,770 1262,770 1264,780 L1268,900 Z" />
          <path d="M1256,778 C1230,752 1204,760 1184,746 C1206,764 1232,764 1256,778 Z" />
          <path d="M1256,778 C1280,748 1308,754 1328,738 C1308,760 1280,764 1256,778 Z" />
        </g>
      </svg>

      <div className="absolute inset-0 bg-gradient-to-t from-estuary-dark/75 via-estuary-dark/20 to-transparent" />

      <div className="relative z-10 w-full pb-28 pt-40">
        <div className="wrap max-w-[720px]">
          <p className="flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.18em] text-brass-light before:h-px before:w-6 before:bg-brass-light before:content-['']">
            Real, Quezon · where the river meets the Pacific
          </p>
          <h1 className="mt-5 font-display italic text-[42px] leading-[1.05] text-foam sm:text-[56px] lg:text-[76px]">
            Appleton Little Paradise
          </h1>
          <p className="mt-5 max-w-[540px] text-[18px] text-foam/90">
            A beachfront resort and restaurant built at a river mouth on the
            Pacific coast — ocean on one side, current on the other, about
            three hours from Manila via Marilaque.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#booking" className="btn btn-primary">
              Check availability
            </a>
            <a href="#rooms" className="btn btn-ghost">
              View rooms
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-9 right-10 z-10 hidden flex-col items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-foam/70 sm:flex">
        <span>SCROLL</span>
        <span className="h-8 w-px animate-pulse bg-foam/50" />
      </div>
    </section>
  );
}
