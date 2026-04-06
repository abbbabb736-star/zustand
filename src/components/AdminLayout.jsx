import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/store'
import { useTranslation } from 'react-i18next'

const linkClass = ({ isActive }) =>
  `admin-sidebar__link${isActive ? ' admin-sidebar__link--active' : ''}`

export default function AdminLayout() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout = () => {
    dispatch(authActions.logout())
    navigate('/')
  }

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar" aria-label="Admin navigation">
        <div className="admin-sidebar__brand">
          <img src="/icons/logo.svg" alt="" width={32} height={32} />
          <div>
            <span className="admin-sidebar__title">Nike</span>
            <span className="admin-sidebar__subtitle">Admin</span>
          </div>
        </div>
        <nav className="admin-sidebar__nav">
          <NavLink to="/admin/dashboard" className={linkClass} end>
            {t('dashboard') || 'Dashboard'}
          </NavLink>
          <NavLink to="/admin/products" className={linkClass}>
            {t('adminProducts')}
          </NavLink>
          <NavLink to="/admin/orders" className={linkClass}>
            {t('adminOrders')}
          </NavLink>
        </nav>
        <button type="button" className="admin-sidebar__logout" onClick={logout}>
          {t('logout')}
        </button>
      </aside>
      <div className="admin-layout__body">
        <header className="admin-layout__topbar">
          <h1 className="admin-layout__topbar-title">{t('adminPanel')}</h1>
        </header>
        <div className="admin-layout__content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
