import { ButtonHTMLAttributes } from 'react'
export interface TypeButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean
}

export default function Button({
  children,
  secondary,
  className,
  ...rest
}: TypeButton) {
  return (
    <button
      {...rest}
      type={rest.type || 'button'}
      className={`${
        secondary
          ? 'bg-white text-setromec-blue-1'
          : 'bg-setromec-blue-1 text-white'
      } hover:opacity-95 font-normal h-14 p-5 rounded-lg leading-5 ${className}`}
    >
      {children}
    </button>
  )
}
