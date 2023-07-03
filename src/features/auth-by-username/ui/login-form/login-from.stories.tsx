import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook'
import LoginForm from './login-form'

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  title: 'features/login-form',
}

export default meta
type Story = StoryObj<typeof LoginForm>

export const Basic: Story = {
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-xl text-center">
        <Story />
      </div>
    ),
    StoreDecorator({
      loginForm: { username: 'admin', password: '123' },
    }),
  ],
}

export const WithError: Story = {
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-xl text-center">
        <Story />
      </div>
    ),
    StoreDecorator({
      loginForm: {
        username: 'admin',
        password: '123',
        error: 'Тут будет ошибка',
      },
    }),
  ],
}

export const WithLoading: Story = {
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-xl text-center">
        <Story />
      </div>
    ),
    StoreDecorator({
      loginForm: {
        username: 'admin',
        password: '123',
        isLoading: true,
      },
    }),
  ],
}
