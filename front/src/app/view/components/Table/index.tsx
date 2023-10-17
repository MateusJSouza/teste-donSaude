/* eslint-disable prettier/prettier */
import {
  ColumnDef,
  ColumnSort,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useMemo, useState } from 'react'

import { mockData } from '../../../../mocks/mockData'
import { TableTypes } from '../../../types/TableTypes'
import { formatIdentity } from '../../../utils/formatIdentity'
import { formatPhone } from '../../../utils/formatPhone'

export function Table() {
  const columns = useMemo<ColumnDef<TableTypes>[]>(
    () => [
      {
        accessorKey: 'organization',
        header: () => (
          <span className="text-[10px] font-medium">Organização</span>
        ),
        cell: ({ row }) => (
          <span>{row.original.organization}</span>
        )
      },
      {
        accessorKey: 'name',
        header: () => <span className="text-[10px] font-medium">Nome</span>,
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
        header: () => (
          <span className="text-[10px] font-medium">Telefones</span>
        ),
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
    ],
    [],
  )

  const [data, setData] = useState<TableTypes[]>(mockData)
  const [sorting, setSorting] = useState<ColumnSort[]>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  })

  return (
    <div className="overflow-x-auto rounded-2xl">
      <table className="min-w-full divide-y divide-gray-200 bg-white">
        <thead className="border-px border-t">
          {table.getHeaderGroups().map((headerEl) => (
            <tr key={headerEl.id}>
              {headerEl.headers.map((columnEl) => (
                <th
                  key={columnEl.id}
                  colSpan={columnEl.colSpan}
                  className="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500"
                >
                  {columnEl.isPlaceholder
                    ? null
                    : flexRender(
                      columnEl.column.columnDef.header,
                      columnEl.getContext(),
                    )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {table.getRowModel().rows.map((rowEl) => {
            return (
              <tr key={rowEl.id}>
                {rowEl.getVisibleCells().map((cellEl) => (
                  <td
                    key={cellEl.id}
                    className="whitespace-nowrap px-4 py-4 text-[10px] font-medium text-content"
                  >
                    {flexRender(
                      cellEl.column.columnDef.cell,
                      cellEl.getContext(),
                    )}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
