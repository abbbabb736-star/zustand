import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function ShopLayout() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="app-shell" tabIndex={-1}>
        <Outlet />
      </main>
    </>
  )
}
