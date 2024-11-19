/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        IBM: ['IBM Plex Mono', 'monospace'],
        MonoSpace: ['Space Mono, monospace']
      }
    },
  },
  plugins: [],
}

