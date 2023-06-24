import React, { ReactNode, useState } from 'react'

type Props = {
  titleContent: ReactNode
  children: ReactNode
}

export const BasePopup = ({ titleContent, children }: Props) => {
  const [isEnteringTitle, setIsEnteringTitle] = useState(false)
  const [isEnteringContent, setIsEnteringContent] = useState(false)

  return (
    <div>
      <div
        onMouseEnter={() => {
          setIsEnteringTitle(true)
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            setIsEnteringTitle(false)
          }, 200)
        }}
      >
        {titleContent}
      </div>
      <BasePopupContent
        isShowing={isEnteringTitle || isEnteringContent}
        onMouseEnter={() => {
          setIsEnteringContent(true)
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            setIsEnteringContent(false)
          }, 200)
        }}
      >
        {children}
      </BasePopupContent>
    </div>
  )
}

const BasePopupContent = ({
  children,
  isShowing,
  onMouseEnter,
  onMouseLeave
}: {
  children: ReactNode
  isShowing: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}) => {
  return (
    <div>
      <div
        className={`absolute mt-[2px] w-60 rounded-xl bg-black8 text-sm font-light z-20 pointer-cursor ${
          isShowing ? 'visible' : 'invisible'
        }`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </div>
    </div>
  )
}
