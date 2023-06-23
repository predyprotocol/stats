import React from 'react'
import styled from 'styled-components'

type Props = {
  isPro: boolean
  onChange: (isPro: boolean) => void
}

export const ModeSwitch = ({ isPro, onChange }: Props) => {
  return (
    <SwitchLabel className="rounded-lg relative text-white">
      <SwitchItem
        className={`flex justify-center items-center rounded-lg absolute inset-y-0 left-1 cursor-pointer ${
          isPro ? '' : 'final-gradient'
        }`}
        onClick={() => onChange(false)}
      >
        <span className="text-center my-auto">Lite</span>
      </SwitchItem>
      <SwitchItem
        className={`flex justify-center items-center rounded-lg absolute inset-y-0 right-1 cursor-pointer ${
          isPro ? 'final-gradient' : ''
        }`}
        onClick={() => onChange(true)}
      >
        Pro
      </SwitchItem>
    </SwitchLabel>
  )
}

const SwitchLabel = styled.div`
  width: 95px;
  height: 40px;
  background-color: #1b1f26;
`

const SwitchItem = styled.div`
  width: 43px;
  height: 30px;
  margin-top: 5px;
`
