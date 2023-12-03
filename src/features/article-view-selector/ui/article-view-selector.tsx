import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleView } from '@/entities/article'
import { cls } from '@/shared/lib/class-names'
import { Button, Icon } from '@/shared/ui'
import { IconName } from '@/shared/ui/icon'

interface ArticleViewSelectorProps {
  className?: string
  onChangeView: (view: ArticleView) => void
  currentView: ArticleView
}

interface ViewButtonType {
  view: ArticleView
  icon: IconName
}

const viewButtons: ViewButtonType[] = [
  {
    view: ArticleView.TILE,
    icon: 'shared/tile',
  },
  {
    view: ArticleView.LIST,
    icon: 'shared/list',
  },
]

export const ArticleViewSelector = memo(
  ({ className, onChangeView, currentView }: ArticleViewSelectorProps) => {
    const { t } = useTranslation('articles')

    return (
      <div className={cls('flex items-center gap-2', {}, [className])}>
        {viewButtons.map(({ view, icon }) => (
          <Button
            key={view}
            className={cls('text-lg', {
              'btn-primary': currentView === view,
            })}
            title={t(view)}
            onClick={() => onChangeView(view)}
            shape="rounded"
          >
            <Icon name={icon} />
          </Button>
        ))}
      </div>
    )
  }
)
