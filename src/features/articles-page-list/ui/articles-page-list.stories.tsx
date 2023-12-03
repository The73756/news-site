import type { Meta, StoryObj } from '@storybook/react'
import { ArticlesPageList } from './articles-page-list'

const meta: Meta<typeof ArticlesPageList> = {
  component: ArticlesPageList,
  title: 'features/articles-page-list',
}

export default meta
type Story = StoryObj<typeof ArticlesPageList>

export const Basic: Story = {}
