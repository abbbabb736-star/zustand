import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ProtectedRoute({ children }) {
  const isAdmin = useSelector((state) => state.auth.isAdmin)
  return isAdmin ? children : <Navigate to="/admin/login" replace />
}
