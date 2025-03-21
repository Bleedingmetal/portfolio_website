/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        apple: {
          gray: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
          },
          blue: {
            light: '#007aff',
            dark: '#0a84ff',
          },
          green: {
            light: '#34c759',
            dark: '#30d158',
          },
          indigo: {
            light: '#5856d6',
            dark: '#5e5ce6',
          },
          orange: {
            light: '#ff9500',
            dark: '#ff9f0a',
          },
          pink: {
            light: '#ff2d55',
            dark: '#ff375f',
          },
          purple: {
            light: '#af52de',
            dark: '#bf5af2',
          },
          red: {
            light: '#ff3b30',
            dark: '#ff453a',
          },
          teal: {
            light: '#5ac8fa',
            dark: '#64d2ff',
          },
          yellow: {
            light: '#ffcc00',
            dark: '#ffd60a',
          },
        },
      },
    },
  },
  plugins: [],
}
