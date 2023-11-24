import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './header'

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'shared/header',
}

export default meta
type Story = StoryObj<typeof Header>

export const Base: Story = {
  decorators: [
    (Story) => (
      <div className="space-y-4">
        <Story args={{ level: 'h1', children: 'Header level 1' }} />
        <Story args={{ level: 'h2', children: 'Header level 2' }} />
        <Story args={{ level: 'h3', children: 'Header level 3' }} />
        <Story args={{ level: 'h4', children: 'Header level 4' }} />
        <Story args={{ level: 'h5', children: 'Header level 5' }} />
        <Story args={{ level: 'h6', children: 'Header level 6' }} />
      </div>
    ),
  ],
}

export const OneHeader: Story = {
  args: {
    children: 'Header',
    level: 'h1',
  },
}

export const Custom: Story = {
  args: {
    children: 'Custom Header',
    level: 'h1',
    custom: true,
    className: 'text-4xl font-normal text-accent underline',
  },
}
