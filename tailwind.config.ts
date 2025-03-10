import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        switzer: "Switzer, sans-serif",
        zodiak: "Zodiak, serif",
        "h2-chambre": "Zodiak, serif",
        "h3-chambre": "Zodiak, serif",
        "h3-home": "Zodiak, serif",
        p: "Switzer, sans-serif",
      },
      colors: {
        background: "#DDD2DA",
        content: "#0A0709",
        "background-secondary": "#614457",
        "content-secondary": "#614457",
        "content-ter": "#F3EDF1",
      },
      fontSize: {
        "h2-chambre": "38px",
        "h3-chambre": "32px",
        "h3-home": "24px",
        p: "16px",
      },
      fontWeight: {
        "h2-chambre": "bold",
        "h3-chambre": "600",
        "h3-home": "bolder",
      },
      padding: {
        desktop: "0px 80px",
        mobile: "0px 24px",
      },
    },
  },
  plugins: [],
};
export default config;
