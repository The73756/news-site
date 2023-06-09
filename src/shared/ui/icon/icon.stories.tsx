import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
}

export default meta
type Story = StoryObj<typeof Icon>

export const Basic: Story = {
  args: {
    name: 'theme/sun',
  },
  decorators: [
    (Story) => (
      <div className="text-base-100" style={{ fontSize: '60px' }}>
        <Story />
      </div>
    ),
  ],
}
