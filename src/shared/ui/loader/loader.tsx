import './loader.css'
import { CSSProperties, useMemo } from 'react'
import { cls } from '@/shared/lib/class-names'

interface LoaderProps {
  className?: string
  size?: number
  borderWidth?: number
  borderColor?: string
}

export const Loader = ({ className, size, borderWidth, borderColor }: LoaderProps) => {
  const borderColorString = useMemo(
    () =>
      `${borderColor || 'hsl(var(--nc))'} transparent ${
        borderColor || 'hsl(var(--nc))'
      } transparent`,
    [borderColor]
  )

  const spinnerStyles: CSSProperties = useMemo(
    () => ({
      width: size || 80,
      height: size || 80,
    }),
    [size]
  )

  const spinnerInnerStyles: CSSProperties = useMemo(
    () => ({
      borderWidth: borderWidth || 6,
      borderColor: borderColorString,
    }),
    [borderColorString, borderWidth]
  )

  return (
    <div style={spinnerStyles} className={cls('spinner', {}, [className])}>
      <div style={spinnerInnerStyles} className="spinner-inner" />
    </div>
  )
}
