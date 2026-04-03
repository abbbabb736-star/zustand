import { configureStore, createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: { isAdmin: false },
  reducers: {
    login(state) {
      state.isAdmin = true
    },
    logout(state) {
      state.isAdmin = false
    },
  },
})

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addToCart(state, action) {
      const existing = state.items.find((item) => item.id === action.payload.id)
      if (existing) {
        existing.quantity += action.payload.quantity
      } else {
        state.items.push({ ...action.payload })
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    updateQuantity(state, action) {
      const item = state.items.find((entry) => entry.id === action.payload.id)
      if (item) {
        item.quantity = action.payload.quantity
      }
    },
    clearCart(state) {
      state.items = []
    },
  },
})

const ordersSlice = createSlice({
  name: 'orders',
  initialState: { items: [] },
  reducers: {
    addOrder(state, action) {
      state.items.unshift({
        id: String(Date.now()),
        status: 'Pending',
        createdAt: new Date().toISOString(),
        ...action.payload,
      })
    },
    cancelOrder(state, action) {
      const order = state.items.find((item) => item.id === action.payload)
      if (order) {
        order.status = 'Cancelled'
      }
    },
    deliverOrder(state, action) {
      const order = state.items.find((item) => item.id === action.payload)
      if (order) {
        order.status = 'Delivered'
      }
    },
  },
})

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    orders: ordersSlice.reducer,
  },
})

export const authActions = authSlice.actions
export const cartActions = cartSlice.actions
export const ordersActions = ordersSlice.actions
