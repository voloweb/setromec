import { ButtonHTMLAttributes } from 'react'
import Loading from '../Loading'
export interface TypeButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean
  loading?: boolean
}

export default function Button({
  children,
  secondary,
  loading = false,
  disabled = false,
  className,
  ...rest
}: TypeButton) {
  return (
    <button
      {...rest}
      type={rest.type || 'button'}
      disabled={disabled || loading}
      className={`${
        secondary
          ? 'bg-white text-setromec-blue-1'
          : 'bg-setromec-blue-1 text-white'
      } hover:opacity-95 font-normal h-14 p-5 rounded-lg leading-5 ${className}`}
    >
      {loading ? <Loading secondary={secondary} /> : children }
    </button>
  )
}
