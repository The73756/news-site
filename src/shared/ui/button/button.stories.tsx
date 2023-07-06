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
    disabled: false,
    children: 'hello',
  },
}

export const Large: Story = {
  args: {
    children: 'hello',
    size: 'large',
  },
}

export const Small: Story = {
  args: {
    children: 'hello',
    size: 'small',
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
