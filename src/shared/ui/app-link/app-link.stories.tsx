import type { Meta, StoryObj } from '@storybook/react'
import { AppLink } from './app-link'

const meta: Meta<typeof AppLink> = {
  component: AppLink,
  title: 'shared/app-link',
}

export default meta
type Story = StoryObj<typeof AppLink>

export const Basic: Story = {
  args: {
    children: 'link',
  },
}
