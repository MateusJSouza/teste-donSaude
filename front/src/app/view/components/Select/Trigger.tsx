import { CaretDown } from '@phosphor-icons/react'
import * as Select from '@radix-ui/react-select'
import { ComponentProps } from 'react'

import { cn } from '../../../utils/cn'

export type TriggerProps = ComponentProps<typeof Select.Trigger> & {
  isSmall?: boolean
  className?: string
}

export function Trigger({
  children,
  className,
  isSmall,
  ...props
}: TriggerProps) {
  return (
    <Select.Trigger
      {...props}
      className={cn(
        'flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 outline-none',
        'text-sm data-[placeholder]:text-zinc-600',
        isSmall && 'w-5 px-2 py-1 text-[8px]',
        className,
      )}
    >
      {children}

      <Select.Icon>
        <CaretDown
          className={cn('h-5 w-5 text-zinc-500', isSmall && 'h-[6px] w-[6px]')}
        />
      </Select.Icon>
    </Select.Trigger>
  )
}
