import { FC, useMemo, useState } from 'react'
import { LOCAL_STORAGE_KEY, Theme, ThemeContext } from '../lib'

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_KEY) || Theme.DARK) as Theme

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultProps = useMemo(() => {
    return {
      theme,
      setTheme,
    }
  }, [theme])

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
