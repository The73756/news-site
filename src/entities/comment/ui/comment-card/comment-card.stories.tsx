import type { Meta, StoryObj } from '@storybook/react'
import { CommentCard } from './comment-card'

const meta: Meta<typeof CommentCard> = {
  component: CommentCard,
  title: 'entities/comment-card',
}

export default meta
type Story = StoryObj<typeof CommentCard>

export const Basic: Story = {}
