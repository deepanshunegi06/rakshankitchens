import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C9A66B',
        'primary-hover': '#B08B57',
        secondary: '#1A1A1A',
        'secondary-hover': '#2A2A2A',
        bg: {
          DEFAULT: '#FFFFFF',
          dark: '#1A1A1A',
        },
        text: {
          DEFAULT: '#1A1A1A',
          light: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [],
};

export default config; 