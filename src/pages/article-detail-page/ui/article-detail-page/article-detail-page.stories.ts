import type { Meta, StoryObj } from '@storybook/react'
import ArticleDetailPage from './article-detail-page'

const meta: Meta<typeof ArticleDetailPage> = {
  component: ArticleDetailPage,
  title: 'pages/article-detail-page',
}

export default meta
type Story = StoryObj<typeof ArticleDetailPage>

export const Basic: Story = {}
