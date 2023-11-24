import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { ArticleDetails } from '@/entities/article'
import { cls } from '@/shared/lib/class-names'
import { ArticleCommentBlock } from '@/widgets/article-comment-block'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article-details')
  const { id } = useParams()

  if (!id) {
    return <div className={cls('', {}, [className])}>{t('Статья не найдена')}</div>
  }

  return (
    <>
      <ArticleDetails id={id} />
      <ArticleCommentBlock id={id} />
    </>
  )
}

export default ArticleDetailsPage
