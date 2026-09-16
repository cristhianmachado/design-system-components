/** @type {import('tailwindcss').Config} */
export default {
  presets: [require("./tailwind.preset.cjs")],
  content: ["./index.html", "./src/**/*.{ts,tsx}", "./demo/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
