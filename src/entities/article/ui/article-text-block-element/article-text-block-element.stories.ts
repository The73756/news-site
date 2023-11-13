import type { Meta, StoryObj } from '@storybook/react'
import { ArticleTextBlockElement } from './article-text-block-element'



const meta: Meta<typeof ArticleTextBlockElement> = {
  component: ArticleTextBlockElement,
  title: 'entities/article-text-block-element',
}

export default meta
type Story = StoryObj<typeof ArticleTextBlockElement>

export const Basic: Story = {}
