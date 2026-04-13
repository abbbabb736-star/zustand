import { useTranslation } from 'react-i18next'
import { useAppStore } from '../store/store'

export default function AdminOrders() {
  const { t } = useTranslation()
  const orders = useAppStore((state) => state.orders)
  const cancelOrder = useAppStore((state) => state.cancelOrder)
  const deliverOrder = useAppStore((state) => state.deliverOrder)

  return (
    <div className="admin-page-inner">
      <h1 className="admin-page-title">{t('adminOrders')}</h1>
      {orders.length === 0 ? (
        <div className="empty-state">No orders yet</div>
      ) : (
        <div className="admin-table admin-orders">
          <div className="admin-table-row header">
            <div>ID</div>
            <div>{t('customer')}</div>
            <div>{t('total')}</div>
            <div>{t('status')}</div>
            <div>{t('actions')}</div>
          </div>
          {orders.map((order) => (
            <div key={order.id} className="admin-table-row">
              <div>{order.id}</div>
              <div>{order.customer.name}</div>
              <div>${order.total.toFixed(2)}</div>
              <div>{order.status}</div>
              <div className="row-actions">
                <button
                  className="button secondary"
                  onClick={() => cancelOrder(order.id)}
                >
                  {t('cancelOrder')}
                </button>
                <button
                  className="button secondary"
                  onClick={() => deliverOrder(order.id)}
                >
                  {t('deliverOrder')}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
