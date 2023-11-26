import { memo } from 'react'
import { Link } from 'react-router-dom'
import { RoutePath } from '@/app/providers/router'
import { Article } from '@/entities/article/model'
import { cls } from '@/shared/lib/class-names'
import { getFormattedDate } from '@/shared/lib/date'
import { Header, Icon, Image } from '@/shared/ui'

interface ArticleListTileItemProps {
  className?: string
  article: Article
}

export const ArticleTileItem = memo(({ className, article }: ArticleListTileItemProps) => {
  const articleDate = getFormattedDate(article.createdAt)

  return (
    <Link
      to={`${RoutePath.article_detail}${article.id}`}
      className={cls(
        'card cursor-pointer bg-base-100 shadow-xl shadow-base-300 transition-colors hover:bg-base-200',
        {},
        [className]
      )}
    >
      <figure>
        <Image loaderHeight={250} src={article.img} className="max-h-[250px]" alt={article.title} />
      </figure>
      <div className="card-body">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Header level="h2" custom className="card-title">
            {article.title}
          </Header>
          <time dateTime={articleDate}>{articleDate}</time>
        </div>

        <div className="card-actions justify-between">
          <div className="flex items-center gap-1">
            {article.views}
            <Icon name="shared/eye" />
          </div>
          <div className="flex flex-wrap gap-2">
            {article.type.map((type) => (
              <div key={type} className="badge-primary badge-outline badge badge-lg ">
                {type}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
})
