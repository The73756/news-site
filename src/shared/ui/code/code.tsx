import { memo } from 'react'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface CodeProps {
  className?: string
  codeText: string
  language: string
}

export const Code = memo(({ codeText, language }: CodeProps) => {
  return (
    <SyntaxHighlighter language={language || 'text'} style={oneDark}>
      {codeText}
    </SyntaxHighlighter>
  )
})
