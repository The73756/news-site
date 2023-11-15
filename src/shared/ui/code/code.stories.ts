import type { Meta, StoryObj } from '@storybook/react'
import { Code } from './code'

const meta: Meta<typeof Code> = {
  component: Code,
  title: 'shared/code',
}

export default meta
type Story = StoryObj<typeof Code>

export const Basic: Story = {
  args: {
    language: 'html',
    codeText:
      '<!DOCTYPE html>\n<html lang="ru">\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
  },
}
