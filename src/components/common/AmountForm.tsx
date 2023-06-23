import React, { useEffect, useState } from 'react'
import { roundDigit } from '../../utils/number'

type Props = {
  title: string
  unit?: string
  amount: number
  onChange: (amount: number) => void
}

export const AmountForm = ({ title, unit, amount, onChange }: Props) => {
  const [value, setValue] = useState(amount.toString())

  useEffect(() => {
    setValue(amount.toString())
  }, [amount])

  const handler = (value: string) => {
    setValue(value)

    const numValue = Number(value)

    if (numValue) {
      onChange(roundDigit(numValue, 2))
    }
  }

  return (
    <div className="w-full relative inline-block h-[40px] text-sm font-normal">
      <span className="absolute left-4 top-[10px] text-subtext">{title}</span>
      <input
        autoComplete={'off'}
        type={'number'}
        className={`w-full rounded bg-forth text-right h-full ${
          unit ? 'pr-16' : 'pr-4'
        }`}
        value={value}
        step={'0.01'}
        onChange={e => handler(e.target.value)}
        onBlur={e => handler(e.target.value)}
      />
      {unit ? (
        <span className="absolute right-4 top-[10px] text-subtext">{unit}</span>
      ) : (
        <div />
      )}
    </div>
  )
}
