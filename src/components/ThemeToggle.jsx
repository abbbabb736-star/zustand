import { useTranslation } from 'react-i18next'
import { useAppStore } from '../store/store'

export default function ThemeToggle({ compact = false }) {
  const theme = useAppStore((state) => state.theme)
  const toggleTheme = useAppStore((state) => state.toggleTheme)
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
