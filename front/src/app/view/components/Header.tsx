import {
  BellSimple,
  MagnifyingGlass,
  PlusCircle,
  Star,
  User,
} from '@phosphor-icons/react'

import * as Input from '../components/Input'

import { Button } from './Button'

export function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-12 py-6">
      <div className="flex items-center justify-start gap-4">
        <Button type="button" variant="secondary" className="px-4 py-[10px]">
          <PlusCircle className="h-5 w-5" />
          <span className="w-32 font-inter text-sm font-semibold leading-5">
            Novo atendimento
          </span>
        </Button>

        <Input.Root>
          <Input.Prefix>
            <MagnifyingGlass className="h-5 w-5 text-tertiary" />
          </Input.Prefix>
          <Input.Control placeholder="Buscar usuário" />
        </Input.Root>
      </div>

      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center gap-8">
          <Star className="cursor-pointer" />

          <BellSimple className="cursor-pointer" />
        </div>

        <div className="h-8 w-px bg-zinc-200" />

        <div className="flex cursor-pointer items-center justify-center rounded-full border border-transparent bg-primary-light p-2">
          <User className="text-primary" />
        </div>
      </div>
    </header>
  )
}
