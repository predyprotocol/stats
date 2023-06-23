import React from 'react'

export const HamburgerMenu = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="p-4 space-y-2 bg-gray-600 rounded shadow" onClick={onClick}>
      <span className="block w-8 h-0.5 bg-white"></span>
      <span className="block w-8 h-0.5 bg-white"></span>
      <span className="block w-8 h-0.5 bg-white"></span>
    </div>
  )
}
