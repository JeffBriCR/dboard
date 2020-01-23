/** @jsx jsx */
import { useCallback } from 'react'
import { jsx, Flex } from 'theme-ui'
import { Button } from '@theme-ui/components'
import { useTransitState, useTransit } from '@blockmatic/eosio-hooks'

export default function LoginNav() {
  const { wallet } = useTransitState()
  const { connectScatter, disconnectWallet } = useTransit()

  const handleConnectScatter = useCallback(async () => {
    try {
      await connectScatter()
    } catch (err) {
      /* eslint-disable */
      console.log('catched', err)
      alert('Cannot connect to Scatter')
      /* eslint-enable */
    }
  }, [connectScatter])

  return (
    <div>
      <Flex
        sx={{
          justifyContent: 'flex-end',
        }}
      >
        {wallet?.state.connected ? (
          <Button onClick={disconnectWallet}>Disconnect Scatter</Button>
        ) : (
          <Button mr={2} onClick={handleConnectScatter}>
            Login with Scatter
          </Button>
        )}
      </Flex>
    </div>
  )
}
