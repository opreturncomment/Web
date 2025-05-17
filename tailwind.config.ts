import type { Config } from "tailwindcss";

const config = {
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
  corePlugins: {
    preflight: true,
  },
  safelist: [
    'px-6', 'py-6', 'flex', 'items-center', 'justify-between', 'max-w-6xl', 'mx-auto',
    'gap-2', 'gap-3', 'gap-4', 'gap-8', 'gap-12',
    'text-white', 'text-sm', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-7xl',
    'font-bold', 'font-medium',
    'w-full', 'h-full', 'w-7', 'h-7', 'w-[800px]', 'h-[800px]',
    'rounded-full', 'rounded-md',
    'mb-4', 'mb-6', 'mb-8', 'mb-10', 'mb-12', 'mb-16',
    'mt-4', 'mt-8', 'mt-12', 'mt-24',
    'p-4', 'pt-8', 'pl-4',
    'opacity-20', 'opacity-80',
    'blur-[120px]',
    'bg-[rgba(255,255,255,0.1)]', 'bg-[#3b187a]', 'bg-[#1c103c]',
    'border-t', 'border-white/10',
    'hover:text-white', 'hover:opacity-80', 'hover:text-purple-300',
    'transition-colors', 'transition-all', 'duration-200',
    'z-10', 'z-30',
    'sticky', 'top-0', 'inset-0', 'absolute', 'relative',
    'pointer-events-none',
    'left-1/2', '-translate-x-1/2',
    'flex-1', 'flex-col', 'flex-wrap',
    'min-h-screen',
    'text-center', 'text-white/70', 'text-white/50', 'text-white/30', 'text-purple-400',
    'tracking-wide',
    'underline',
    'hidden', 'md:flex',
  ]
} as Config;

export default config; 