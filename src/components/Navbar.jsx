import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store/store'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0),
  )
  const isAdmin = useSelector((state) => state.auth.isAdmin)

  const logout = () => {
    dispatch(authActions.logout())
    navigate('/')
  }

  return (
    <header className="site-header">
      <div className="header-promo">
        <span>Download the app to access everything Nike. Get Your Great.</span>
        <div className="promo-links">
          <button type="button">Find a Store</button>
          <button type="button">Help</button>
          {isAdmin ? (
            <button type="button" onClick={logout}>
              {t('logout')}
            </button>
          ) : (
            <button type="button" onClick={() => navigate('/admin/login')}>
              {t('login')}
            </button>
          )}
        </div>
      </div>
      <div className="header-navbar">
        <div className="brand">
          <img src="/icons/logo.svg" alt="Nike logo" className="brand-logo" />
        </div>
        <nav className="header-navlinks">
          <a href="#">New & Featured</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Sale</a>
          <a href="#">SNKRS</a>
        </nav>
        <div className="header-actions">
          <button className="icon-button" aria-label="Search">
            🔍
          </button>
          <button className="icon-button" aria-label="Favorites">
            🤍
          </button>
          <button className="icon-button cart" aria-label="Cart">
            🛒
            <span>{cartCount}</span>
          </button>
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
