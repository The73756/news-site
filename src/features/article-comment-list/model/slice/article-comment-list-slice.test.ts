import { ArticleCommentListSchema, fetchCommentsByArticle } from '..'
import { articleCommentsListReducer } from './article-comment-list-slice'

const comment = {
  id: '1',
  text: 'some comment',
  articleId: '1',
  user: {
    id: '1',
    username: 'admin',
    avatar: 'https://avatars.githubusercontent.com/u/94830363?v=4',
  },
  createdAt: 1700825044653,
}

const data = {
  ids: ['1'],
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
  },
}

describe('article-comments-list-slice', () => {
  test('test fetchCommentsByArticle pending', () => {
    const state: DeepPartial<ArticleCommentListSchema> = {
      isLoading: false,
    }

    expect(
      articleCommentsListReducer(
        state as ArticleCommentListSchema,
        fetchCommentsByArticle.pending('', '1')
      )
    ).toEqual({
      isLoading: true,
    })
  })

  test('test fetchCommentsByArticle fulfilled', () => {
    const state: DeepPartial<ArticleCommentListSchema> = {
      isLoading: true,
    }

    expect(
      articleCommentsListReducer(
        state as ArticleCommentListSchema,
        fetchCommentsByArticle.fulfilled([comment], '', '1')
      )
    ).toEqual({
      isLoading: false,
      ...data,
    })
  })
})
