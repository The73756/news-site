import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './text'

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'shared/text',
}

export default meta
type Story = StoryObj<typeof Text>

export const Basic: Story = {
  args: {
    title: 'Hello',
    text: 'Lorem ipsum dolor sit amet.',
  },
}

export const Error: Story = {
  args: {
    title: 'Hello, i am error!',
    text: 'Lorem ipsum dolor sit amet >:',
    theme: 'error',
  },
}

export const Centered: Story = {
  args: {
    title: 'Hello, I am centered!',
    text: 'Lorem ipsum dolor sit amet.',
    align: 'center',
  },
}

export const Large: Story = {
  args: {
    title: 'Hello, I am a big text!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, mollitia!',
    titleSize: 'xl',
    textSize: 'xl',
  },
}

export const OnlyTitle: Story = {
  args: {
    title: 'Hello',
  },
}

export const OnlyText: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet.',
  },
}
