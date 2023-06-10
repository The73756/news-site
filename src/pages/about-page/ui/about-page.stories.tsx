import type { Meta, StoryObj } from '@storybook/react'
import AboutPage from './page'

const meta: Meta<typeof AboutPage> = {
  component: AboutPage,
  title: 'pages/about-page',
}

export default meta
type Story = StoryObj<typeof AboutPage>

export const Basic: Story = {}
