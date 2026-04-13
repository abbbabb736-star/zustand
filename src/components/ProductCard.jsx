import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAppStore } from '../store/store'

export default function ProductCard({ product }) {
  const addToCart = useAppStore((state) => state.addToCart)
  const { t } = useTranslation()

  const addItem = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    })
  }

  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-body">
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>{product.category}</p>
          </div>
          <span className="product-price">${product.price}</span>
        </div>
      </Link>
      <button className="button primary card-button" onClick={addItem}>
        {t('addToCart')}
      </button>
    </article>
  )
}
