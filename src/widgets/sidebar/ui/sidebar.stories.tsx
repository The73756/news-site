import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook'
import { Sidebar } from './sidebar'

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: 'widgets/sidebar',
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const Basic: Story = {
  decorators: [
    StoreDecorator({
      user: { authData: {} },
    }),
  ],
}
export const NoAuth: Story = {
  decorators: [
    StoreDecorator({
      user: { authData: undefined },
    }),
  ],
}
