import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook'
import { LoginModal } from './login-modal'

const meta: Meta<typeof LoginModal> = {
  component: LoginModal,
  title: 'features/login-modal',
}

export default meta
type Story = StoryObj<typeof LoginModal>

export const Basic: Story = {
  args: {
    isOpen: true,
  },
  decorators: [
    StoreDecorator({
      loginForm: { username: 'admin', password: '123' },
    }),
  ],
}
