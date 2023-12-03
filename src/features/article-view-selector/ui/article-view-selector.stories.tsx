import type { Meta, StoryObj } from '@storybook/react'
import { ArticleViewSelector } from './article-view-selector'

const meta: Meta<typeof ArticleViewSelector> = {
  component: ArticleViewSelector,
  title: 'features/article-view-selector',
}

export default meta
type Story = StoryObj<typeof ArticleViewSelector>

export const Basic: Story = {}
