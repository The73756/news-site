import { useState } from 'react'
import { cls } from '@/shared/lib'
import { Button, ThemeSwitcher } from '@/shared/ui'
import { LangSwitcher } from '@/shared/ui/lang-switcher/lang-switcher'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setIsCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setIsCollapsed((prev) => !prev)
  }

  return (
    <aside
      className={cls(
        'body-height flex w-[var(--sidebar-w)] flex-col bg-base-300 p-2 transition-[width]',
        { 'w-[var(--sidebar-w-collapsed)]': collapsed },
        [className]
      )}
    >
      <div className="flex-1">
        <Button size="large" onClick={toggleCollapsed} className="btn-sm btn">
          T
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </aside>
  )
}
