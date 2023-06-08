import './loader.css'
import { cls } from '@/shared/lib/class-names'

interface LoaderProps {
  className?: string
}

export const Loader = ({ className }: LoaderProps) => {
  return <div className={cls('spinner', {}, [className])} />
}
