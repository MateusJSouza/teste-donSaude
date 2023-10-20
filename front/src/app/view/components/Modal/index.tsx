import * as RdxDialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'

import { cn } from '../../../utils/cn'

interface ModalProps {
  className?: string
  open: boolean
  children: ReactNode
  onClose?(): void
  isSmall?: boolean
}

export function Modal({
  className,
  open,
  onClose,
  isSmall,
  children,
}: ModalProps) {
  return (
    <RdxDialog.Root open={open} onOpenChange={onClose}>
      <RdxDialog.Portal>
        <RdxDialog.Overlay
          className={cn(
            'fixed inset-0 z-50 bg-black/80',
            'data-[state=open]:animate-overlay-show',
            className,
          )}
        />

        <RdxDialog.Content
          className={cn(
            'shadow-[0px_11px_20px_0px_rgba(0, 0, 0, 0.10)] fixed left-1/2 top-1/2 z-[51] w-full max-w-[775px] -translate-x-1/2 -translate-y-1/2 space-y-10 rounded-2xl bg-white p-6 outline-none',
            'data-[state=open]:animate-content-show',
            isSmall && 'max-w-[360px]',
            className,
          )}
        >
          {children}
        </RdxDialog.Content>
      </RdxDialog.Portal>
    </RdxDialog.Root>
  )
}
