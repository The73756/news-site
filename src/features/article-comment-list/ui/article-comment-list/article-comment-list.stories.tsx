import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook'
import { ArticleCommentList } from '.'

const meta: Meta<typeof ArticleCommentList> = {
  component: ArticleCommentList,
  title: 'features/article-comment-list',
}

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
    },
  },
}

export default meta
type Story = StoryObj<typeof ArticleCommentList>

export const Basic: Story = {
  decorators: [
    StoreDecorator({
      articleDetailsComments: data,
    }),
  ],
}

export const Loading: Story = {
  decorators: [
    StoreDecorator({
      articleDetailsComments: {
        ...data,
        isLoading: true,
      },
    }),
  ],
}

export const Error: Story = {
  decorators: [
    StoreDecorator({
      articleDetailsComments: {
        ...data,
        error: 'Error!',
      },
    }),
  ],
}
