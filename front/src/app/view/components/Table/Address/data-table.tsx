/* eslint-disable prettier/prettier */
import { MagnifyingGlass, PlusCircle } from '@phosphor-icons/react'
import {
  ColumnDef,
  ColumnFiltersState,
  ColumnSort,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import { useState } from 'react'

import { Button } from '../../Button'
import * as Input from '../../Input'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function AddressDataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<ColumnSort[]>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
    onColumnFiltersChange: setColumnFilters,
    state: {
      sorting,
      columnFilters,
    },
    onSortingChange: setSorting,
  })

  return (
    <div className="divide-y divide-gray-200 overflow-x-auto rounded-2xl bg-white">
      <div className="px-4 pb-2 pt-3 flex justify-between items-center">
        {/* Search Address */}
        <Input.Root className="max-w-sm">
          <Input.Prefix>
            <MagnifyingGlass className="h-5 w-5 text-tertiary" />
          </Input.Prefix>
          <Input.Control
            value={(table.getColumn('name')?.getFilterValue() as string) || ''}
            onChange={(e) => {
              table.getColumn('name')?.setFilterValue(e.target.value)
            }}
            placeholder="Buscar endereço"
          />
        </Input.Root>

        <Button type="button">
          <PlusCircle className="h-5 w-5" />
          <span className="font-inter text-sm font-semibold leading-5">
            Novo endereço
          </span>
        </Button>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          {table.getHeaderGroups().map((headerEl) => (
            <tr key={headerEl.id}>
              {headerEl.headers.map((columnEl) => (
                <th
                  key={columnEl.id}
                  colSpan={columnEl.colSpan}
                  className="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500"
                  onClick={columnEl.column.getToggleSortingHandler()}
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
