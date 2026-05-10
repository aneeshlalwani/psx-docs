import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './docs/**/*.{md,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        psx: {
          green: '#5ab946',
          'green-dark': '#56ae45',
          'green-darkest': '#3c763d',
          'green-light': '#78b82a',
          'green-lightest': '#dff0d8',
          blue: '#337ab7',
          gold: '#d1a851',
          red: '#a94442',
          ink: '#262626',
          'ink-soft': '#333333',
          muted: '#555555',
          'muted-soft': '#777777',
          line: '#ebebeb',
          surface: '#fcfcfc',
          'surface-alt': '#efefef',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};

export default config;
