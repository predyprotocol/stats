import { useState, useEffect } from 'react'
import { hooks, metaMask } from '../connectors'
import { NETWORK_PARAMS } from '../constants'

const { useIsActive, useChainId } = hooks

export function useEagerConnect() {
  const isActive = useIsActive()
  const chainId = useChainId()

  const [tried, setTried] = useState(false)

  useEffect(() => {
    if (chainId && localStorage.getItem('predy.connected') !== null) {
      metaMask.activate(NETWORK_PARAMS[chainId]).catch(error => {
        console.error('Failed to activate after chain changed', error)
      })
    }
  }, [chainId]) // eslint-disable-line

  useEffect(() => {
    if (localStorage.getItem('predy.connected') !== null) {
      metaMask.connectEagerly().catch(error => {
        console.log(error)
      })
    }
    setTried(true)
  }, []) // intentionally only running on mount (make sure it's only mounted once :))

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (!tried && isActive) {
      setTried(true)
    }
  }, [tried, isActive])

  return tried
}
