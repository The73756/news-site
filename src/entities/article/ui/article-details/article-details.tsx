import { memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { cls } from '@/shared/lib/class-names'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/dynamic-module-loader'
import { useAppDispatch } from '@/shared/lib/hooks'
import { Avatar, Skeleton, Text } from '@/shared/ui'
import { Image } from '@/shared/ui/image/image'
import { SkeletonWrapper } from '@/shared/ui/skeleton/skeleton-wrapper'
import {
  articleDetailsReducer,
  fetchArticleById,
  getArticleDetails,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model'

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation('article-details')
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const article = useSelector(getArticleDetails)
  const error = useSelector(getArticleDetailsError)

  useEffect(() => {
    if (PROJECT !== 'storybook') {
      dispatch(fetchArticleById(id))
    }
  }, [dispatch, id])

  let content

  if (isLoading) {
    content = (
      <div className="max-w-screen-md">
        <SkeletonWrapper className="mb-8 flex flex-col gap-3">
          <Skeleton width={150} height={150} border="100%" />
          <Skeleton width="60%" height={20} />
          <Skeleton width="40%" height={18} />
        </SkeletonWrapper>
        <SkeletonWrapper className="flex flex-col gap-2">
          <Skeleton width="100%" height={10} />
          <Skeleton width="90%" height={10} />
          <Skeleton width="95%" height={10} />
          <Skeleton width="70%" height={10} />
          <Skeleton width="80%" height={10} />
        </SkeletonWrapper>
      </div>
    )
  } else if (error) {
    content = (
      <Text
        title={t('Произошла ошибка при загрузке статьи')}
        text={t('Попробуйте обновить страницу')}
        textSize="xl"
        titleSize="xl"
        theme="error"
        align="center"
      />
    )
  } else {
    content = (
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
        <div className="h-[500px] overflow-hidden rounded-xl">
          <Image
            className="mx-auto w-auto object-contain"
            src={article?.img}
            alt={article?.title}
          />
        </div>
      </>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <article className={cls('min-h-full', {}, [className])}>{content}</article>
    </DynamicModuleLoader>
  )
})
