import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Basic: Story = {
  args: {
    shape: 'default',
    size: 'normal',
    children: 'hello',
  },
}

export const ForIcon: Story = {
  args: {
    shape: 'rounded',
    size: 'large',
    children: 'i',
  },
}
