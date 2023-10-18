import { PlusCircle } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import { Button } from './Button'
import { Table } from './Table'

export function ListPartners() {
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-content">Parceiros</h1>

        <Button type="button">
          <Link className="flex gap-2" to="/new">
            <PlusCircle className="h-5 w-5" />
            <span className="font-inter text-sm font-semibold leading-5">
              Adicionar parceiro
            </span>
          </Link>
        </Button>
      </div>

      <Table />
    </>
  )
}
