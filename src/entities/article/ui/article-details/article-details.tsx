import { memo, useEffect } from 'react'
import { articleDetailsReducer, fetchArticleById } from '@/entities/article/model'
import { cls } from '@/shared/lib/class-names'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/dynamic-module-loader'
import { useAppDispatch } from '@/shared/lib/hooks'

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchArticleById(id))
  }, [dispatch, id])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <div className={cls('', {}, [className])}>ArticleDetails</div>
    </DynamicModuleLoader>
  )
})
