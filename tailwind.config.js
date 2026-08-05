/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-cream': '#FDFCF8',
        'bg-panel': '#F4F3ED',
        'sage-light': '#A3B8A8',
        sage: '#7C9885',
        'sage-dark': '#4A6051',
        'sage-text': '#2F3E33',
        'peri-light': '#C4C8EB',
        peri: '#9FA8DA',
        'peri-dark': '#7A84C4',
      },
      fontFamily: {
        pixel: ['"VT323"', 'monospace'],
        mono: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        'retro-sage': '6px 6px 0px 0px #7C9885',
        'retro-peri': '4px 4px 0px 0px #9FA8DA',
        'retro-inset': 'inset 4px 4px 0px 0px rgba(124, 152, 133, 0.2)',
      },
    },
  },
  plugins: [],
}
