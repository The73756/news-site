import type { Meta, StoryObj } from '@storybook/react'
// noinspection ES6PreferShortImport
import { ThemeSwitcher } from './theme-switcher'

const meta: Meta<typeof ThemeSwitcher> = {
  component: ThemeSwitcher,
  title: 'shared/theme-switcher',
}

export default meta
type Story = StoryObj<typeof ThemeSwitcher>

export const Basic: Story = {}
