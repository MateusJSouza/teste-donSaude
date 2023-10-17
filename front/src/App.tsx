import { PlusCircle } from '@phosphor-icons/react'

import { Button } from './app/view/components/Button'
import { Header } from './app/view/components/Header'
import { Sidebar } from './app/view/components/Sidebar'
import { Table } from './app/view/components/Table'

export function App() {
  return (
    <div className="grid min-h-screen grid-cols-app">
      <Sidebar />

      <main className="">
        <Header />

        <div className="rounded-2xl bg-shape-secondary px-12 pb-4 pt-8">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-content">Parceiros</h1>

            <Button>
              <PlusCircle className="h-5 w-5" />
              <span className="font-inter text-sm font-semibold leading-5">
                Adicionar parceiro
              </span>
            </Button>
          </div>

          <Table />
        </div>
      </main>
    </div>
  )
}
