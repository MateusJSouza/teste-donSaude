import { CircleDashed } from '@phosphor-icons/react'

import { Button } from '../../../../Button'
import { Modal } from '../../../../Modal'

interface NewPartnerAddressConfirmationModalProps {
  open: boolean
  onClose(): void
}

export function NewPartnerAddressConfirmationModal({
  open,
  onClose,
}: NewPartnerAddressConfirmationModalProps) {
  return (
    <Modal open={open} onClose={onClose} isSmall>
      <div className="flex flex-col items-center justify-center">
        <CircleDashed className="h-14 w-14" />

        <p className="mt-6 font-inter text-sm text-tertiary">
          Modal de criação finalizada
        </p>
      </div>

      <div className="flex items-center justify-center gap-3">
        <Button variant="ghost" onClick={onClose} className="w-full">
          Cancelar
        </Button>

        <Button onClick={onClose} className="w-full">
          Confirmar
        </Button>
      </div>
    </Modal>
  )
}
