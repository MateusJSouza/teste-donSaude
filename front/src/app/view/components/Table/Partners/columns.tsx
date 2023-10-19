import { ArrowsDownUp } from '@phosphor-icons/react'
import { ColumnDef } from '@tanstack/react-table'

import { Partner } from '../../../../../mocks/partner'
import { formatIdentity } from '../../../../utils/formatIdentity'
import { formatPhone } from '../../../../utils/formatPhone'

export const columns: ColumnDef<Partner>[] = [
  {
    accessorKey: 'organization',
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
    cell: ({ row }) => <span>{row.original.organization}</span>,
  },
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
        <span className="text-[10px] font-medium">Nome</span>
        <ArrowsDownUp className="h-3 w-3" />
      </button>
    ),
    cell: ({ row }) => (
      <div className="flex flex-col items-start justify-start">
        <p className="text-[10px] font-medium text-content">{`${row.original.name}`}</p>
        <span className="text-[7px] font-medium text-secondary">{`${formatIdentity(
          row.original.identityNumber,
        )}`}</span>
      </div>
    ),
  },
  {
    accessorKey: 'cellphone',
    header: () => <span className="text-[10px] font-medium">Telefones</span>,
    cell: ({ row }) => <p>{formatPhone(row.original.cellphone)}</p>,
  },
  {
    accessorKey: 'oldCode',
    header: () => (
      <span className="text-[10px] font-medium">Código antigo</span>
    ),
  },
  {
    accessorKey: 'preferredUnit',
    header: () => (
      <span className="text-[10px] font-medium">Unidade preferida</span>
    ),
  },
  {
    accessorKey: 'actions',
    header: () => <span className="text-[10px] font-medium">Ações</span>,
  },
]
