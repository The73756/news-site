import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'shared/button',
}

export default meta
type Story = StoryObj<typeof Button>

export const Basic: Story = {
  args: {
    shape: 'default',
    size: 'default',
    disabled: false,
    children: 'hello',
  },
}

export const ForIcon: Story = {
  args: {
    shape: 'rounded',
    size: 'large',
    disabled: false,
    children: 'i',
  },
}
