import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useTranslation } from 'react-i18next'
import { useAppStore } from '../store/store'

export default function CheckoutPage() {
  const { t } = useTranslation()
  const addOrder = useAppStore((state) => state.addOrder)
  const clearCart = useAppStore((state) => state.clearCart)
  const navigate = useNavigate()
  const items = useAppStore((state) => state.cartItems)
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  useEffect(() => {
    if (items.length === 0) {
      navigate('/cart')
    }
  }, [items.length, navigate])

  const formik = useFormik({
    initialValues: { name: '', phone: '', address: '' },
    validationSchema: Yup.object({
      name: Yup.string().required(t('name') + ' is required'),
      phone: Yup.string().required(t('phone') + ' is required'),
      address: Yup.string().required(t('address') + ' is required'),
    }),
    onSubmit: (values) => {
      addOrder({
        customer: values,
        items,
        total,
      })
      clearCart()
      navigate('/')
    },
  })

  return (
    <section className="page-shell checkout-page">
      <h1>{t('checkout')}</h1>
      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={formik.handleSubmit}>
          <label>
            {t('name')}
            <input
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name && formik.touched.name ? (
              <span className="field-error">{formik.errors.name}</span>
            ) : null}
          </label>
          <label>
            {t('phone')}
            <input
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
            {formik.errors.phone && formik.touched.phone ? (
              <span className="field-error">{formik.errors.phone}</span>
            ) : null}
          </label>
          <label>
            {t('address')}
            <textarea
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
            />
            {formik.errors.address && formik.touched.address ? (
              <span className="field-error">{formik.errors.address}</span>
            ) : null}
          </label>
          <button type="submit" className="button primary full-width">
            {t('orderSubmit')}
          </button>
        </form>
        <aside className="checkout-summary">
          <h2>{t('checkoutSummary')}</h2>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name} × {item.quantity} = ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <p className="checkout-total">{t('total')}: ${total.toFixed(2)}</p>
        </aside>
      </div>
    </section>
  )
}
