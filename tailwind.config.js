/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'warm-peach': '#FFB5A7',
        'cream': '#F8F6F0',
        'sky-blue': '#87CEEB',
        'soft-brown': '#8B4513',
        'orange-50': '#FFF7ED',
        'orange-400': '#FB923C',
        'amber-800': '#92400E',
        'amber-900': '#78350F',
        'orange-900': '#7C2D12'
      },
      fontFamily: {
        'sans': ['Nunito', 'system-ui', 'sans-serif'],
        'display': ['Baloo 2', 'system-ui', 'sans-serif']
      },
      animation: {
        'bounce': 'bounce 1s infinite',
        'pulse': 'pulse 2s infinite',
        'ping': 'ping 1s infinite'
      },
      perspective: {
        '1000': '1000px'
      }
    },
  },
  plugins: [],
};