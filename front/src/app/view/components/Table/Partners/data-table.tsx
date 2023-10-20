/* eslint-disable prettier/prettier */
import { CaretLeft, CaretRight, MagnifyingGlass } from '@phosphor-icons/react'
import {
  ColumnDef,
  ColumnFiltersState,
  ColumnSort,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useState } from 'react'

import { Button } from '../../Button'
import * as Input from '../../Input'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function PartnerDataTable<TData, TValue>({
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
    getPaginationRowModel: getPaginationRowModel(),
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
      <div className="px-4 pb-2 pt-3">
        {/* Search Partner */}
        <Input.Root className="max-w-sm">
          <Input.Prefix>
            <MagnifyingGlass className="h-5 w-5 text-tertiary" />
          </Input.Prefix>
          <Input.Control
            value={(table.getColumn('name')?.getFilterValue() as string) || ''}
            onChange={(e) => {
              table.getColumn('name')?.setFilterValue(e.target.value)
            }}
            placeholder="Buscar parceiros"
          />
        </Input.Root>
      </div>
      <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
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
              ))
              }
            </tr >
          ))}
        </thead >
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
      </table >

      {/* Pagination */}
      < div className="flex items-center justify-between p-5" >
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-medium text-tertiary">
            Mostrando
          </span>
          <select
            id="pages"
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
            className="block w-12 rounded-full border border-gray-300 bg-gray-50 px-2 py-1 text-[8px] text-content focus:border-blue-500 focus:ring-blue-500"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>

          <span className="text-[10px] font-medium text-tertiary">
            de{' '}
            <strong className="text-content">
              {table.getCoreRowModel().rows.length}
            </strong>{' '}
            resultados
          </span>
        </div>

        <div className="flex items-center">
          <Button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            variant="ghost"
            className="disabled:cursor-not-allowed"
          >
            <CaretLeft className="h-3 w-3 text-content" weight="bold" />
          </Button>
          <p className="text-[10px] font-medium text-tertiary">
            {table.getState().pagination.pageIndex + 1}
          </p>
          <Button
            variant="ghost"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="disabled:cursor-not-allowed"
          >
            <CaretRight className="h-3 w-3 text-content" weight="bold" />
          </Button>
        </div>
      </div >
    </div >
  )
}
