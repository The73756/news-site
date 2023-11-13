import type { Meta, StoryObj } from '@storybook/react'
import { ArticleCodeBlockElement } from './article-code-block-element'



const meta: Meta<typeof ArticleCodeBlockElement> = {
  component: ArticleCodeBlockElement,
  title: 'entities/article-code-block-element',
}

export default meta
type Story = StoryObj<typeof ArticleCodeBlockElement>

export const Basic: Story = {}
