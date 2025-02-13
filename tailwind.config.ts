import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      backgroundImage: {
        'title-gradient': 'linear-gradient(to right, #3B82F6, #60A5FA)',
        'temperature-gradient': 'linear-gradient(to right, #60A5FA, #93C5FD)',
      },
    },
  },
  plugins: [],
} satisfies Config;
