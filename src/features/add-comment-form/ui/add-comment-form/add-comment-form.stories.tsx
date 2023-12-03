import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook'
import { AddCommentForm } from '.'

const meta: Meta<typeof AddCommentForm> = {
  component: AddCommentForm,
  title: 'features/add-comment-form',
}

export default meta
type Story = StoryObj<typeof AddCommentForm>

export const Basic: Story = {
  decorators: [
    StoreDecorator({
      addCommentForm: {
        text: '',
        error: '',
      },
    }),
  ],
}
