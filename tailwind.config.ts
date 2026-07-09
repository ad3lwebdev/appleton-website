import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        estuary: {
          DEFAULT: "#0F2E29",
          dark: "#0A211D",
          light: "#173E37",
        },
        basalt: {
          DEFAULT: "#1B1815",
          light: "#2B2620",
        },
        brass: {
          DEFAULT: "#BE8A3F",
          dark: "#9C6E2C",
          light: "#E0B36B",
        },
        ember: {
          DEFAULT: "#B14A2C",
          dark: "#8C3A22",
        },
        foam: {
          DEFAULT: "#F4EFE3",
          deep: "#EAE1CC",
        },
        tide: {
          DEFAULT: "#5C8880",
          light: "#8FB0A9",
        },
      },
      fontFamily: {
        display: ["var(--font-instrument)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-plex)", "monospace"],
      },
      maxWidth: {
        wrap: "1240px",
      },
      spacing: {
        4.5: "1.125rem",
      },
      boxShadow: {
        soft: "0 24px 60px rgba(10,33,29,0.16)",
      },
      backgroundImage: {
        "grain": "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44NSIgbnVtT2N0YXZlcz0iMiIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')",
      },
    },
  },
  plugins: [],
};
export default config;
