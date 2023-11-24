import type { Meta, StoryObj } from '@storybook/react'
import { AddCommentForm } from '.'

const meta: Meta<typeof AddCommentForm> = {
  component: AddCommentForm,
  title: 'features/add-comment-form',
}

export default meta
type Story = StoryObj<typeof AddCommentForm>

export const Basic: Story = {}
