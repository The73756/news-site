import { cls } from '@/shared/lib/class-names'

interface ArticleImageBlockComponentProps {
  className?: string
}

export const ArticleImageBlockComponent = ({ className }: ArticleImageBlockComponentProps) => {
  return <div className={cls('', {}, [className])}>ArticleImageBlockComponent</div>
}
