import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { useTranslation } from 'react-i18next'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { t } = useTranslation()

  return (
    <button className="button" onClick={toggleTheme}>
      {t('darkMode')}: {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  )
}
