import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { cls } from '@/shared/lib/class-names'
import { Article, ArticleView } from '../../model'
import { ArticleListItem } from '../article-list-item'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

export const ArticleList = memo(
  ({ className, articles, view = ArticleView.LIST, isLoading }: ArticleListProps) => {
    const { t } = useTranslation()

    const renderArticle = (article: Article) => {
      return <ArticleListItem key={article.id} article={article} view={view} />
    }

    return (
      <div
        className={cls(
          '',
          {
            'article-grid': view === ArticleView.TILE,
            'article-list': view === ArticleView.LIST,
          },
          [className]
        )}
      >
        {articles.length > 0 ? articles.map(renderArticle) : <div>{t('Статей нет')}</div>}
      </div>
    )
  }
)
