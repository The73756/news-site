import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/theme-provider'
import { ArticleBlockType } from '@/entities/article/model'
import { ThemeDecorator } from '@/shared/config/storybook'
import { ArticleCodeBlockElement } from './article-code-block-element'

const meta: Meta<typeof ArticleCodeBlockElement> = {
  component: ArticleCodeBlockElement,
  title: 'entities/article-code-block-element',
}

export default meta
type Story = StoryObj<typeof ArticleCodeBlockElement>

export const Basic: Story = {
  args: {
    block: {
      id: '1',
      type: ArticleBlockType.CODE,
      language: 'html',
      code: '<!DOCTYPE html>\n<html lang="ru">\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
  },
}

export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
  args: {
    block: {
      id: '1',
      type: ArticleBlockType.CODE,
      language: 'html',
      code: '<!DOCTYPE html>\n<html lang="ru">\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
  },
}
