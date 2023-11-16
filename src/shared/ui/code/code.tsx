import { memo } from 'react'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Theme, useTheme } from '@/app/providers/theme-provider'

interface CodeProps {
  className?: string
  codeText: string
  language: string
}

export const Code = memo(({ codeText, language }: CodeProps) => {
  const { theme } = useTheme()

  return (
    <SyntaxHighlighter
      language={language || 'text'}
      style={theme === Theme.DARK ? oneDark : oneLight}
    >
      {codeText}
    </SyntaxHighlighter>
  )
})
