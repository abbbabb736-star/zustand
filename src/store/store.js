import { create } from 'zustand'

const getStoredTheme = () => {
  if (typeof window === 'undefined') return 'light'
  return window.localStorage.getItem('nike-theme') || 'light'
}

const applyTheme = (theme) => {
  if (typeof document !== 'undefined') {
    document.documentElement.dataset.theme = theme
  }
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('nike-theme', theme)
  }
}

const initialTheme = getStoredTheme()
applyTheme(initialTheme)

export const useAppStore = create((set) => ({
  isAdmin: false,
  cartItems: [],
  orders: [],
  theme: initialTheme,

  login: () => set({ isAdmin: true }),
  logout: () => set({ isAdmin: false }),

  addToCart: (payload) =>
    set((state) => {
      const existing = state.cartItems.find((item) => item.id === payload.id)
      if (existing) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === payload.id ? { ...item, quantity: item.quantity + payload.quantity } : item,
          ),
        }
      }
      return { cartItems: [...state.cartItems, { ...payload }] }
    }),
  removeFromCart: (id) =>
    set((state) => ({ cartItems: state.cartItems.filter((item) => item.id !== id) })),
  updateQuantity: ({ id, quantity }) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)),
    })),
  clearCart: () => set({ cartItems: [] }),

  addOrder: (payload) =>
    set((state) => ({
      orders: [
        {
          id: String(Date.now()),
          status: 'Pending',
          createdAt: new Date().toISOString(),
          ...payload,
        },
        ...state.orders,
      ],
    })),
  cancelOrder: (id) =>
    set((state) => ({
      orders: state.orders.map((order) =>
        order.id === id ? { ...order, status: 'Cancelled' } : order,
      ),
    })),
  deliverOrder: (id) =>
    set((state) => ({
      orders: state.orders.map((order) =>
        order.id === id ? { ...order, status: 'Delivered' } : order,
      ),
    })),

  toggleTheme: () =>
    set((state) => {
      const nextTheme = state.theme === 'dark' ? 'light' : 'dark'
      applyTheme(nextTheme)
      return { theme: nextTheme }
    }),
}))
