import { cls } from '@/shared/lib/class-names'

interface ArticleTextBlockElementProps {
  className?: string
}

export const ArticleTextBlockElement = ({ className }: ArticleTextBlockElementProps) => {
  return <div className={cls('', {}, [className])}>ArticleTextBlockElement</div>
}
