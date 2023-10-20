import { useCallback, useState } from 'react'

export function useNewPartnerAddressConfirmationModalController() {
  const [isNewAddressModalOpen, setIsNewAddressModalOpen] = useState(false)

  const openNewAddressConfirmationModal = useCallback(() => {
    setIsNewAddressModalOpen(true)
  }, [])

  const closeNewAddressConfirmationModal = useCallback(() => {
    setIsNewAddressModalOpen(false)
  }, [])

  return {
    isNewAddressModalOpen,
    openNewAddressConfirmationModal,
    closeNewAddressConfirmationModal,
  }
}
