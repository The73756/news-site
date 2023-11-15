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
  const spinnerSize = size || 80
  const borderColorString = useMemo(
    () =>
      `${borderColor || 'hsl(var(--nc))'} transparent ${
        borderColor || 'hsl(var(--nc))'
      } transparent`,
    [borderColor]
  )

  const spinnerStyles: CSSProperties = useMemo(
    () => ({
      width: spinnerSize,
      height: spinnerSize,
    }),
    [spinnerSize]
  )

  const spinnerInnerStyles: CSSProperties = useMemo(
    () => ({
      borderWidth: borderWidth || spinnerSize / 15,
      borderColor: borderColorString,
    }),
    [borderColorString, borderWidth, spinnerSize]
  )

  return (
    <div style={spinnerStyles} className={cls('spinner', {}, [className])}>
      <div style={spinnerInnerStyles} className="spinner-inner" />
    </div>
  )
}
