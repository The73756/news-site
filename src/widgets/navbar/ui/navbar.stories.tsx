import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook'
import { Navbar } from './navbar'

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: 'widgets/navbar',
}

export default meta
type Story = StoryObj<typeof Navbar>

export const Basic: Story = {
  decorators: [
    StoreDecorator({
      loginForm: { username: 'admin', password: '123' },
    }),
  ],
}
