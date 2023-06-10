import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'shared/icon',
}

export default meta
type Story = StoryObj<typeof Icon>

export const Basic: Story = {
  args: {
    name: 'theme/sun',
  },
  decorators: [
    (Story) => (
      <div style={{ fontSize: '60px', color: 'hsl(var(--b3)/)', lineHeight: 1 }}>
        <Story />
      </div>
    ),
  ],
}
