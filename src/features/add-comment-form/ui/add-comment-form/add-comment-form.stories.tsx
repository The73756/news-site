import type { Meta, StoryObj } from '@storybook/react'
import { Suspense } from 'react'
import { StoreDecorator } from '@/shared/config/storybook'
import { Loader } from '@/shared/ui'
import { AddCommentForm } from '.'

const meta: Meta<typeof AddCommentForm> = {
  component: AddCommentForm,
  title: 'features/add-comment-form',
}

export default meta
type Story = StoryObj<typeof AddCommentForm>

export const Basic: Story = {
  decorators: [
    (Story) => (
      <Suspense fallback={<Loader />}>
        <Story />
      </Suspense>
    ),
    StoreDecorator({
      addCommentForm: {
        text: '',
        error: '',
      },
    }),
  ],
}
