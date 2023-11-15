import { memo } from 'react'
import { cls } from '@/shared/lib/class-names'

interface ArticleCodeBlockElementProps {
  className?: string
}

export const ArticleCodeBlockElement = memo(({ className }: ArticleCodeBlockElementProps) => {
  return <div className={cls('', {}, [className])}>ArticleCodeBlockElement</div>
})
