import type { Meta, StoryObj } from '@storybook/react'
import { Loader } from './loader'

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: 'shared/loader',
}

export default meta
type Story = StoryObj<typeof Loader>

export const Basic: Story = {}
