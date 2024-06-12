import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionDelay: {
        "1500": "1500ms",
        "2000": "2000ms",
      },
      keyframes: {
        flip: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(180deg)" },
        },
      },
      animation: {
        flip: "flip 5s forwards",
      },
      transitionDuration: {
        "5000": "5000ms",
      },
      animationDelay: {
        "0": "0s",
        "100": "0.1s",
        "200": "0.2s",
        "300": "0.3s",
        "400": "0.4s",
        "500": "0.5s",
        "600": "0.6s",
        "700": "0.7s",
        "800": "0.8s",
        "900": "0.9s",
        "1000": "1s",
        "1500": "1.5s",
        "2000": "2s",
        "2500": "2.5s",
        "3000": "3s",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme, e }: PluginAPI) {
      const delays = theme("animationDelay") as { [key: string]: string };
      const utilities = Object.entries(delays).map(([key, value]) => ({
        [`.${e(`animation-delay-${key}`)}`]: {
          animationDelay: value,
        },
      }));
      addUtilities(utilities, undefined); // Explicitly specify the type as null
    }),
  ],
};
export default config;
