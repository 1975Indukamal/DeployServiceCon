/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss"
const plugin = require('tailwindcss/plugin')
const defaultTheme = require("tailwindcss/defaultTheme");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ca8a04",
        secondary: "#5F5E5E",
        dark: "#202124",
        "dark-primary": "#2C3441",
        "light-primary": "#F6F6F6",
        "body": "#FFFBEB",
        bgc: "#2B0D5D",
        custombgc: " #1C173D",
      },

      backgroundImage: {
        "hero-pattern-secondary": "linear-gradient(118deg, #5393FB 24.91%, rgba(83, 147, 251, 0.00) 86.55%)",
        "hero-pattern-primary": "linear-gradient(299deg, #EB7373 13.23%, rgba(235, 115, 115, 0.00) 77.27%)",
        "sand-paper":"url(/assets/images/Texture.png)"
      },

      animation: {
        'flip': 'flip .5s ease-in-out',
        "slideup": "slideup 1s ease-in-out",
        'slide_down': 'slideup 1s ease-in-out reverse', 
      },

      keyframes:{
        "flip":  {
          "0%": {
            transition: "transform .5s ease-in-out",
            transform: "scale(0) rotateZ(-29deg) rotateY(-184deg) rotateX(6deg)",
            opacity: "1",
          },
          "100%" :{
            transform: "scale(1) rotateZ(-29deg) rotateY(-15deg) rotateX(6deg)",
            transition: "transform .5s ease-in-out", 
            opacity: "0"
          }
          
        },

        'slideup': {
          '0%': {
            transform: 'translateY(100%) scaleY(1)',
            'transform-origin': 'top',
            opacity: "1",
          },
          '50%': {
            transform: 'translateY(0)',
            'transform-origin': 'top',
          },
          '100%': {
            transform: 'translateY(0) scaleY(0)',
            'transform-origin': 'top',
          },
        },

        "tilt":{
          "0%":{
            transform:"rotate(0deg)"
          },
          "100%":{
            transform:"rotate(-10deg)"
          }
        }
     
      }

    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "3rem",
        xl: "2rem",
        lg: "2rem",

      }
    },
    fontFamily: {
      body: ['"Poppins"', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      xs: "400px",
      sm: "540px",
      md: "768px",
      lg: "984px",
      xl: "1300px",
    },
  },

  plugins: [
    plugin(function ({ addComponents }: { addComponents: any }) {

      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen xl': {
            maxWidth: '1320px',
          },

        }
      })
    })
  ],
};

module.exports = config