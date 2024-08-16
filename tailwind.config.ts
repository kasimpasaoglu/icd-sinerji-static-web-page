import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      colors: {
        primary: "hsl(205, 82%, 40%)",
        primarydark: "hsl(205, 82%, 25%)",
        primarylight: "hsl(205, 82%, 50%)",

        secondary: "hsl(0, 0%, 10%)",
        secondarydark: "hsl(0, 0%, 0%)",
        secondarylight: "hsl(0, 0%, 20%)",
      },
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      backdropBlur: {
        xxs: '2px',
      },

      height: {
        'carousel':'75vh'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
      }
    },
  },
  plugins: [],
};

export default config;
