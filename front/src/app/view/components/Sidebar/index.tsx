import {
  ChartPie,
  GearSix,
  IdentificationBadge,
  List,
  User,
  UsersFour,
  Wallet,
} from '@phosphor-icons/react'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Link } from 'react-router-dom'

import { Button } from '../Button'
import { IconFooter } from '../icons/IconFooter'
import { LogoIcon } from '../icons/LogoIcon'

import { NavItem } from './NavItem'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col bg-white p-4 data-[state=open]:bottom-0 data-[state=open]:h-screen md:sticky lg:relative lg:right-auto lg:px-6 lg:py-[26px] lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:h-screen">
      <Link to="/" className="flex items-center justify-between px-4">
        <LogoIcon />
        <Collapsible.Trigger asChild className="md:hidden lg:hidden">
          <Button variant="ghost">
            <List className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </Link>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden md:data-[state=closed]:flex"
      >
        <div className="mt-14 flex flex-col gap-6">
          <NavItem icon={ChartPie} title="Indicadores" />
          <NavItem icon={Wallet} title="Atendimento" />
          <NavItem icon={IdentificationBadge} title="Financeiro" />
          <NavItem icon={User} title="Usuários" />
          <NavItem icon={UsersFour} title="Parceiros" />
          <NavItem icon={GearSix} title="Configurações" isSelect />
        </div>

        <div className="mt-auto flex items-center justify-start gap-2 rounded-full bg-[#E6EEF4] p-1">
          <IconFooter />
          <div className="flex flex-col">
            <p className="text-[10px] font-bold text-[rgba(18,25,41,0.56)]">
              Ibiporã
            </p>
            <span className="text-[8px] text-[rgba(18,25,41,0.56)]">
              Gustavo Borges
            </span>
          </div>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
