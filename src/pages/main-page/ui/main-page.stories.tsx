import type { Meta, StoryObj } from '@storybook/react'
import MainPage from './main-page'

const meta: Meta<typeof MainPage> = {
  component: MainPage,
  title: 'pages/main-page',
}

export default meta
type Story = StoryObj<typeof MainPage>

export const Basic: Story = {}
