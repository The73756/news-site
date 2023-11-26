import type { Meta, StoryObj } from '@storybook/react'
import { ArticleList } from './article-list'

const meta: Meta<typeof ArticleList> = {
  component: ArticleList,
  title: 'entities/article-list',
}

export default meta
type Story = StoryObj<typeof ArticleList>

export const Basic: Story = {}
