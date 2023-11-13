import { cls } from '@/shared/lib/class-names'

interface ArticleCodeBlockElementProps {
  className?: string
}

export const ArticleCodeBlockElement = ({ className }: ArticleCodeBlockElementProps) => {
  return <div className={cls('', {}, [className])}>ArticleCodeBlockElement</div>
}
