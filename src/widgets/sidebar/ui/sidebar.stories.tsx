import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './sidebar'

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: 'widgets/sidebar',
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const Basic: Story = {}