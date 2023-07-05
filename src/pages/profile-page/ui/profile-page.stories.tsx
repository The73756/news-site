import type { Meta, StoryObj } from '@storybook/react'
import ProfilePage from './profile-page'

const meta: Meta<typeof ProfilePage> = {
  component: ProfilePage,
  title: 'pages/profile-page',
}

export default meta
type Story = StoryObj<typeof ProfilePage>

export const Basic: Story = {}
