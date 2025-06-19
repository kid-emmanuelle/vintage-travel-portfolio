import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'vintage': ['Crimson Text', 'Georgia', 'serif'],
        'typewriter': ['Courier Prime', 'Courier New', 'monospace'],
        'script': ['Dancing Script', 'cursive'],
      },
      colors: {
        // Vintage paper and travel colors
        paper: {
          light: '#FFFFFF',
          cream: '#FDFBEE',
          aged: '#FFFDF6',
          old: '#DEB887',
          dark: '#D2B48C',
        },
        ink: {
          blue: '#1E3A8A',
          black: '#2C1810',
          red: '#B91C1C',
          brown: '#92400E',
          faded: '#6B7280',
        },
        vintage: {
          gold: '#DAB88B',
          brass: '#c77c38',
          copper: '#B87333',
          burgundy: '#800020',
          navy: '#1E3A8A',
          forest: '#355E3B',
          rust: '#B7410E',
        },
        travel: {
          passport: '#2563EB',
          stamp: '#DC2626',
          visa: '#059669',
          postmark: '#7C2D12',
        }
      },
      backgroundImage: {
        'paper-texture': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23F4F1E8\" fill-opacity=\"0.4\"%3E%3Ccircle cx=\"7\" cy=\"7\" r=\"3\"/%3E%3Ccircle cx=\"53\" cy=\"7\" r=\"3\"/%3E%3Ccircle cx=\"53\" cy=\"53\" r=\"3\"/%3E%3Ccircle cx=\"7\" cy=\"53\" r=\"3\"/%3E%3C/g%3E%3C/svg%3E')",
        'vintage-lines': "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"20\" viewBox=\"0 0 100 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23DEB887\" fill-opacity=\"0.2\"%3E%3Cpath d=\"M0 10h100\" stroke=\"%23DEB887\" stroke-width=\"0.5\"/%3E%3C/g%3E%3C/svg%3E')",
        'stamp-pattern': "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23B91C1C\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M20 20l10-10v20z\"/%3E%3Cpath d=\"M20 20l-10-10v20z\"/%3E%3C/g%3E%3C/svg%3E')",
      },
      animation: {
        'stamp': 'stamp 0.6s ease-out',
        'typewriter': 'typewriter 2s steps(20) infinite',
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'vintage-glow': 'vintageGlow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        stamp: {
          '0%': { transform: 'scale(1) rotate(0deg)', opacity: '0' },
          '50%': { transform: 'scale(1.1) rotate(-2deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(-1deg)', opacity: '1' },
        },
        typewriter: {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: '#2C1810' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        vintageGlow: {
          '0%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.6)' },
        },
      },
      boxShadow: {
        'vintage': '0 4px 20px rgba(44, 24, 16, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        'paper': '0 2px 10px rgba(44, 24, 16, 0.1), 0 1px 3px rgba(44, 24, 16, 0.1)',
        'stamp': '0 2px 8px rgba(185, 28, 28, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'travel-card': '0 6px 25px rgba(44, 24, 16, 0.2), 0 2px 8px rgba(44, 24, 16, 0.1)',
      },
      borderRadius: {
        'vintage': '2px',
        'stamp': '8px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}

export default config 