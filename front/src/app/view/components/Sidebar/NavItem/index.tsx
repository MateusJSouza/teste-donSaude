import { CaretDown } from '@phosphor-icons/react'
import { ElementType } from 'react'

interface NavItemProps {
  title: string
  icon: ElementType
  isSelect?: boolean
}

export function NavItem({ title, isSelect, icon: Icon }: NavItemProps) {
  return (
    <a
      href="#"
      className="hover:bg-razzmatazz-700 group flex w-full items-center gap-3 rounded-2xl px-4 py-2 transition-colors"
    >
      <Icon className="h-5 w-5 text-zinc-500 group-hover:text-white" />
      <span className="text-xs font-medium text-zinc-500 transition-colors group-hover:font-semibold group-hover:text-white">
        {title}
      </span>
      {isSelect && (
        <CaretDown
          size={10}
          className="text-zinc-500 transition-colors group-hover:text-white"
        />
      )}
    </a>
  )
}
