import type { Meta, StoryObj } from '@storybook/react'
import { ArticleCommentBlock } from './article-comment-block'

const meta: Meta<typeof ArticleCommentBlock> = {
  component: ArticleCommentBlock,
  title: 'widgets/comment-block',
}

export default meta
type Story = StoryObj<typeof ArticleCommentBlock>

export const Basic: Story = {}
