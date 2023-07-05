/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'valorax': ['VALORAX', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('https://cdn.sanity.io/images/4l7yyod4/production/102736c3478e01a61d47db5f5600c5a79731a44a-460x460.jpg?w=2000&fit=max&auto=format')",
      },
      boxShadow: {
        'neon': '0 0 1rem -15px rgba(0, 0, 0, 0.8)',
      },
      keyframes: {
        glitch: {
          '0%': { clipPath: 'polygon(0 0%, 100% 0%, 100% 5%, 0 5%)' },
          '10%': { clipPath: 'polygon(0 15%, 100% 15%, 100% 15%, 0 15%)' },
          '20%': { clipPath: 'polygon(0 10%, 100% 10 %, 100% 20%, 0 20%)' },
          '30%': { clipPath: 'polygon(0 1%, 100% 1 %, 100% 2%, 0 2%)' },
          '40%': { clipPath: 'polygon(0 35%, 100% 35%, 100% 35%, 0 35%)' },
          '50%': { clipPath: 'polygon(0 45%, 100% 45%, 100% 46%, 0 46%)' },
          '60%': { clipPath: 'polygon(0 50%, 100% 50%, 100% 70%, 0 70%)' },
          '70%': { clipPath: 'polygon(0 70%, 100% 70%, 100% 70%, 0 70%)' },
          '80%': { clipPath: 'polygon(0 80%, 100% 80%, 100% 80%, 0 80%)' },
          '90%': { clipPath: 'polygon(0 50%, 100% 50%, 100% 55%, 0 55%)' },
          '100%': { clipPath: 'polygon(0 60%, 100% 60%, 100% 70%, 0 70%)' }
        },
        glitch2: {
          '0%': { clipPath: 'polygon(0 15%, 100% 15%, 100% 30%, 0 30%)' },
          '15%': { clipPath: 'polygon(0 3%, 100% 3%, 100% 3%, 0 3%)' },
          '25%': { clipPath: 'polygon(0 8%, 100% 8%, 100% 20%, 0 20%)' },
          '30%': { clipPath: 'polygon(0 20%, 100% 20%, 100% 20%, 0 20%)' },
          '45%': { clipPath: 'polygon(0 45%, 100% 45%, 100% 45%, 0 45%)' },
          '50%': { clipPath: 'polygon(0 50%, 100% 50%, 100% 57%, 0 57%)' },
          '65%': { clipPath: 'polygon(0 60%, 100% 60%, 100% 60%, 0 60%)' },
          '75%': { clipPath: 'polygon(0 80%, 100% 80%, 100% 80%, 0 80%)' },
          '80%': { clipPath: 'polygon(0 40%, 100% 40%, 100% 60%, 0 60%)' },
          '95%': { clipPath: 'polygon(0 45%, 100% 45%, 100% 60%, 0 60%)' },
          '100%': { clipPath: 'polygon(0 11%, 100% 11%, 100% 15%, 0 15%)' }
        },
        draw: {
          '0%': { strokeDashoffset: 3860 },
          '50%': { strokeDashoffset: 0 },
          '100%': { strokeDashoffset: -3860 }
        },
        fade: {
          '0%': { strokeDashoffset: 3860 },
          '50%': { strokeDashoffset: 0 },
          '100%': { strokeDashoffset: - 3860 }
        }
      },
      animation: {
        glitch: 'glitch 2s infinite linear alternate',
        glitch2: 'glitch2  2.3s -.8s infinite linear alternate',
        draw: 'draw 180s infinite linear',
        fade: 'fade 185s infinite linear',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
