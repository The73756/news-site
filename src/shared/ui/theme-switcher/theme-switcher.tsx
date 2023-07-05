import { memo } from 'react'
import { useTheme } from '@/app/providers/theme-provider'
import { Theme } from '@/app/providers/theme-provider/lib'
import { cls } from '@/shared/lib/class-names'
import { Button } from '@/shared/ui'
import { Icon } from '@/shared/ui/icon/icon'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { toggleTheme, theme } = useTheme()

  return (
    <Button shape="rounded" size="large" className={cls('', {}, [className])} onClick={toggleTheme}>
      {theme === Theme.DARK ? <Icon name="theme/moon" /> : <Icon name="theme/sun" />}
    </Button>
  )
})
