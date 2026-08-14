import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        urja: {
          bg: "#0f1729", // Primary dark background
          saffron: "#FF9933", // Warm accent
          green: "#10B981", // Highlight accent
        }
      },
    },
  },
  plugins: [],
};
export default config;
