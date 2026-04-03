import { createContext, useEffect, useMemo, useState } from 'react'

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
})

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => window.localStorage.getItem('nike-theme') || 'light',
  )

  useEffect(() => {
    window.localStorage.setItem('nike-theme', theme)
    document.documentElement.dataset.theme = theme
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')),
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
