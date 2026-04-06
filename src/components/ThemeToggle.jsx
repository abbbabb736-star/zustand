import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { useTranslation } from 'react-i18next'

export default function ThemeToggle({ compact = false }) {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { t } = useTranslation()

  return (
    <button
      type="button"
      className={compact ? 'theme-toggle theme-toggle--compact' : 'button'}
      onClick={toggleTheme}
      aria-label={t('darkMode')}
      title={t('darkMode')}
    >
      {compact ? (theme === 'dark' ? '🌙' : '☀️') : `${t('darkMode')}: ${theme === 'dark' ? '🌙' : '☀️'}`}
    </button>
  )
}
