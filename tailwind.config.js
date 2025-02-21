/** @type {import('tailwindcss').Config} */
 
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}" // Ensures Tailwind scans these files for class usage
    ],
    theme: {
      extend: {
        colors: {
            yellow_color: "var(--yellow_color)",
            text_black_color: "var(--text_black_color)",
            bg_gray_one: "var(--bg_gray_one)",
            bg_gray_two: "var(--bg_gray_two)",
            bg_white_one: "var(--bg_white_one)",
            bg_white: "var(--bg_white)",
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"]
        }
      }
    },
    plugins: []
  };