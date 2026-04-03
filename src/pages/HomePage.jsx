import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '../api/productsApi'
import ProductCard from '../components/ProductCard'
import Pagination from '../components/Pagination'
import Loading from '../components/Loading'
import { useTranslation } from 'react-i18next'

export default function HomePage() {
  const { t } = useTranslation()
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const { data, isLoading } = useQuery({
    queryKey: ['products', page, search],
    queryFn: () => fetchProducts(page, search, 3),
    keepPreviousData: true,
  })

  const { data: gearData } = useQuery({
    queryKey: ['gear-products'],
    queryFn: () => fetchProducts(1, '', 8),
    keepPreviousData: true,
  })

  const gearItems = gearData?.items ?? []
  const mensGear = gearItems.slice(0, 4)
  const womensGear = gearItems.slice(4, 8)

  return (
    <section className="page-shell">
      <section className="hero-section">
                <div className="hero-image">
          <img src="/images/hero.png" alt="Hero" />
        </div>
        <span className="eyebrow">First Look</span>
        
        <h1>NIKE AIR MAX PULSE</h1>
        <p className="hero-copy">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse — designed
          to push your past your limits and help you go to the max.
        </p>
        <div className="hero-actions">
          <button type="button" className="button hero-button">
            Notify Me
          </button>
          <button type="button" className="button hero-button secondary">
            Shop Air Max
          </button>
        </div>

      </section>

      <div className="page-header">
        <div>
          <h1>Best of Air Max</h1>
        </div>
      </div>

      {isLoading && <Loading />}

      {!isLoading && data?.items.length === 0 && (
        <div className="empty-state">{t('noProducts')}</div>
      )}

      <div className="product-grid">
        {data?.items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {data && (
        <Pagination
          page={page}
          total={data.total}
          pageSize={data.pageSize}
          onChange={(newPage) => setPage(Math.max(1, newPage))}
        />
      )}

      <section className="gear-section">
        <div className="gear-title-row">
          <span className="eyebrow">Gear Up</span>
        </div>

        <div className="gear-row">
          <div className="gear-row-header">
            <h3>Shop Men's</h3>
            <div className="gear-controls">
              <button type="button" className="icon-button small">‹</button>
              <button type="button" className="icon-button small">›</button>
            </div>
          </div>
          <div className="gear-card-grid">
            {mensGear.map((item) => (
              <article key={item.id} className="gear-card">
                <div className="gear-card-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="gear-card-body">
                  <strong>{item.name}</strong>
                  <p>{item.sub}</p>
                  <span className="gear-price">{item.price}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="gear-row">
          <div className="gear-row-header">
            <h3>Shop Women's</h3>
            <div className="gear-controls">
              <button type="button" className="icon-button small">‹</button>
              <button type="button" className="icon-button small">›</button>
            </div>
          </div>
          <div className="gear-card-grid">
            {womensGear.map((item) => (
              <article key={item.id} className="gear-card">
                <div className="gear-card-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="gear-card-body">
                  <strong>{item.name}</strong>
                  <p>{item.sub}</p>
                  <span className="gear-price">{item.price}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="featured-label">Featured</div>
        <div
          className="featured-image"
          style={{
            backgroundImage: "url('/images/men.png')",
          }}
        />
        <div className="featured-copy">
          <h2>STEP INTO WHAT FEELS GOOD</h2>
          <p>Cause everyone should know the feeling of running in that perfect pair.</p>
          <button type="button" className="button hero-button">
            Find Your Shoe
          </button>
        </div>
      </section>
    </section>
  )
}
