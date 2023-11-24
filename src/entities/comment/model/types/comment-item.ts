import { User } from '@/entities/user'

export interface CommentItem {
  id: string
  text: string
  articleId: string
  createdAt: number
  user: User
}
