import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/theme-provider'
import { ThemeDecorator } from '@/shared/config/storybook'
import { Code } from './code'

const meta: Meta<typeof Code> = {
  component: Code,
  title: 'shared/code',
}

export default meta
type Story = StoryObj<typeof Code>

export const Basic: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    language: 'html',
    codeText:
      '<!DOCTYPE html>\n<html lang="ru">\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
  },
}

export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
  args: {
    language: 'html',
    codeText:
      '<!DOCTYPE html>\n<html lang="ru">\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
  },
}
