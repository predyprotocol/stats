import React from 'react'

const PendingIndicator = () => (
  <div className="flex justify-center">
    <div className="animate-ping h-2 w-2 bg-white rounded-full"></div>
    <div className="animate-ping h-2 w-2 bg-white rounded-full mx-4"></div>
    <div className="animate-ping h-2 w-2 bg-white rounded-full"></div>
  </div>
)

export default PendingIndicator
