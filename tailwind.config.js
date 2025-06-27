module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF0000", // YouTube red
          50: "#FFF5F5", // red-50
          100: "#FED7D7", // red-100
          500: "#FF0000", // red-500
          600: "#E53E3E", // red-600
          700: "#C53030", // red-700
        },
        secondary: {
          DEFAULT: "#282828", // gray-800
          50: "#F7FAFC", // gray-50
          100: "#EDF2F7", // gray-100
          200: "#E2E8F0", // gray-200
          500: "#718096", // gray-500
          600: "#4A5568", // gray-600
          700: "#2D3748", // gray-700
          800: "#282828", // gray-800
          900: "#1A202C", // gray-900
        },
        accent: {
          DEFAULT: "#00D4FF", // cyan-400
          50: "#ECFEFF", // cyan-50
          100: "#CFFAFE", // cyan-100
          400: "#00D4FF", // cyan-400
          500: "#06B6D4", // cyan-500
          600: "#0891B2", // cyan-600
        },
        background: "#FAFAFA", // gray-50
        surface: "#FFFFFF", // white
        border: "#E5E5E5", // gray-300
        "border-focus": "#00D4FF", // cyan-400
        "text-primary": "#1A1A1A", // gray-900
        "text-secondary": "#666666", // gray-600
        success: {
          DEFAULT: "#00C851", // green-500
          50: "#F0FDF4", // green-50
          100: "#DCFCE7", // green-100
          500: "#00C851", // green-500
          600: "#16A34A", // green-600
        },
        warning: {
          DEFAULT: "#FF8800", // orange-500
          50: "#FFF7ED", // orange-50
          100: "#FFEDD5", // orange-100
          500: "#FF8800", // orange-500
          600: "#EA580C", // orange-600
        },
        error: {
          DEFAULT: "#DC3545", // red-600
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC3545", // red-600
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'responsive-xl': 'clamp(1.5rem, 4vw, 2.25rem)',
        'responsive-lg': 'clamp(1.25rem, 3vw, 1.875rem)',
        'responsive-base': 'clamp(0.875rem, 2vw, 1rem)',
      },
      boxShadow: {
        'elevation-1': '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)',
        'elevation-2': '0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)',
        'elevation-3': '0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)',
      },
      borderRadius: {
        'card': '8px',
        'button': '4px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      animation: {
        'shimmer': 'shimmer 1.5s infinite',
        'scale-in': 'scale-in 150ms ease-out',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(280px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(280px, 1fr))',
      },
    },
  },
  plugins: [],
}