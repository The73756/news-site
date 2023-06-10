import type { Meta, StoryObj } from '@storybook/react'
import { tw } from 'typewind'
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
      <div className={tw.h_['100vh']}>
        <Story />
      </div>
    ),
  ],
}
