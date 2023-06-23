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

export const TabList = ({ children, onSelect }: Props) => {
  return (
    <ul
      className="flex items-center justify-start space-x-4 text-sm font-semibold"
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

export const Tab = ({ children, tabId, selected }: TabProps) => {
  return (
    <li
      className={`rounded-xl my-2 py-2 px-4 cursor-pointer ${
        selected ? 'bg-primary' : ''
      }`}
      tabIndex={tabId}
    >
      {children}
    </li>
  )
}
