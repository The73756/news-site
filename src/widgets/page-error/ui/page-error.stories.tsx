import type { Meta, StoryObj } from '@storybook/react'
import { PageError } from './page-error'

const meta: Meta<typeof PageError> = {
  component: PageError,
  title: 'widgets/page-error',
}

export default meta
type Story = StoryObj<typeof PageError>

export const Basic: Story = {}
