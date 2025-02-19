import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./scaffold/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { roboto: ["var(--font-roboto)"] },
      colors: {
        primary: "#0863a3",
        secondary: "#1E1E1E",
        foreground: "#383737",
      },
    },
  },
  plugins: [],
} satisfies Config;
