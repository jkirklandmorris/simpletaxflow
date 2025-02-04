import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#fff",
        foreground: "#0A2540",
        primary: {
          DEFAULT: "#635BFF",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F6F9FC",
          foreground: "#0A2540",
        },
        muted: {
          DEFAULT: "#425466",
          foreground: "#697386",
        },
        accent: {
          DEFAULT: "#00D4FF",
          foreground: "#0A2540",
        },
      },
      maxWidth: {
        container: "1200px",
      },
      fontFamily: {
        sans: ["Inter", "Helvetica Neue", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at top left, #BF40BF, #635BFF, #00D4FF)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;