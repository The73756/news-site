import type { Meta, StoryObj } from '@storybook/react'
import { NotFoundPage } from './page'

const meta: Meta<typeof NotFoundPage> = {
  component: NotFoundPage,
  title: 'pages/not-found-page',
}

export default meta
type Story = StoryObj<typeof NotFoundPage>

export const Basic: Story = {
  decorators: [
    (Story) => (
      <div className="h-[100vh]">
        <Story />
      </div>
    ),
  ],
}
