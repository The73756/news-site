import { PropsWithChildren, useMemo, useState } from 'react'
import { LOCAL_STORAGE_KEY, Theme, ThemeContext } from '../lib'

interface ThemeProviderProps {
  initialTheme?: Theme
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_KEY) || Theme.DARK) as Theme

export const ThemeProvider = ({
  children,
  initialTheme,
}: PropsWithChildren<ThemeProviderProps>) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  const defaultProps = useMemo(() => {
    return {
      theme,
      setTheme,
    }
  }, [theme])

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
