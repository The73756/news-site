import { cls } from '@/shared/lib/class-names'

interface ArticleDetailPageProps {
  className?: string
}

const ArticleDetailPage = ({ className }: ArticleDetailPageProps) => {
  return <div className={cls('', {}, [className])}>ArticleDetailPAge</div>
}

export default ArticleDetailPage
