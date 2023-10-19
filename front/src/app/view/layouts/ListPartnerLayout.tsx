import { Outlet } from 'react-router-dom'

import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

export function ListPartnerLayout() {
  return (
    <div className="min-h-screen md:grid md:grid-cols-app">
      <Sidebar />

      <main className="flex flex-col">
        <Header />

        <div className="flex-grow rounded-2xl bg-shape-secondary px-12 pb-4 pt-8 sm:px-6 sm:pt-6">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
