import { memo, useCallback } from 'react'
import { Avatar, Text } from '@/shared/ui'
import { Image } from '@/shared/ui/image/image'
import { Article, ArticleBlock, ArticleBlockType } from '../../model'
import { ArticleCodeBlockElement } from '../article-code-block-element'
import { ArticleImageBlockComponent } from '../article-image-block-component'
import { ArticleTextBlockElement } from '../article-text-block-element'

interface ArticleDetailsContentProps {
  article?: Article
}

export const ArticleDetailsContent = memo(({ article }: ArticleDetailsContentProps) => {
  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockElement />
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent />
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockElement />
      default:
        return null
    }
  }, [])

  return (
    <>
      <div className="mb-3 flex items-center gap-4">
        <Avatar size={40} src={String(article?.authorAvatar)} />
        <div className="flex items-center gap-2">
          <Text title={article?.author} titleWeight="semibold" />
          <time dateTime={article?.createdAt}>{article?.createdAt}</time>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-4xl font-bold">{article?.title}</h2>
        <Text titleSize="xl" textSize="xl" text={article?.subtitle} />
      </div>
      <div className="h-[400px] overflow-hidden rounded-xl">
        <Image className="mx-auto w-auto object-contain" src={article?.img} alt={article?.title} />
      </div>
      {article?.blocks.map((block) => (
        <div key={block.id}>{renderBlock(block)}</div>
      ))}
    </>
  )
})