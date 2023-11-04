import type { Meta, StoryObj } from '@storybook/react'
import { InputWithLabel } from './input-with-label'

const meta: Meta<typeof InputWithLabel> = {
  component: InputWithLabel,
  title: 'shared/input-with-label',
}

export default meta
type Story = StoryObj<typeof InputWithLabel>

export const Basic: Story = {
  args: {
    placeholder: 'hello',
    label: 'Greetings',
  },
}
