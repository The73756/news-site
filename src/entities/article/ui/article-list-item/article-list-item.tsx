import { memo } from 'react'
import { Link } from 'react-router-dom'
import { RoutePath } from '@/app/providers/router'
import { cls } from '@/shared/lib/class-names'
import { getFormattedDate } from '@/shared/lib/date'
import { Avatar, Button, Header, Icon, Image, Text } from '@/shared/ui'
import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from '../../model'
import { ArticleTileItem } from './article-tile-item'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
}

export const ArticleListItem = memo(({ className, article, view }: ArticleListItemProps) => {
  const articleDate = getFormattedDate(article.createdAt)

  if (view === ArticleView.TILE) {
    return <ArticleTileItem article={article} />
  }

  const articleTextBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as
    | ArticleTextBlock
    | undefined

  const articleDesc = articleTextBlock?.paragraphs[0]

  return (
    <Link
      to={`${RoutePath.article_detail}${article.id}`}
      className={cls(
        'card cursor-pointer bg-base-100 shadow-xl shadow-base-300 transition-colors hover:bg-base-200',
        {},
        [className]
      )}
    >
      <div className="card-body">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <Avatar size={40} src={String(article.user.avatar)} />
            <div className="flex items-center gap-2">
              <Text title={article.user.username} titleWeight="semibold" />
              <time dateTime={articleDate}>{articleDate}</time>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {article.views}
            <Icon name="shared/eye" />
          </div>
        </div>
        <div className="card-actions justify-between">
          <Header level="h2" custom className="card-title text-2xl">
            {article.title}
          </Header>
          <div className="flex flex-wrap gap-2">
            {article.type.map((type) => (
              <div key={type} className="badge-primary badge-outline badge badge-lg ">
                {type}
              </div>
            ))}
          </div>
        </div>
      </div>
      <figure>
        <Image loaderHeight={250} src={article.img} className="max-h-[250px]" alt={article.title} />
      </figure>
      <div className="card-body">
        {articleDesc && <p className="mb-2 line-clamp-3">{articleDesc}</p>}

        <div className="card-actions justify-end">
          <Button className="btn-ghost bg-base-content/10">Читать далее</Button>
        </div>
      </div>
    </Link>
  )
})
