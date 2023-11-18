import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Theme, useTheme } from '@/app/providers/theme-provider'
import { Button, Icon } from '@/shared/ui'

interface CodeProps {
  className?: string
  codeText: string
  language: string
}

export const Code = memo(({ codeText, language }: CodeProps) => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const [isWrap, setIsWrap] = useState(false)
  const [isCopy, setIsCopy] = useState(false)
  const btnClass = isCopy ? 'btn-success' : 'btn-ghost bg-base-300'

  const handleWrap = () => setIsWrap((prev) => !prev)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeText)
    setIsCopy(true)
  }

  return (
    <div className="group relative">
      <div className="absolute right-2 top-2 flex gap-1 opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100">
        <Button
          shape="rounded"
          size="small"
          className={btnClass}
          title={t('Копировать')}
          onClick={handleCopy}
        >
          <Icon name="shared/copy" />
        </Button>
        <Button
          shape="rounded"
          size="small"
          className="btn-ghost bg-base-300"
          onClick={handleWrap}
          title={t('Перенос строк')}
        >
          <Icon name="shared/wrap" />
        </Button>
      </div>

      <SyntaxHighlighter
        wrapLines={isWrap}
        wrapLongLines={isWrap}
        language={language || 'text'}
        style={theme === Theme.DARK ? oneDark : oneLight}
      >
        {codeText}
      </SyntaxHighlighter>
    </div>
  )
})
