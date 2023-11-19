import type { Meta, StoryObj } from '@storybook/react'
import { CommentList } from './comment-list'

const meta: Meta<typeof CommentList> = {
  component: CommentList,
  title: 'entities/comment-list',
}

export default meta
type Story = StoryObj<typeof CommentList>

export const Basic: Story = {}
