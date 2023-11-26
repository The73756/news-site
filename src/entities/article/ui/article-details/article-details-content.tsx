import { memo, useCallback } from 'react'
import { getFormattedDate } from '@/shared/lib/date'
import { Avatar, Header, Image, Text } from '@/shared/ui'
import { Article, ArticleBlock, ArticleBlockType } from '../../model'
import { ArticleCodeBlockElement } from '../article-code-block-element'
import { ArticleImageBlockComponent } from '../article-image-block-component'
import { ArticleTextBlockElement } from '../article-text-block-element'

interface ArticleDetailsContentProps {
  article?: Article
}

export const ArticleDetailsContent = memo(({ article }: ArticleDetailsContentProps) => {
  const articleDate = getFormattedDate(article?.createdAt || 0)

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockElement block={block} />
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent block={block} />
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockElement block={block} />
      default:
        return null
    }
  }, [])

  console.log('article-details-content [article]', article)

  return (
    <>
      <div className="mb-3 flex items-center gap-4">
        <Avatar size={40} src={String(article?.user.avatar)} />
        <div className="flex items-center gap-2">
          <Text title={article?.user.username} titleWeight="semibold" />
          <time dateTime={articleDate}>{articleDate}</time>
        </div>
      </div>

      <div className="mb-8">
        <Header level="h2" weight="bold">
          {article?.title}
        </Header>
        <Text textSize="xl" text={article?.subtitle} />
      </div>

      <div className="mb-8 overflow-hidden rounded-xl">
        <Image
          className="mx-auto max-h-[400px] object-contain"
          src={article?.img}
          alt={article?.title}
          loaderHeight={400}
        />
      </div>

      <div className="flex flex-col gap-6">
        {article?.blocks.map((block) => (
          <div key={block.id}>{renderBlock(block)}</div>
        ))}
      </div>
    </>
  )
})
