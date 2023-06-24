import React from 'react'
import { useIsSupportedChain } from '../../hooks/network'

const NetworkErrorLabel = () => {
  const supported = useIsSupportedChain()
  if (supported) return null

  return <div>This network is not supported</div>
}

export default NetworkErrorLabel
