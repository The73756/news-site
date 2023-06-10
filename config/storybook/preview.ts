import '../../src/app/styles/main.css'
import { withThemeByDataAttribute } from '@storybook/addon-styling'
import type { Preview } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'
import { Theme } from '../../src/app/providers/theme-provider'

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
    defaultTheme: Theme.DARK,
    attributeName: 'data-theme',
  }),
  withRouter,
]

export default preview
