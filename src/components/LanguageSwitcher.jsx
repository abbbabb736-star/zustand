import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'uz', label: 'UZ' },
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div className="lang-switcher">
      {languages.map((lang) => (
        <button
          key={lang.code}
          type="button"
          className={i18n.language === lang.code ? 'active' : ''}
          onClick={() => i18n.changeLanguage(lang.code)}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}
