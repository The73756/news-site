import type { Meta, StoryObj } from '@storybook/react'
import { ArticleCommentList } from './article-comment-list'

const meta: Meta<typeof ArticleCommentList> = {
  component: ArticleCommentList,
  title: 'features/article-comment-list',
}

export default meta
type Story = StoryObj<typeof ArticleCommentList>

export const Basic: Story = {}
