import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchProductById } from '../api/productsApi'
import Loading from '../components/Loading'
import { useTranslation } from 'react-i18next'
import { useAppStore } from '../store/store'

export default function ProductDetail() {
  const { t } = useTranslation()
  const { id } = useParams()
  const addToCartItem = useAppStore((state) => state.addToCart)
  const { data: product, isLoading, isError } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id),
  })

  const addToCart = () => {
    if (!product) return
    addToCartItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    })
  }

  if (isLoading) return <Loading />
  if (isError || !product) return <div className="empty-state">Product not found</div>

  return (
    <section className="page-shell detail-page">
      <div className="detail-card">
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="detail-content">
          <h1>{product.name}</h1>
          <p className="subtitle">{product.category}</p>
          <p className="detail-price">${product.price}</p>
          <p>{product.description}</p>
          <div className="detail-meta">
            <div>
              <strong>{t('size')}:</strong> {product.sizes.join(', ')}
            </div>
            <div>
              <strong>{t('color')}:</strong> {product.colors.join(', ')}
            </div>
            <div>
              <strong>{t('status')}:</strong> {t('inStock')}
            </div>
          </div>
          <div className="detail-actions">
            <button className="button primary" onClick={addToCart}>
              {t('addToCart')}
            </button>
            <Link to="/cart" className="button secondary">
              {t('cart')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
