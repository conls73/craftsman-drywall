/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        blue: {
          brand: '#29ABE2',
          dark: '#1a8fc0',
          light: '#e8f6fd',
        },
        navy: {
          DEFAULT: '#0F2341',
          light: '#1a3560',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
