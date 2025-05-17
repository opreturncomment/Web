/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: '#fff',
            h1: {
              color: '#fff',
            },
            h2: {
              color: '#fff',
            },
            h3: {
              color: '#fff',
            },
            strong: {
              color: '#fff',
            },
            a: {
              color: '#a855f7',
              '&:hover': {
                color: '#c084fc',
              },
            },
            code: {
              color: '#c084fc',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '0.25rem 0.4rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            blockquote: {
              color: '#d1d5db',
              borderLeftColor: '#4F1B89',
            },
            hr: {
              borderColor: 'rgba(255, 255, 255, 0.1)',
            },
            pre: {
              backgroundColor: '#1c103c',
            },
          },
        },
        purple: {
          css: {
            '--tw-prose-links': '#a855f7',
            '--tw-prose-invert-links': '#a855f7',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

