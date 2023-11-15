import { memo } from 'react'
import { cls } from '@/shared/lib/class-names'

interface ArticleTextBlockElementProps {
  className?: string
}

export const ArticleTextBlockElement = memo(({ className }: ArticleTextBlockElementProps) => {
  return <div className={cls('', {}, [className])}>ArticleTextBlockElement</div>
})
