import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './skeleton'

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: 'shared/skeleton',
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Basic: Story = {
  args: {
    width: '100%',
    height: 50,
  },
}

export const Circle: Story = {
  args: {
    border: '100%',
    width: 100,
    height: 100,
  },
}

export const Image: Story = {
  args: {
    isImage: true,
    width: 200,
    height: 300,
  },
}
