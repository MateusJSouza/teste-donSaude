import { CaretLeft } from '@phosphor-icons/react'
import { Link, Outlet } from 'react-router-dom'

export function PartnerLayoutForm() {
  return (
    <>
      <div className="mb-8 flex items-center gap-1">
        <Link to="/">
          <CaretLeft className="h-5 w-5 cursor-pointer" />
        </Link>
        <h1 className="text-2xl font-bold text-content">Novo parceiro</h1>
      </div>

      <main className="rounded-2xl bg-white p-7">
        <Outlet />
      </main>
    </>
  )
}
