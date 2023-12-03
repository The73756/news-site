import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { ArticleView } from '@/entities/article'
import { ArticleViewSelector } from '@/features/article-view-selector'
import { ArticlesPageList, articlesPageListActions } from '@/features/articles-page-list'
import { getArticlesPageListView } from '@/features/articles-page-list/model'
import { cls } from '@/shared/lib/class-names'
import { useAppDispatch } from '@/shared/lib/hooks'

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch()
  const view = useSelector(getArticlesPageListView)

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageListActions.setView(view))
    },
    [dispatch]
  )

  return (
    <div className={cls('', {}, [className])}>
      <div className="mb-4 flex justify-end">
        <ArticleViewSelector currentView={view} onChangeView={onChangeView} />
      </div>
      <ArticlesPageList />
    </div>
  )
}

export default ArticlesPage
