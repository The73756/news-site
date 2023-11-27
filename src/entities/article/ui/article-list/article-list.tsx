import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleListItemLoader } from '@/entities/article/ui/article-list-item/article-list-item-loader'
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
  ({ className, articles, view = ArticleView.TILE, isLoading = false }: ArticleListProps) => {
    const { t } = useTranslation('articles')
    const containerClass = cls(
      '',
      {
        'article-grid': view === ArticleView.TILE,
        'article-list': view === ArticleView.LIST,
      },
      [className]
    )

    if (isLoading) {
      return (
        <div className={containerClass}>
          {new Array(view === ArticleView.TILE ? 10 : 2).fill(0).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key -- it's ok for loaders
            <ArticleListItemLoader key={index} view={view} />
          ))}
        </div>
      )
    }

    const renderArticle = (article: Article) => {
      return <ArticleListItem key={article.id} article={article} view={view} />
    }

    return (
      <div className={containerClass}>
        {articles.length > 0 ? articles.map(renderArticle) : <div>{t('Статей нет')}</div>}
      </div>
    )
  }
)
