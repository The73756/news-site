import type { Meta, StoryObj } from '@storybook/react'
import { Suspense } from 'react'
import { StoreDecorator } from '@/shared/config/storybook'
import { Loader } from '@/shared/ui'
import { ArticleCommentBlock } from './article-comment-block'

const meta: Meta<typeof ArticleCommentBlock> = {
  component: ArticleCommentBlock,
  title: 'widgets/article-comment-block',
  decorators: [
    (Story) => (
      <Suspense fallback={<Loader />}>
        <Story />
      </Suspense>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ArticleCommentBlock>

const data = {
  ids: ['1', '2', '3'],
  entities: {
    '1': {
      id: '1',
      text: 'some comment',
      articleId: '1',
      user: {
        id: '1',
        username: 'admin',
        avatar: 'https://avatars.githubusercontent.com/u/94830363?v=4',
      },
      createdAt: 1700825044653,
    },
    '2': {
      id: '2',
      text: 'some comment 2',
      articleId: '1',
      user: {
        id: '1',
        username: 'admin',
        avatar: 'https://avatars.githubusercontent.com/u/94830363?v=4',
      },
      createdAt: 1700825044653,
    },
    '3': {
      id: '3',
      text: 'some comment 3',
      articleId: '1',
      user: {
        id: '1',
        username: 'admin',
        avatar: 'https://avatars.githubusercontent.com/u/94830363?v=4',
      },
      createdAt: 1700825044653,
    },
  },
}

export const Basic: Story = {
  args: {
    id: '1',
  },
  decorators: [
    StoreDecorator({
      articleDetailsComments: data,
      addCommentForm: {
        text: '',
        error: '',
      },
    }),
  ],
}

export const Loading: Story = {
  args: {
    id: '1',
  },
  decorators: [
    StoreDecorator({
      articleDetailsComments: { ...data, isLoading: true },
      addCommentForm: {
        text: '',
        error: '',
      },
    }),
  ],
}

export const Error: Story = {
  args: {
    id: '1',
  },
  decorators: [
    StoreDecorator({
      articleDetailsComments: { ...data, error: 'error!' },
      addCommentForm: {
        text: '',
        error: '',
      },
    }),
  ],
}
