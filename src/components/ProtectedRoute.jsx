import { Navigate } from 'react-router-dom'
import { useAppStore } from '../store/store'

export default function ProtectedRoute({ children }) {
  const isAdmin = useAppStore((state) => state.isAdmin)
  return isAdmin ? children : <Navigate to="/admin/login" replace />
}
