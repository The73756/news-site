import type { Meta, StoryObj } from '@storybook/react'
// noinspection ES6PreferShortImport
import { LangSwitcher } from './lang-switcher'

const meta: Meta<typeof LangSwitcher> = {
  component: LangSwitcher,
  title: 'shared/lang-switcher',
}

export default meta
type Story = StoryObj<typeof LangSwitcher>

export const Basic: Story = {}
