import { User } from '@/entities/user'

export enum ArticleBlockType {
  TEXT = 'TEXT',
  CODE = 'CODE',
  IMAGE = 'IMAGE',
}

export enum ArticleType {
  'IT' = 'IT',
  'SCIENCE' = 'SCIENCE',
  'ECONOMIC' = 'ECONOMIC',
}

export enum ArticleView {
  TILE = 'TILE',
  LIST = 'LIST',
}

export interface ArticleBlockBase {
  id: string
  type: ArticleBlockType
}

export interface ArticleTextBlock extends ArticleBlockBase {
  id: string
  type: ArticleBlockType.TEXT
  title?: string
  paragraphs: string[]
}
export interface ArticleCodeBlock extends ArticleBlockBase {
  id: string
  type: ArticleBlockType.CODE
  code: string
  language: string
}

export interface ArticleImageBlock extends ArticleBlockBase {
  id: string
  type: ArticleBlockType.IMAGE
  src: string
  title: string
}

export type ArticleBlock = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock

export interface Article {
  id: string
  title: string
  subtitle: string
  img: string
  views: number
  createdAt: number
  type: ArticleType[]
  user: User
  blocks: ArticleBlock[]
}
