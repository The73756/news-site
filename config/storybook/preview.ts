import '@/app/styles/main.css'
import { withThemeByDataAttribute } from '@storybook/addon-styling'
import type { Preview } from '@storybook/react'
import { Theme } from '@/app/providers/theme-provider'
import { RouterDecorator } from '@/shared/config/storybook'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: Theme.LIGHT,
      dark: Theme.DARK,
    },
    defaultTheme: 'dark',
    attributeName: 'data-theme',
  }),
  RouterDecorator,
]

export default preview
