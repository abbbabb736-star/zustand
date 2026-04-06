import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { allProducts } from '../api/productsApi'
import StatisticsChart from '../components/StatisticsChart'
import { useTranslation } from 'react-i18next'

export default function AdminDashboard() {
  const { t } = useTranslation()
  const orders = useSelector((state) => state.orders.items)
  const cartItems = useSelector((state) => state.cart.items)

  const { data: products, isLoading } = useQuery({
    queryKey: ['admin-products-count'],
    queryFn: allProducts,
  })

  const orderCount = orders.length
  const revenue = orders.reduce((sum, o) => sum + (o.total || 0), 0)
  const productCount = products?.length ?? 0
  const cartUnits = cartItems.reduce((s, i) => s + i.quantity, 0)

  return (
    <div className="admin-page-inner">
      <div className="admin-dashboard__head">
        <p className="admin-dashboard__intro">{t('dashboardIntro')}</p>
        <Link to="/admin/products" className="button primary admin-dashboard__add-product">
          {t('addProductCta')}
        </Link>
      </div>
      <div className="admin-stats">
        <div className="admin-stat-card">
          <span className="admin-stat-card__label">{t('products')}</span>
          <span className="admin-stat-card__value">
            {isLoading ? '—' : productCount}
          </span>
        </div>
        <div className="admin-stat-card">
          <span className="admin-stat-card__label">{t('adminOrders')}</span>
          <span className="admin-stat-card__value">{orderCount}</span>
        </div>
        <div className="admin-stat-card">
          <span className="admin-stat-card__label">{t('total')}</span>
          <span className="admin-stat-card__value">${revenue.toFixed(2)}</span>
        </div>
        <div className="admin-stat-card">
          <span className="admin-stat-card__label">{t('cart')}</span>
          <span className="admin-stat-card__value">{cartUnits}</span>
        </div>
      </div>

      <section className="admin-dashboard__charts" aria-label="Charts">
        <h2 className="admin-section-title">{t('statistics')}</h2>
        <div className="admin-chart-wrap">
          <StatisticsChart />
        </div>
      </section>
    </div>
  )
}
