import { useSelector, useDispatch } from 'react-redux'
import { ordersActions } from '../store/store'
import { useTranslation } from 'react-i18next'

export default function AdminOrders() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const orders = useSelector((state) => state.orders.items)

  return (
    <section className="page-shell admin-page">
      <h1>{t('adminOrders')}</h1>
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
                  onClick={() => dispatch(ordersActions.cancelOrder(order.id))}
                >
                  {t('cancelOrder')}
                </button>
                <button
                  className="button secondary"
                  onClick={() => dispatch(ordersActions.deliverOrder(order.id))}
                >
                  {t('deliverOrder')}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
