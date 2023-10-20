import { X } from '@phosphor-icons/react'

import { Button } from '../../../../Button'
import * as Input from '../../../../Input'
import { Label } from '../../../../Label'
import { Modal } from '../../../../Modal'

interface NewPartnerModalProps {
  open: boolean
  onClose(): void
}

export function NewPartnerModal({ open, onClose }: NewPartnerModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <header className="flex items-center justify-between">
        <p className="font-medium text-content">Novo endereço</p>

        <X className="h-5 w-5 cursor-pointer text-content" onClick={onClose} />
      </header>

      <form className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <Label>CEP</Label>
          <Input.Root rounded>
            <Input.Control placeholder="Digite seu CEP" />
          </Input.Root>
        </div>

        <div className="flex flex-col">
          <Label>Rua</Label>
          <Input.Root rounded>
            <Input.Control placeholder="Ex: Rua São Luís" />
          </Input.Root>
        </div>

        <div className="flex flex-col">
          <Label>Número</Label>
          <Input.Root rounded>
            <Input.Control placeholder="Ex: 123" />
          </Input.Root>
        </div>

        <div className="flex flex-col">
          <Label>Bairro</Label>
          <Input.Root rounded>
            <Input.Control placeholder="Ex: José Geraldo" />
          </Input.Root>
        </div>

        <div className="col-span-2 flex flex-col sm:col-span-1">
          <Label>Complemento</Label>
          <Input.Root rounded>
            <Input.Control placeholder="Digite o complemento" />
          </Input.Root>
        </div>

        <div className="col-span-2 flex items-center justify-end gap-3 pt-6">
          <Button variant="ghost" className="px-20 py-[10px]" onClick={onClose}>
            Cancelar
          </Button>

          <Button className="hover:bg-razzmatazz-900 px-[94px] py-[10px] transition-colors">
            Salvar
          </Button>
        </div>
      </form>
    </Modal>
  )
}
