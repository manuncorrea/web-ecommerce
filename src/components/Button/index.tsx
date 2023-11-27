import React from 'react';
import { ButtonProps } from "./types";

export function Button({
  children,
  fullWidth = false,
  secondary = false,
  round = false,
  iconStart,
  iconEnd,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`
        ${fullWidth ? 'w-full' : ''}
        ${secondary ? 'bg-white text-black border border-gray-300' : 'bg-teal-400 text-white'}
        ${round ? 'rounded-full' : 'rounded-md'}
        font-semibold
        flex
        items-center
        justify-center
        space-x-2
        px-4
        py-2
        transition
        ease-in-out
        duration-300
        hover:bg-teal-500
        ${props.className || ''}
      `}
    >
      {children}
    </button>
  )
}