import { cls } from '@/shared/lib/class-names'

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  return <div className={cls('', {}, [className])}>ArticlesPage</div>
}

export default ArticlesPage
