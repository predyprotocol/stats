import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  onSelect: (tabId: number) => void
}

type TabProps = {
  children?: ReactNode
  tabId: number
  selected?: boolean
}

export const SimpleTabList = ({ children, onSelect }: Props) => {
  return (
    <ul
      className="flex items-center justify-start space-x-4 text-2xl font-normal"
      onClick={(e: any) => {
        if (e.target.tabIndex >= 0) {
          onSelect(e.target.tabIndex)
        }
      }}
    >
      {children}
    </ul>
  )
}

export const SimpleTab = ({ children, tabId, selected }: TabProps) => {
  return (
    <li
      className={`cursor-pointer ${selected ? 'text-white' : 'text-white5'}`}
      tabIndex={tabId}
    >
      {children}
    </li>
  )
}
