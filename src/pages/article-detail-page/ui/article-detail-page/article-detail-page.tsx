import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { ArticleDetails } from '@/entities/article'
import { CommentList } from '@/entities/comment'
import { cls } from '@/shared/lib/class-names'
import { Text } from '@/shared/ui'

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
      <Text className="my-5" title={t('Комментарии')} titleSize="xl" titleWeight="semibold" />
      <CommentList
        comments={[
          {
            id: '1',
            articleId: '1',
            text: 'comment 1',
            user: {
              username: 'user 1',
              id: '1',
            },
          },
          {
            id: '2',
            articleId: '2',
            text: 'comment 2',
            user: {
              username: 'user 2',
              id: '2',
            },
          },
        ]}
      />
    </>
  )
}

export default ArticleDetailPage
