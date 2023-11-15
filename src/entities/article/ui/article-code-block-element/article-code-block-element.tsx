import { memo } from 'react'
import { Code } from '@/shared/ui'
import { ArticleCodeBlock } from '../../model'

interface ArticleCodeBlockElementProps {
  block: ArticleCodeBlock
}

export const ArticleCodeBlockElement = memo(({ block }: ArticleCodeBlockElementProps) => {
  return <Code codeText={block.code} language={block.language} />
})
