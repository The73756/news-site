/** @type {import("tailwindcss").Config} */

/**
 *  After theme changes you need to update app/theme-providers/theme-context.ts and add the new theme to the Theme enum
 *
 * */

module.exports = {
  content: {
    files: ['./src/**/*.tsx'],
  },
  theme: {
    extend: {
      spacing: {
        navbar: 'var(--navbar-h)',
      },
    },
  },
  daisyui: {
    themes: ['winter', 'night'],
  },
  plugins: [require('daisyui')],
}
