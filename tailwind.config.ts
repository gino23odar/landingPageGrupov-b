import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "softBlack": "#040A1D",
        "brightorange": "#FF3D00",
        "concretewhite": "#F4F4F4",
        "oddblue": "#003e9b",
        "dullwhite": "#767f85",
      },
      dropShadow: {
        'custom-shadow': '0 4px 4px rgba(244,244,244, 0.4)',
      },
    },
  },
  plugins: [],
};
export default config;
