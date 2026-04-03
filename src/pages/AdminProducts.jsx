import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { allProducts, createProduct, updateProduct, deleteProduct } from '../api/productsApi'
import Loading from '../components/Loading'
import { useTranslation } from 'react-i18next'

const initialForm = {
  id: '',
  name: '',
  category: '',
  price: '',
  description: '',
}

export default function AdminProducts() {
  const { t } = useTranslation()
  const queryClient = useQueryClient()
  const [form, setForm] = useState(initialForm)

  const { data, isLoading } = useQuery({
    queryKey: ['admin-products'],
    queryFn: allProducts,
  })
  const createMutation = useMutation(createProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(['admin-products'])
      setForm(initialForm)
    },
  })
  const updateMutation = useMutation(({ id, values }) => updateProduct(id, values), {
    onSuccess: () => {
      queryClient.invalidateQueries(['admin-products'])
      setForm(initialForm)
    },
  })
  const deleteMutation = useMutation(deleteProduct, {
    onSuccess: () => queryClient.invalidateQueries(['admin-products']),
  })

  const handleEdit = (product) => {
    setForm({
      id: product.id,
      name: product.name,
      category: product.category,
      price: String(product.price),
      description: product.description,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const payload = {
      name: form.name,
      category: form.category,
      price: Number(form.price),
      description: form.description,
    }
    if (form.id) {
      updateMutation.mutate({ id: form.id, values: payload })
    } else {
      createMutation.mutate(payload)
    }
  }

  return (
    <section className="page-shell admin-page">
      <div className="admin-grid">
        <div className="admin-panel">
          <h1>{t('adminProducts')}</h1>
          <form className="admin-form" onSubmit={handleSubmit}>
            <label>
              {t('products')}
              <input
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
              />
            </label>
            <label>
              {t('category') || 'Category'}
              <input
                value={form.category}
                onChange={(event) => setForm({ ...form, category: event.target.value })}
              />
            </label>
            <label>
              {t('price')}
              <input
                type="number"
                value={form.price}
                onChange={(event) => setForm({ ...form, price: event.target.value })}
              />
            </label>
            <label>
              {t('description')}
              <textarea
                value={form.description}
                onChange={(event) => setForm({ ...form, description: event.target.value })}
              />
            </label>
            <div className="admin-actions">
              <button className="button primary" type="submit" disabled={createMutation.isLoading || updateMutation.isLoading}>
                {form.id ? t('updateProduct') : t('createProduct')}
              </button>
              {form.id && (
                <button type="button" className="button secondary" onClick={() => setForm(initialForm)}>
                  {t('cancel')}
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="admin-list">
          <h2>{t('products')}</h2>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="admin-table">
              <div className="admin-table-row header">
                <div>{t('products')}</div>
                <div>{t('price')}</div>
                <div>{t('actions')}</div>
              </div>
              {data.map((product) => (
                <div key={product.id} className="admin-table-row">
                  <div>{product.name}</div>
                  <div>${product.price}</div>
                  <div className="row-actions">
                    <button className="button secondary" onClick={() => handleEdit(product)}>
                      {t('updateProduct')}
                    </button>
                    <button className="button secondary" onClick={() => deleteMutation.mutate(product.id)}>
                      {t('productDeleted')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
