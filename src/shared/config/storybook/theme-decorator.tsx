import { StoryFn } from '@storybook/react'
import { Theme, ThemeProvider } from '@/app/providers/theme-provider'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  )
