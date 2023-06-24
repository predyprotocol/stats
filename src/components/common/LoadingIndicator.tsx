import React from 'react'

const LoadingIndicator = () => (
  <div
    className="animate-spin h-full w-full border-4 border-blue-500 rounded-full"
    style={{ borderTopColor: 'transparent' }}
  ></div>
)

export const LoadingIndicatorPt = () => (
  <div className="flex justify-center">
    <div className="animate-ping h-2 w-2 bg-white rounded-full"></div>
    <div className="animate-ping h-2 w-2 bg-white rounded-full mx-4"></div>
    <div className="animate-ping h-2 w-2 bg-white rounded-full"></div>
  </div>
)

export default LoadingIndicator
