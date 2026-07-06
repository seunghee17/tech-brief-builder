import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

type ButtonProps<TElement extends ElementType = 'button'> = {
  as?: TElement
  children: ReactNode
  variant?: 'primary' | 'secondary'
} & Omit<ComponentPropsWithoutRef<TElement>, 'as' | 'children'>

export function Button<TElement extends ElementType = 'button'>({
  as,
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonProps<TElement>) {
  const Component = as ?? 'button'
  const classes = ['button', `button-${variant}`, className].filter(Boolean).join(' ')

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}
