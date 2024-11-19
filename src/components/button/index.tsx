import React, { ButtonHTMLAttributes } from 'react';
import Loading from '../loading';

export interface TypeButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
  loading?: boolean;
}

const Button = ({
  children,
  secondary,
  loading = false,
  disabled = false,
  className,
  type = 'button',
  ...rest
}: TypeButton) => {
  return (
    <button
      {...rest}
      type={type}
      disabled={disabled || loading}
      className={`
        font-normal h-14 p-5 rounded-lg leading-none
        ${secondary ? 'bg-white text-setromec-blue-1' : 'bg-setromec-blue-1 text-white'}
        ${disabled || loading ? 'cursor-not-allowed opacity-80' : 'hover:opacity-95'}
        ${className}`}
    >
      {loading ? <Loading secondary={secondary} /> : children}
    </button>
  );
};

export default Button;
