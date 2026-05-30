/**
 * Tailwind config for Renity Website
 * Exposes the brand tokens as `renity` colors so you can use classes like
 * `bg-renity-primary`, `text-renity-text-secondary`, etc.
 * Values reference the CSS custom properties defined in `app/globals.css`.
 */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        renity: {
          primary: 'var(--renity-primary)',
          secondary: 'var(--renity-secondary)',
          bg: 'var(--renity-bg)',
          'bg-light': 'var(--renity-bg-light)',
          white: 'var(--renity-white)',
          text: 'var(--renity-text)',
          'text-dark': 'var(--renity-text-dark)',
          'text-secondary': 'var(--renity-text-secondary)',
          error: 'var(--renity-error)',
          success: 'var(--renity-success)',
          warning: 'var(--renity-warning)',
          info: 'var(--renity-info)',
          border: 'var(--renity-border)',
          shadow: 'var(--renity-shadow)',
        },
      },
    },
  },
  plugins: [],
};
