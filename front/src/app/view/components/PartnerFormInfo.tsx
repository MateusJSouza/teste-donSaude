import { Check } from '@phosphor-icons/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { cn } from '../../utils/cn'

import { NewPartnerForm } from './NewPartnerForm'

export function PartnerFormInfo() {
  const [isInfoEnabled, setIsInfoEnabled] = useState<boolean>(true)
  const [isAddressEnabled, setIsAddressEnabled] = useState<boolean>(false)

  function handleInfoClick() {
    setIsInfoEnabled(true)
    setIsAddressEnabled(false)
  }

  function handleAddressClick() {
    setIsInfoEnabled(false)
    setIsAddressEnabled(true)
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 rounded-2xl border p-1">
        <button
          type="button"
          disabled={!isInfoEnabled}
          className={cn(
            'flex items-center justify-center gap-1 rounded-full px-3 py-2',
            isInfoEnabled ? 'bg-primary-light' : 'bg-transparent ',
          )}
          onClick={handleInfoClick}
        >
          <Link className="flex gap-2" to="/info">
            <div
              className={cn(
                'flex h-4 w-4 items-center justify-center rounded-full',
                isInfoEnabled ? 'bg-primary' : 'bg-success',
              )}
            >
              {isInfoEnabled ? (
                <p className="text-[8px] font-medium text-white">1</p>
              ) : (
                <Check size={6} />
              )}
            </div>
            <span
              className={cn(
                'text-[10px] font-medium leading-normal',
                isInfoEnabled ? 'text-primary' : 'text-tertiary',
              )}
            >
              Informações
            </span>
          </Link>
        </button>
        <button
          type="button"
          disabled={!isAddressEnabled}
          className={cn(
            'flex items-center justify-center gap-1 rounded-full px-3 py-2',
            isAddressEnabled ? 'bg-primary-light' : 'bg-transparent',
          )}
          onClick={handleAddressClick}
        >
          <Link className="flex gap-2" to="/info">
            <div
              className={cn(
                'flex h-4 w-4 items-center justify-center rounded-full',
                isAddressEnabled ? 'bg-primary' : 'bg-zinc-300',
              )}
            >
              <p
                className={cn(
                  'text-[8px] font-medium',
                  isAddressEnabled ? 'text-white' : 'text-content',
                )}
              >
                1
              </p>
            </div>
            <span
              className={cn(
                'text-[10px] font-medium leading-normal',
                isAddressEnabled ? 'text-primary' : 'text-tertiary',
              )}
            >
              Endereços
            </span>
          </Link>
        </button>
      </div>

      <NewPartnerForm />
    </div>
  )
}
