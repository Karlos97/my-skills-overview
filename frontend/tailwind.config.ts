import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  theme: {
    extend: {
      colors: {
        'logo-dark': '#E6E7E7',
        'logo-light': '#1A2332',
        'custom-green': '#138E23',
        'custom-orange': '#F08E29',
        'custom-turquoise': '#119F8F',
        'custom-dark-500': '#1A2332',
        'custom-dark-300': '#212E44',
        'custom-beige-500': '#E8E0D3',
        'custom-beige-300': '#FFEEDC',
        'custom-dark': '#191414',
      },
    },
  },
  plugins: [],
};

export default config;
