import type { Meta, StoryObj } from '@storybook/react'
import { PageLoader } from './page-loader'

const meta: Meta<typeof PageLoader> = {
  component: PageLoader,
  title: 'widgets/page-loader',
}

export default meta
type Story = StoryObj<typeof PageLoader>

export const Basic: Story = {}
