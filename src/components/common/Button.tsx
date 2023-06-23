import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  disabled: boolean
  onClick: () => void
}

export const PrimaryButton = ({ children, disabled, onClick }: Props) => {
  return (
    <button
      className={`w-full h-full ${
        !disabled ? 'bg-primary' : 'disabled:bg-third'
      } text-lg font-semibold leading-6 rounded-full border-[1px] border-white`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
