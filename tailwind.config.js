/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FF3147",
          200: "#672C2C1F",
          300: "#FAFAFA",
        },
        secondary: {
          100: "#B1B1B1",
          200: "#F4F4F4",
          300: "#F6F6F6",
          400: "#808080",
          500: "#757575",
        },
        foreground: {
          100: "#6F718F99",
          200: "#616678",
        },
      },
      fontFamily: {
        poppins: "poppins",
        commorantSc: "Cormorant SC",
      },
      boxShadow: {
        cardHoverShadow: "3px 6px 20px #672C2C1F;",
      },
    },
    screens: {
      xs: "350px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "2.8rem",
    },
    backgroundImage: {
      footerBg: "url('/images/footerBg.png')",
    },
  },
  plugins: [],
};
