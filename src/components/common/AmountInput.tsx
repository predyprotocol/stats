import React, { useEffect, useState } from 'react'
import { useDebounce } from 'react-use'
import { roundDigit } from '../../utils/number'

type Props = {
  min: number
  amount: number
  onChange: (amount: number) => void
}

const AmountInput = ({ amount, min, onChange }: Props) => {
  const [value, setValue] = useState(amount.toString())

  useDebounce(
    () => {
      const numValue = Number(value)

      if (numValue !== undefined && !Number.isNaN(numValue)) {
        onChange(roundDigit(numValue, 2))
      }
    },
    500,
    [value]
  )

  useEffect(() => {
    setValue(amount.toString())
  }, [amount])

  useEffect(() => {
    if (amount < min) {
      setValue(min.toString())
    }
  }, [amount, min])

  const handler = (value: string) => {
    setValue(value)
  }

  return (
    <input
      autoComplete={'off'}
      type={'number'}
      value={value}
      step={'0.02'}
      onChange={e => handler(e.target.value)}
      onBlur={e => handler(e.target.value)}
      className="w-full h-full bg-[#00000000] rounded text-right"
    />
  )
}

export default AmountInput
