/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A1F44", // Deep Engineering Blue
          light: "#123A73",
          dark: "#07152E",
        },
        secondary: {
          DEFAULT: "#4B5563", // Steel Gray
          light: "#6B7280",
          dark: "#374151",
        },
        background: {
          DEFAULT: "#F3F4F6", // Light industrial gray
          dark: "#E5E7EB",
        },
      },
    },
  },
  plugins: [],
}