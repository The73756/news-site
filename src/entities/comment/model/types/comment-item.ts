import { User } from '@/entities/user'

export interface CommentItem {
  id: string
  text: string
  articleId: string
  user: User
}
