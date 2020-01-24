/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { useEffect, useCallback } from 'react'
import { Button } from '@theme-ui/components'
import { useTransit } from '@blockmatic/eosio-hooks'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import useAccountName from 'hooks/useAccountName'

const INSERT_ACCOUNT = gql`
  mutation InsertUser($accountName: String) {
    insert_users(objects: { account_name: $accountName }) {
      affected_rows
    }
  }
`

const handleAccountCreationError = () => {}

export default function LoginNav() {
  const {
    connectScatter,
    disconnectWallet,
    transitState: { wallet },
  } = useTransit()
  const [insertAccount] = useMutation(INSERT_ACCOUNT, { onError: handleAccountCreationError })
  const account_name = useAccountName()

  useEffect(() => {
    account_name &&
      insertAccount({
        variables: { accountName: account_name },
      })
  }, [account_name, insertAccount])

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
        <pre sx={{ color: 'green' }}>{account_name}</pre>

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
