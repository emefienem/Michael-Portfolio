import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#ece7e1",
      secondary: "#1a1818",
    },
    extend: {
      fontFamily: {
        local: "var(--fontFamilyLocal)",
      },
    },
  },
  plugins: [],
};
export default config;
