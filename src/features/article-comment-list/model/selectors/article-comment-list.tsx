import { StateSchema } from '@/app/providers/store-provider'

export const getArticleCommentListIsLoading = (state: StateSchema) =>
  state.articleDetailsComments?.isLoading
export const getArticleCommentListError = (state: StateSchema) =>
  state.articleDetailsComments?.error
