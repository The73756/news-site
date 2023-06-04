import './loader.css'
import { cls } from '@/shared/lib'

interface LoaderProps {
  className?: string
}

export const Loader = ({ className }: LoaderProps) => {
  return <div className={cls('spinner', {}, [className])} />
}
