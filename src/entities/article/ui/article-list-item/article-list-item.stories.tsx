import type { Meta, StoryObj } from '@storybook/react'
import { ArticleListItem } from './article-list-item'

const meta: Meta<typeof ArticleListItem> = {
  component: ArticleListItem,
  title: 'entities/article-list-item',
}

export default meta
type Story = StoryObj<typeof ArticleListItem>

export const Basic: Story = {}
