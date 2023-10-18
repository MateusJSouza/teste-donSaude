import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputPrefixProps = ComponentProps<'div'>

export function Prefix(props: InputPrefixProps) {
  return <div {...props} />
}

type InputControlProps = ComponentProps<'input'>

export function Control(props: InputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
      {...props}
    />
  )
}

type InputRootProps = ComponentProps<'div'> & {
  rounded?: boolean
}

export function Root(props: InputRootProps) {
  const { rounded, className, ...rest } = props

  return (
    <div
      className={twMerge(
        'flex w-full items-center gap-2 rounded-full border border-zinc-300 px-3 py-2 font-inter text-sm leading-6 text-tertiary',
        rounded && 'rounded-xl',
        className,
      )}
      {...rest}
    />
  )
}
