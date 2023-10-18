import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: [
    'flex items-center justify-center gap-2 py-2 px-4 border-transparent rounded-full font-semibold leading-5 text-sm',
  ],

  variants: {
    variant: {
      primary: 'bg-primary rounded-full text-white',
      secondary: 'bg-primary-light text-primary border-transparent',
      ghost: 'bg-transparent text-secondary',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      type="button"
      className={button({ variant, className })}
    />
  )
}
