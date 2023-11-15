import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { ArticleDetails } from '@/entities/article'
import { cls } from '@/shared/lib/class-names'

interface ArticleDetailPageProps {
  className?: string
}

const ArticleDetailPage = ({ className }: ArticleDetailPageProps) => {
  const { t } = useTranslation('article-details')
  const { id } = useParams()

  if (!id) {
    return <div className={cls('', {}, [className])}>{t('Статья не найдена')}</div>
  }

  return (
    <>
      <ArticleDetails id={String(id)} />
    </>
  )
}

export default ArticleDetailPage
