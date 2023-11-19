import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './skeleton'
import { SkeletonWrapper } from './skeleton-wrapper'

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: 'shared/skeleton',
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Basic: Story = {
  decorators: [
    (Story) => (
      <SkeletonWrapper>
        <Story />
      </SkeletonWrapper>
    ),
  ],
  args: {
    width: '100%',
    height: 50,
  },
}

export const Circle: Story = {
  decorators: [
    (Story) => (
      <SkeletonWrapper>
        <Story />
      </SkeletonWrapper>
    ),
  ],
  args: {
    border: '100%',
    width: 100,
    height: 100,
  },
}

export const Image: Story = {
  decorators: [
    (Story) => (
      <SkeletonWrapper>
        <Story />
      </SkeletonWrapper>
    ),
  ],
  args: {
    isImage: true,
    width: 200,
    height: 300,
  },
}
