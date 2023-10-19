import {
  ArrowsDownUp,
  ClipboardText,
  PencilSimpleLine,
  Trash,
} from '@phosphor-icons/react'
import { ColumnDef } from '@tanstack/react-table'

import { Address } from '../../../../../mocks/address'
import { formatPhone } from '../../../../utils/formatPhone'

export const columns: ColumnDef<Address>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <button
        type="button"
        className="flex items-center gap-2"
        onClick={() => {
          column.toggleSorting(column.getIsSorted() === 'asc')
        }}
      >
        <span className="text-[10px] font-medium">Organização</span>
        <ArrowsDownUp className="h-3 w-3" />
      </button>
    ),
    cell: ({ row }) => <span>{row.original.name}</span>,
  },
  {
    accessorKey: 'address',
    header: ({ column }) => (
      <button
        type="button"
        className="flex items-center gap-2"
        onClick={() => {
          column.toggleSorting(column.getIsSorted() === 'asc')
        }}
      >
        <span className="text-[10px] font-medium">Nome</span>
        <ArrowsDownUp className="h-3 w-3" />
      </button>
    ),
    cell: ({ row }) => (
      <div className="flex flex-col items-start justify-start">
        <p className="cursor-pointer text-[10px] font-medium text-secondary">
          {row.original.address}
        </p>
      </div>
    ),
  },
  {
    accessorKey: 'cellphone',
    header: () => <span className="text-[10px] font-medium">Telefones</span>,
    cell: ({ row }) => <p>{formatPhone(row.original.cellphone)}</p>,
  },
  {
    accessorKey: 'employee',
    header: () => <span className="text-[10px] font-medium">Colaborador</span>,
    cell: ({ row }) => <p>{row.original.employee}</p>,
  },
  {
    accessorKey: 'date_of_registration',
    header: () => (
      <span className="text-[10px] font-medium">Data de cadastro</span>
    ),
    cell: ({ row }) => <p>{row.original.date_of_registration}</p>,
  },
  {
    accessorKey: 'actions',
    header: () => <span className="text-[10px] font-medium">Ações</span>,
    cell: () => {
      return (
        <div className="flex gap-3">
          <Trash className="h-4 w-4 cursor-pointer text-secondary" />
          <PencilSimpleLine className="h-4 w-4 cursor-pointer text-secondary" />
          <ClipboardText className="h-4 w-4 cursor-pointer text-secondary" />
        </div>
      )
    },
  },
]
