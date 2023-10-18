import * as Select from '@radix-ui/react-select'
import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export interface ItemTextProps extends ComponentProps<typeof Select.ItemText> {
  children: ReactNode
  isSmall?: boolean
}

export function ItemText({ children, isSmall }: ItemTextProps) {
  return (
    <Select.ItemText asChild>
      <span
        className={twMerge(
          'flex items-center gap-2 text-left font-inter leading-5 text-black',
          isSmall && 'text-[8px]',
        )}
      >
        {children}
      </span>
    </Select.ItemText>
  )
}
