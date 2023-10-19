import { Check } from '@phosphor-icons/react'

import { address } from '../../../../mocks/address'
import { cn } from '../../../utils/cn'
import { columns } from '../Table/Address/columns'
import { AddressDataTable } from '../Table/Address/data-table'

export function PartnerFormAddress() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 rounded-2xl border p-1">
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
              'flex h-4 w-4 items-center justify-center rounded-full bg-primary',
            )}
          >
            <p className={cn('text-[8px] font-medium text-white')}>1</p>
          </div>
          <span
            className={cn(
              'text-[10px] font-medium leading-normal text-primary',
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
