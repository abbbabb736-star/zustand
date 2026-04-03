import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authActions } from '../store/store'
import { useTranslation } from 'react-i18next'

const ADMIN_EMAIL = 'admin@nike.com'
const ADMIN_PASSWORD = '1234'

export default function AdminLogin() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      dispatch(authActions.login())
      navigate('/admin/products')
    } else {
      setError('Invalid admin credentials')
    }
  }

  return (
    <section className="page-shell auth-page">
      <div className="auth-card">
        <h1>{t('loginAdmin')}</h1>
        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            {t('email')}
            <input value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>
          <label>
            {t('password')}
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
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
