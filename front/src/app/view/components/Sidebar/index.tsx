import {
  ChartPie,
  GearSix,
  IdentificationBadge,
  User,
  UsersFour,
  Wallet,
} from '@phosphor-icons/react'

import { IconFooter } from '../icons/IconFooter'
import { LogoIcon } from '../icons/LogoIcon'

import { NavItem } from './NavItem'

export function Sidebar() {
  return (
    <aside className="sticky top-0 flex max-h-[100vh] flex-col bg-white px-6 py-[26px]">
      <div className="flex items-center justify-center">
        <LogoIcon />
      </div>

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
    </aside>
  )
}
