import { memo } from 'react'
import { cls } from '@/shared/lib/class-names'

interface ArticleImageBlockComponentProps {
  className?: string
}

export const ArticleImageBlockComponent = memo(({ className }: ArticleImageBlockComponentProps) => {
  return <div className={cls('', {}, [className])}>ArticleImageBlockComponent</div>
})
