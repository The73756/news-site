import { ArticlesPageList } from '@/features/articles-page-list'
import { cls } from '@/shared/lib/class-names'

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  return (
    <div className={cls('', {}, [className])}>
      <ArticlesPageList />
    </div>
  )
}

export default ArticlesPage
