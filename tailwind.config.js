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
        primary: '#00205B',
        secondary: '#C8C9C7',
        accent: '#F6A800',
        dark: '#0A0A0A',
        light: '#FFFFFF',
      },
      fontFamily: {
        sans: [
          'var(--font-montserrat)',
          'var(--font-open-sans)',
          'system-ui',
          'sans-serif',
        ],
        montserrat: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        'open-sans': ['var(--font-open-sans)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
      borderRadius: {
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
      },
      boxShadow: {
        soft: '0 10px 25px -5px rgba(0, 32, 91, 0.1), 0 10px 10px -5px rgba(0, 32, 91, 0.04)',
        glow: '0 0 20px rgba(246, 168, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00205B 0%, #00153E 100%)',
        'gradient-accent': 'linear-gradient(135deg, #F6A800 0%, #ffb700 100%)',
      },
    },
  },
  plugins: [],
};
