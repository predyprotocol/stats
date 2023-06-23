import React from 'react'

type Props = {
  side: boolean
  onChange: (side: boolean) => void
}

const SideSelector = ({ side, onChange }: Props) => {
  return (
    <button className="w-full rounded-full bg-black3 flex justify-center text-xl font-semibold shadow-sm">
      <div
        className={`w-2/4 px-16 py-2 rounded-full text-green ${
          !side ? 'bg-primary border-[1px] border-white' : ''
        }`}
        onClick={() => {
          onChange(false)
        }}
      >
        <span>Buy</span>
      </div>
      <div
        className={`w-2/4 px-16 py-2 rounded-full text-red ${
          side ? 'bg-primary border-[1px] border-white' : ''
        }`}
        onClick={() => {
          onChange(true)
        }}
      >
        <span>Sell</span>
      </div>
    </button>
  )
}

export default SideSelector
