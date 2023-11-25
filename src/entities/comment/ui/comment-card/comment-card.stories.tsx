import type { Meta, StoryObj } from '@storybook/react'
import { CommentCard } from './comment-card'

const meta: Meta<typeof CommentCard> = {
  component: CommentCard,
  title: 'entities/comment-card',
}

export default meta
type Story = StoryObj<typeof CommentCard>

const data = {
  id: '1',
  text: 'some comment',
  articleId: '1',
  user: {
    id: '1',
    username: 'admin',
    avatar: 'https://avatars.githubusercontent.com/u/94830363?v=4',
  },
  createdAt: 1700825044653,
}

export const Basic: Story = {
  args: {
    comment: data,
    isLoading: false,
  },
}

export const Loading: Story = {
  args: {
    comment: data,
    isLoading: true,
  },
}
