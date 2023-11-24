import { memo } from 'react'
import { Header } from '@/shared/ui'
import { ArticleTextBlock } from '../../model'

interface ArticleTextBlockElementProps {
  block: ArticleTextBlock
}

export const ArticleTextBlockElement = memo(({ block }: ArticleTextBlockElementProps) => {
  return (
    <>
      {block.title && (
        <Header level="h3" className="mb-3">
          {block.title}
        </Header>
      )}
      {block.paragraphs.map((paragraph) => (
        <p key={paragraph} className="mb-2">
          {paragraph}
        </p>
      ))}
    </>
  )
})
