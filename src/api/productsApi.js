const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

let products = [
  {
    id: '1',
    name: 'Nike Air Max 97',
    category: 'Running',
    price: 169,
    rating: 4.8,
    image: 'https://via.placeholder.com/400x400?text=Nike+Air+Max+97',
    description:
      'Iconic cushioning with a sleek silhouette. Perfect for everyday wear and running.',
    colors: ['Black', 'White', 'Silver'],
    sizes: [38, 39, 40, 41, 42],
  },
  {
    id: '2',
    name: 'Nike Air Force 1',
    category: 'Lifestyle',
    price: 119,
    rating: 4.7,
    image: 'https://via.placeholder.com/400x400?text=Nike+Air+Force+1',
    description:
      'Classic court style with premium leather and durable comfort for daily looks.',
    colors: ['White', 'Black'],
    sizes: [38, 39, 40, 41, 42, 43],
  },
  {
    id: '3',
    name: 'Nike React Infinity',
    category: 'Training',
    price: 149,
    rating: 4.6,
    image: 'https://via.placeholder.com/400x400?text=Nike+React+Infinity',
    description:
      'Responsive cushioning and support for long runs and intense training sessions.',
    colors: ['Blue', 'Grey'],
    sizes: [38, 39, 40, 41, 42, 43],
  },
  {
    id: '4',
    name: 'Nike ZoomX Vaporfly',
    category: 'Performance',
    price: 249,
    rating: 4.9,
    image: 'https://via.placeholder.com/400x400?text=Nike+ZoomX+Vaporfly',
    description:
      'Elite marathon performance with feather-light speed and advanced propulsion.',
    colors: ['Orange', 'White'],
    sizes: [39, 40, 41, 42, 43, 44],
  },
  {
    id: '5',
    name: 'Nike Pegasus Trail',
    category: 'Trail',
    price: 139,
    rating: 4.5,
    image: 'https://via.placeholder.com/400x400?text=Nike+Pegasus+Trail',
    description:
      'Trail-ready grip and responsive cushioning for off-road adventures.',
    colors: ['Green', 'Black'],
    sizes: [38, 39, 40, 41, 42, 43],
  },
  {
    id: '6',
    name: 'Nike SB Dunk Low',
    category: 'Skate',
    price: 109,
    rating: 4.4,
    image: 'https://via.placeholder.com/400x400?text=Nike+SB+Dunk+Low',
    description:
      'Skate-ready style with padded comfort and modern colorways.',
    colors: ['Blue', 'Red'],
    sizes: [38, 39, 40, 41, 42, 43],
  },
  {
    id: '7',
    name: 'Nike SB Blazer',
    category: 'Skate',
    price: 99,
    rating: 4.3,
    image: 'https://via.placeholder.com/400x400?text=Nike+SB+Blazer',
    description:
      'Retro skate silhouette with cushioned support and classic style.',
    colors: ['White', 'Red'],
    sizes: [38, 39, 40, 41, 42, 43],
  },
  {
    id: '8',
    name: 'Nike Free Run',
    category: 'Running',
    price: 129,
    rating: 4.4,
    image: 'https://via.placeholder.com/400x400?text=Nike+Free+Run',
    description:
      'Natural motion feel with lightweight flexibility for gym and street.',
    colors: ['Black', 'Pink'],
    sizes: [38, 39, 40, 41, 42, 43],
  },
  {
    id: '9',
    name: 'Nike Shox',
    category: 'Lifestyle',
    price: 159,
    rating: 4.2,
    image: 'https://via.placeholder.com/400x400?text=Nike+Shox',
    description:
      'Iconic spring cushioning and bold styling for street-ready days.',
    colors: ['Silver', 'Black'],
    sizes: [38, 39, 40, 41, 42, 43],
  },
  {
    id: '10',
    name: 'Nike Dunk High',
    category: 'Lifestyle',
    price: 129,
    rating: 4.6,
    image: 'https://via.placeholder.com/400x400?text=Nike+Dunk+High',
    description:
      'Basketball heritage with premium leather and timeless looks.',
    colors: ['White', 'Blue'],
    sizes: [38, 39, 40, 41, 42, 43],
  },
]

export async function fetchProducts(page = 1, search = '', pageSize = 3) {
  const MAX_ITEMS = 18
  const skip = (page - 1) * pageSize
  const query = search.trim()

  if (!query && skip >= MAX_ITEMS) {
    return {
      items: [],
      total: MAX_ITEMS,
      page,
      pageSize,
    }
  }

  const url = query
    ? `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}&limit=${pageSize}&skip=${skip}`
    : `https://dummyjson.com/products?limit=${pageSize}&skip=${skip}`

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Failed to load products')
  }

  const data = await response.json()
  const items = data.products.map((product) => ({
    id: String(product.id),
    name: product.title,
    image: product.thumbnail,
    category: product.category,
    price: product.price,
    description: product.description,
    rating: product.rating,
    brand: product.brand,
    stock: product.stock,
    colors: [product.brand, product.category],
    sizes: [38, 39, 40, 41, 42, 43],
  }))

  const total = query ? data.total : Math.min(data.total, MAX_ITEMS)

  return {
    items,
    total,
    page,
    pageSize,
  }
}

export async function fetchProductById(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`)
  if (!response.ok) {
    throw new Error('Product not found')
  }

  const product = await response.json()
  return {
    id: String(product.id),
    name: product.title,
    image: product.thumbnail,
    category: product.category,
    price: product.price,
    description: product.description,
    rating: product.rating,
    brand: product.brand,
    stock: product.stock,
    colors: [product.brand, product.category],
    sizes: [38, 39, 40, 41, 42, 43],
  }
}

export async function createProduct(product) {
  await delay(300)
  const nextId = String(products.length + 1)
  const newProduct = {
    id: nextId,
    rating: 4.5,
    image: 'https://via.placeholder.com/400x400?text=Nike+New+Product',
    ...product,
  }
  products.unshift(newProduct)
  return newProduct
}

export async function updateProduct(id, updates) {
  await delay(300)
  products = products.map((item) =>
    item.id === id ? { ...item, ...updates } : item,
  )
  return products.find((item) => item.id === id)
}

export async function deleteProduct(id) {
  await delay(300)
  products = products.filter((item) => item.id !== id)
  return id
}

export async function allProducts() {
  await delay(200)
  return products
}
