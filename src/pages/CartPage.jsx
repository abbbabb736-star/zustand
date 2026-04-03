import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartActions } from '../store/store'
import { useTranslation } from 'react-i18next'

export default function CartPage() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (items.length === 0) {
    return (
      <section className="page-shell empty-state">
        <h1>{t('emptyCart')}</h1>
        <Link to="/" className="button primary">
          {t('continueShopping')}
        </Link>
      </section>
    )
  }

  return (
    <section className="page-shell">
      <h1>{t('cart')}</h1>
      <div className="cart-grid">
        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-row">
              <div>
                <h3>{item.name}</h3>
                <p>{t('price')}: ${item.price}</p>
              </div>
              <div className="cart-controls">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(event) =>
                    dispatch(
                      cartActions.updateQuantity({
                        id: item.id,
                        quantity: Number(event.target.value),
                      }),
                    )
                  }
                />
                <button
                  className="button secondary"
                  onClick={() => dispatch(cartActions.removeFromCart(item.id))}
                >
                  {t('cancel')}
                </button>
              </div>
            </div>
          ))}
        </div>
        <aside className="cart-summary">
          <h2>{t('cartSummary')}</h2>
          <p>{t('total')}: ${total.toFixed(2)}</p>
          <Link to="/checkout" className="button primary full-width">
            {t('checkout')}
          </Link>
        </aside>
      </div>
    </section>
  )
}
