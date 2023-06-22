import type { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from './login-form'

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  title: 'features/login-form',
}

export default meta
type Story = StoryObj<typeof LoginForm>

export const Basic: Story = {
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-xl">
        <Story />
      </div>
    ),
  ],
}
