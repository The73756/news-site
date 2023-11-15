import { memo } from 'react'
import { ArticleTextBlock } from '../../model'

interface ArticleTextBlockElementProps {
  block: ArticleTextBlock
}

export const ArticleTextBlockElement = memo(({ block }: ArticleTextBlockElementProps) => {
  return (
    <>
      {block.title && <h3 className="font mb-4 text-2xl font-semibold">{block.title}</h3>}
      {block.paragraphs.map((paragraph) => (
        <p key={paragraph} className="mb-2">
          {paragraph}
        </p>
      ))}
    </>
  )
})
