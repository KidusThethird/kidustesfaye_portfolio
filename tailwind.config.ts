import type { Config } from "tailwindcss";

export default {
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
        primaryColor: "#A5900F",
      },
      screens: {
        xxsm: "350px",
        xsm: "440px",
        sm: "510px",
        ssmd: "610px",
        smd: "710px",
        md: "768px",
        xmd: "850px",
        xxmd: "930px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
        //     "2xl": "1400px",
      },
    },
  },
  plugins: [],
} satisfies Config;
