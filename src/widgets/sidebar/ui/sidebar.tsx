import { useState } from 'react'
import { tw } from 'typewind'
import { cls } from '@/shared/lib/class-names'
import { Button, Icon, LangSwitcher, ThemeSwitcher } from '@/shared/ui'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setIsCollapsed((prev) => !prev)
  }

  return (
    <aside
      data-testid="sidebar"
      className={cls(
        tw.bg_base_300.relative.flex.flex_col.p_2.transition_.width.w_['var(--sidebar-w)'] +
          ' body-height',
        { 'w-[var(--sidebar-w-collapsed)]': isCollapsed },
        [className]
      )}
    >
      <div className={tw.flex_1} />
      <div className={tw.flex.flex_wrap.gap_2}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
      <Button
        size="large"
        shape="rounded"
        className={cls(tw.transition_transform.btn_ghost.no_animation.absolute.top_['1/2'].right_1)}
        style={{
          transform: `translateY(-50%) rotate(${isCollapsed ? '0deg' : '180deg'})`,
        }}
        onClick={toggleCollapsed}
        data-testid="sidebar-toggle"
      >
        <Icon name="shared/arrow" className={cls(tw.ml_1)} />
      </Button>
    </aside>
  )
}
