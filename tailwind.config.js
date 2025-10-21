/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eefaff",
          100: "#d6efff",
          200: "#b3e3ff",
          300: "#85d3ff",
          400: "#4fbaff",
          500: "#2099ff",
          600: "#0f77e6",
          700: "#0e60b8",
          800: "#104f90",
          900: "#123f70",
          950: "#0c294b"
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          md: "2rem",
          lg: "2rem",
          xl: "2.5rem",
          "2xl": "3rem",
        },
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.08)",
        glow: "0 10px 40px rgba(32,153,255,0.35)",
      },
      borderRadius: {
        "2xl": "1.25rem"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
