import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './modal'

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'shared/modal',
}

export default meta
type Story = StoryObj<typeof Modal>

export const Basic: Story = {
  args: {
    children: 'Hello! I am Modal!',
    isOpen: true,
  },
  decorators: [
    (Story) => (
      <div id="root">
        <Story />
      </div>
    ),
  ],
}
