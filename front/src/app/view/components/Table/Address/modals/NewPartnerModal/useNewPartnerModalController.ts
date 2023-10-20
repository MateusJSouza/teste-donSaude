import { useCallback, useState } from 'react'

export function useNewPartnerModalController() {
  const [isNewPartnerModalOpen, setIsNewPartnerModalOpen] = useState(false)

  const openNewPartnerModal = useCallback(() => {
    setIsNewPartnerModalOpen(true)
  }, [])

  const closeNewPartnerModal = useCallback(() => {
    setIsNewPartnerModalOpen(false)
  }, [])

  return {
    isNewPartnerModalOpen,
    openNewPartnerModal,
    closeNewPartnerModal,
  }
}
