import { memo } from 'react'
import { ArticleImageBlock } from '@/entities/article/model'
import { cls } from '@/shared/lib/class-names'
import { Image } from '@/shared/ui'

interface ArticleImageBlockComponentProps {
  className?: string
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(
  ({ className, block }: ArticleImageBlockComponentProps) => {
    return (
      <figure className={cls('', {}, [className])}>
        <Image
          loaderHeight={200}
          alt={block.title}
          src={block.src}
          className="mx-auto block h-full max-h-[400px] w-auto object-contain"
        />
        <figcaption className="mt-2 text-center text-sm">{block.title}</figcaption>
      </figure>
    )
  }
)
