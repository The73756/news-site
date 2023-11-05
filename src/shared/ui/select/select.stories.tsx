import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './select'

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'shared/select',
}

export default meta
type Story = StoryObj<typeof Select>

export const Basic: Story = {
  args: {
    label: 'Select: ',
    options: [
      { value: '1', content: 'first' },
      { value: '2', content: 'second' },
      { value: '3', content: 'third' },
    ],
  },
}
