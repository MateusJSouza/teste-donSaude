import { Check } from '@phosphor-icons/react'

import { address } from '../../../../mocks/address'
import { cn } from '../../../utils/cn'
import { columns } from '../Table/Address/columns'
import { AddressDataTable } from '../Table/Address/data-table'

export function PartnerFormAddress() {
  return (
    <div>
      <div className="flex flex-col gap-4 rounded-2xl border p-1 md:grid md:grid-cols-2">
        <button
          type="button"
          className={cn(
            'flex items-center justify-center gap-1 rounded-full bg-transparent px-3 py-2',
          )}
        >
          <div
            className={cn(
              'flex h-4 w-4 items-center justify-center rounded-full bg-success',
            )}
          >
            <Check className="h-2 w-2 text-content" />
          </div>
          <span
            className={cn(
              'text-[10px] font-medium leading-normal text-tertiary',
            )}
          >
            Informações
          </span>
        </button>
        <button
          type="button"
          className={cn(
            'flex items-center justify-center gap-1 rounded-full bg-primary-light px-3 py-2',
          )}
        >
          <div
            className={cn(
              'bg-razzmatazz-700 flex h-4 w-4 items-center justify-center rounded-full',
            )}
          >
            <p className={cn('text-[8px] font-medium text-white')}>1</p>
          </div>
          <span
            className={cn(
              'text-razzmatazz-700 text-[10px] font-medium leading-normal',
            )}
          >
            Endereços
          </span>
        </button>
      </div>

      <AddressDataTable columns={columns} data={address} />
    </div>
  )
}
