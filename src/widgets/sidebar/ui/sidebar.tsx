import { useState } from 'react'
import { tw } from 'typewind'
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
        tw.bg_base_300.flex.flex_col.p_2.transition_.width.w_['var(--sidebar-w)'] + ' body-height',
        { 'w-[var(--sidebar-w-collapsed)]': collapsed },
        [className]
      )}
    >
      <div className={tw.flex_1}>
        <Button size="large" onClick={toggleCollapsed} className={tw.btn.btn_sm}>
          T
        </Button>
      </div>
      <div className={tw.flex.flex_wrap.gap_2}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </aside>
  )
}
