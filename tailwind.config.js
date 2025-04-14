/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // blue-600
          dark: '#1d4ed8', // blue-700
          light: '#3b82f6',
        },
        secondary: {
          DEFAULT: '#64748b', // slate-500
          light: '#94a3b8', // slate-400
          dark: '#475569',
        },
        background: {
          DEFAULT: '#f8fafc', // slate-50
          card: '#ffffff',
        },
        status: {
          active: '#22c55e', // green-500
          upcoming: '#eab308',
          ended: '#ef4444', // red-500
        },
        selected: {
          DEFAULT: '#1e40af', // 진한 파란색
          light: '#3b82f6', // 밝은 파란색
          border: '#60a5fa', // 파란색 테두리
        }
      },
      spacing: {
        'section': '4rem',
        'card': '1.5rem',
      },
      borderRadius: {
        'card': '0.75rem',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      }
    },
  },
  plugins: [],
} 