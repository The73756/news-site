import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'shared/avatar',
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Basic: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/94830363?v=4',
  },
}
