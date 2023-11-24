import { FormEvent, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { cls } from '@/shared/lib/class-names'
import { DynamicModuleLoader } from '@/shared/lib/dynamic-module-loader'
import { useAppDispatch } from '@/shared/lib/hooks'
import { Button, Input } from '@/shared/ui'
import {
  addCommentFormActions,
  addCommentFormReducer,
  getAddCommentFormError,
  getAddCommentFormText,
} from '../../model'

interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers = {
  addCommentForm: addCommentFormReducer,
}

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const text = useSelector(getAddCommentFormText)
  const error = useSelector(getAddCommentFormError)

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value))
    },
    [dispatch]
  )

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()

      const clearText = text?.trim()
      if (!clearText) return

      onSendComment(clearText)
      onCommentTextChange('')
    },
    [onCommentTextChange, onSendComment, text]
  )

  return (
    <DynamicModuleLoader reducers={reducers}>
      <form
        className={cls('mb-4 flex w-full items-center gap-2', {}, [className])}
        onSubmit={onSubmit}
      >
        <Input
          className="w-full"
          placeholder={t('Введите текст комментария')}
          value={text || ''}
          onChange={onCommentTextChange}
        />

        <Button type="submit">{t('Отправить')}</Button>
      </form>
    </DynamicModuleLoader>
  )
})

export default AddCommentForm
