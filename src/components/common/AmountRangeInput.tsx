import React, { useEffect, useState } from 'react'
import { useDebounce } from 'react-use'
import { roundDigit } from '../../utils/number'

type Props = {
  title: string
  max: number
  amount: number
  step?: number
  onChange: (amount: number) => void
}

const AmountRangeInput = ({
  amount,
  max,
  onChange,
  title,
  step = 0.02
}: Props) => {
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

  const handler = (value: string) => {
    setValue(value)
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between gap-2">
        <div>Amount</div>
        <input
          autoComplete={'off'}
          type={'number'}
          value={value}
          step={step}
          onChange={e => handler(e.target.value)}
          onBlur={e => handler(e.target.value)}
          className="w-full h-full bg-[#00000000] text-right text-white5"
        />
        <div>{title}</div>
      </div>
      <div>
        <input
          type={'range'}
          value={value}
          step={step}
          min={0}
          max={max}
          onChange={e => handler(e.target.value)}
          onBlur={e => handler(e.target.value)}
          className="w-full h-2 bg-black5 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-[#8109B7]"
        />
      </div>
    </div>
  )
}

export default AmountRangeInput
