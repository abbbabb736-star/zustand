import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAppStore } from '../store/store'

/** Admin kirish: login va parol ikkalasi ham `admin` */
const ADMIN_LOGIN = 'admin'
const ADMIN_PASSWORD = 'admin'

export default function AdminLogin() {
  const { t } = useTranslation()
  const loginAdmin = useAppStore((state) => state.login)
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const login = email.trim().toLowerCase()
    if (login === ADMIN_LOGIN && password === ADMIN_PASSWORD) {
      loginAdmin()
      navigate('/admin/dashboard')
    } else {
      setError('Invalid admin credentials')
    }
  }

  return (
    <section className="page-shell auth-page admin-login-page">
      <div className="auth-card">
        <h1>{t('loginAdmin')}</h1>
        <p className="admin-login-hint">{t('adminLoginHint')}</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            {t('loginField')}
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="username"
              placeholder="admin"
            />
          </label>
          <label>
            {t('password')}
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              placeholder="admin"
            />
          </label>
          {error && <p className="field-error">{error}</p>}
          <button type="submit" className="button primary full-width">
            {t('submit')}
          </button>
        </form>
      </div>
    </section>
  )
}
