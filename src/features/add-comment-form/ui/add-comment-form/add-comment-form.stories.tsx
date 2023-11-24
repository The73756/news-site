import type { Meta, StoryObj } from '@storybook/react'
import { AddCommentForm } from './add-comment-form'

const meta: Meta<typeof AddCommentForm> = {
  component: AddCommentForm,
  title: 'features/add-comment-form',
}

export default meta
type Story = StoryObj<typeof AddCommentForm>

export const Basic: Story = {}
