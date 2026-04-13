import { Link, useNavigate } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'
import { useTranslation } from 'react-i18next'
import { useAppStore } from '../store/store'

function JordanMark() {
  return (
    <svg
      className="jordan-mark"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M13.2 4.2c.8-.1 1.6.2 2.1.8.6.7.7 1.7.3 2.6l-1.9 4.2 3.4-1.2c1-.3 2.1 0 2.8.8.7.8.9 2 .4 3l-2.8 6.2c-.3.7-1 1.2-1.8 1.3H5.9c-.9 0-1.7-.5-2.1-1.3L2 15.5c-.4-.9-.2-2 .5-2.7l4.5-4.8c.6-.6 1.5-.9 2.4-.8l2.1.3-1.2-2.4c-.4-.8-.2-1.8.4-2.5.5-.6 1.3-1 2.1-1.1z"
      />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d="M10.5 18a7.5 7.5 0 110-15 7.5 7.5 0 010 15zM16.5 16.5L21 21"
      />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        stroke="currentColor"
        strokeWidth="1.8"
        d="M12 21s-6.2-4.35-8.3-7.5C2.1 11.2 2.5 8 4.8 6.4 7 4.9 9.5 5.6 12 8c2.5-2.4 5-3.1 7.2-1.6 2.3 1.6 2.7 4.8.1 7.1C17.2 16.65 12 21 12 21z"
      />
    </svg>
  )
}

function BagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        d="M6 8h12l-1 12H7L6 8zm3-3a3 3 0 016 0v1H9V5z"
      />
    </svg>
  )
}

export default function Navbar() {
  const { t } = useTranslation()
  const logoutAdmin = useAppStore((state) => state.logout)
  const navigate = useNavigate()
  const cartCount = useAppStore((state) =>
    state.cartItems.reduce((sum, item) => sum + item.quantity, 0),
  )
  const isAdmin = useAppStore((state) => state.isAdmin)

  const logout = () => {
    logoutAdmin()
    navigate('/')
  }

  return (
    <header className="site-header site-header--nike">
      <a href="#main-content" className="skip-link">
        {t('skipToContent')}
      </a>

      <div className="header-utility">
        <div className="header-utility__left">
          <span className="header-utility__jordan" aria-label="Jordan">
            <JordanMark />
          </span>
        </div>
        <div className="header-utility__center" aria-hidden="true" />
        <div className="header-utility__right">
          <button type="button" className="header-utility__link">
            {t('findStore')}
          </button>
          <span className="header-divider" aria-hidden="true">
            |
          </span>
          <button type="button" className="header-utility__link">
            {t('help')}
          </button>
          <span className="header-divider" aria-hidden="true">
            |
          </span>
          <button type="button" className="header-utility__link">
            {t('joinUs')}
          </button>
          <span className="header-divider" aria-hidden="true">
            |
          </span>
          {isAdmin ? (
            <>
              <Link to="/admin/dashboard" className="header-utility__link">
                {t('admin')}
              </Link>
              <span className="header-divider" aria-hidden="true">
                |
              </span>
              <button type="button" className="header-utility__link" onClick={logout}>
                {t('logout')}
              </button>
            </>
          ) : (
            <button
              type="button"
              className="header-utility__link"
              onClick={() => navigate('/admin/login')}
            >
              {t('signIn')}
            </button>
          )}
          <span className="header-utility__controls">
            <ThemeToggle compact />
            <LanguageSwitcher />
          </span>
        </div>
      </div>

      <div className="header-main">
        <Link to="/" className="brand brand--nike" aria-label="Nike home">
          <img src="/icons/logo.svg" alt="" className="brand-logo brand-logo--nike" />
        </Link>
        <nav className="header-navlinks" aria-label="Primary">
          <Link to="/">{t('newFeatured')}</Link>
          <a href="#men">{t('men')}</a>
          <a href="#women">{t('women')}</a>
          <a href="#kids">{t('kids')}</a>
          <a href="#sale">{t('sale')}</a>
          <a href="#snkrs">SNKRS</a>
        </nav>
        <div className="header-main__actions">
          <label className="header-search">
            <span className="header-search__icon">
              <SearchIcon />
            </span>
            <input type="search" placeholder={t('search')} autoComplete="off" name="q" />
          </label>
          <button type="button" className="icon-button icon-button--ghost" aria-label="Wishlist">
            <HeartIcon />
          </button>
          <Link to="/cart" className="icon-button icon-button--ghost cart" aria-label={t('cart')}>
            <BagIcon />
            {cartCount > 0 && <span>{cartCount}</span>}
          </Link>
        </div>
      </div>

      <div className="header-announcement">
        <p className="header-announcement__title">{t('helloNikeApp')}</p>
        <p className="header-announcement__sub">
          {t('nikeAppSubtitle')}{' '}
          <a href="#" className="header-announcement__link">
            {t('getYourGreat')}
          </a>
        </p>
      </div>
    </header>
  )
}
