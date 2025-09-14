/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#004080',
        'primary-dark': '#002d5f',
        secondary: '#0066cc',
        accent: '#ffd700',
        light: '#f9f9f9',
        dark: '#333',
        success: '#28a745',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        cairo: ['var(--font-cairo)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}





