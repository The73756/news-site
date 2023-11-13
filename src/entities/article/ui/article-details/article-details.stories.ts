import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook'
import { ArticleDetails } from './article-details'

const meta: Meta<typeof ArticleDetails> = {
  component: ArticleDetails,
  title: 'entities/article-details',
}

export default meta
type Story = StoryObj<typeof ArticleDetails>

export const Basic: Story = {
  decorators: [
    StoreDecorator({
      articleDetails: {},
    }),
  ],
}
