import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: [
    'shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04)] flex items-center justify-center gap-2 py-2 px-4 border-transparent rounded-full font-semibold leading-5',
  ],

  variants: {
    variant: {
      primary: 'bg-primary rounded-full text-white',
      secondary: 'bg-primary-light text-primary border-transparent',
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
