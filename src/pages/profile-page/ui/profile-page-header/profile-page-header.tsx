import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/user'
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from '@/features/editable-profile-card'
import { cls } from '@/shared/lib/class-names'
import { useAppDispatch } from '@/shared/lib/hooks'
import { Button, Text } from '@/shared/ui'

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile')

  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  const dispatch = useAppDispatch()
  const readonly = useSelector(getProfileReadonly)

  const canEdit = String(authData?.id) === String(profileData?.id)

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    if (!authData?.id) return

    dispatch(updateProfileData(authData.id))
  }, [dispatch, authData])

  return (
    <div className={cls('', {}, [className])}>
      <div className="mb-4 flex justify-between">
        <Text titleSize="xl" title={t('Профиль')} />
        {canEdit && (
          <>
            {readonly ? (
              <Button onClick={onEdit} className="btn-outline text-lg normal-case">
                {t('Редактировать')}
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button
                  onClick={onCancelEdit}
                  className="btn-outline btn-error text-lg normal-case"
                >
                  {t('Отменить')}
                </Button>
                <Button onClick={onSave} className="btn-outline text-lg normal-case">
                  {t('Сохранить')}
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
