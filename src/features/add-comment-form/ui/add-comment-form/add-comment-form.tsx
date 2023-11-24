import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { cls } from '@/shared/lib/class-names'
import { DynamicModuleLoader } from '@/shared/lib/dynamic-module-loader'
import { useAppDispatch } from '@/shared/lib/hooks'
import { Button, InputWithLabel } from '@/shared/ui'
import {
  addCommentFormActions,
  addCommentFormReducer,
  getAddCommentFormError,
  getAddCommentFormText,
} from '../../model'

interface AddCommentFormProps {
  className?: string
}

const reducers = {
  addCommentForm: addCommentFormReducer,
}

const AddCommentForm = memo(({ className }: AddCommentFormProps) => {
  const { t } = useTranslation('article-details')
  const dispatch = useAppDispatch()
  const text = useSelector(getAddCommentFormText)
  const error = useSelector(getAddCommentFormError)

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value))
    },
    [dispatch]
  )

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={cls('', {}, [className])}>
        <InputWithLabel
          label={t('Введите текст комментария')}
          value={text}
          onChange={onCommentTextChange}
        >
          {t('Введите текст комментария')}
        </InputWithLabel>
        <Button>{t('Отправить')}</Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default AddCommentForm
