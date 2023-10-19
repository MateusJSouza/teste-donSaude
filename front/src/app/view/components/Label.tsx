import { ComponentProps, ReactNode } from 'react'

import { cn } from '../../utils/cn'

export type LabelProps = ComponentProps<'label'> & {
  children: ReactNode
  className?: string
}

export function Label({ children, className, ...props }: LabelProps) {
  return (
    <label
      className={cn('text-sm font-medium leading-5 text-secondary', className)}
      {...props}
    >
      {children}
    </label>
  )
}
