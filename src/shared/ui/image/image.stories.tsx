import type { Meta, StoryObj } from '@storybook/react'
import { Image } from './image'

const meta: Meta<typeof Image> = {
  component: Image,
  title: 'shared/image',
}

export default meta
type Story = StoryObj<typeof Image>

export const Basic: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/94830363?v=4',
  },
}

export const InvalidImg: Story = {
  args: {
    src: '',
  },
}
