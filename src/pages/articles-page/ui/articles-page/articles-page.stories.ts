import type { Meta, StoryObj } from '@storybook/react'
import ArticlesPage from './articles-page'

const meta: Meta<typeof ArticlesPage> = {
  component: ArticlesPage,
  title: 'pages/articles-page',
}

export default meta
type Story = StoryObj<typeof ArticlesPage>

export const Basic: Story = {}
