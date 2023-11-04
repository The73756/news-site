import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileReadonly, profileActions } from '@/features/editable-profile-card/model'
import { cls } from '@/shared/lib/class-names'
import { useAppDispatch } from '@/shared/lib/hooks'
import { Button, Text } from '@/shared/ui'

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile')

  const dispatch = useAppDispatch()
  const readonly = useSelector(getProfileReadonly)

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  return (
    <div className={cls('', {}, [className])}>
      <div className="mb-4 flex justify-between">
        <Text titleSize="xl" title={t('Профиль')} />
        {readonly ? (
          <Button onClick={onEdit} className="btn-outline text-lg normal-case">
            {t('Редактировать')}
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button onClick={onCancelEdit} className="btn-outline btn-error text-lg normal-case">
              {t('Отменить')}
            </Button>
            <Button onClick={onSave} className="btn-outline text-lg normal-case">
              {t('Сохранить')}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
