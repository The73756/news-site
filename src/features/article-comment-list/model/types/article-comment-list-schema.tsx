import { EntityState } from '@reduxjs/toolkit'
import { CommentItem } from '@/entities/comment'

export interface ArticleCommentListSchema extends EntityState<CommentItem> {
  isLoading?: boolean
  error?: string
}
