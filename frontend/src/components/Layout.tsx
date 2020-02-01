/** @jsx jsx */
import { jsx } from 'theme-ui'
import { OneOrMoreChildren } from 'types'
import { Flex } from '@theme-ui/components'
import Header from 'components/Header'

export default function Layout({ children }: OneOrMoreChildren) {
  return (
    <div>
      <Header />
      <Flex
        sx={{
          width: '100%',
          flexGrow: 1,
        }}
      >
        {children}
      </Flex>
    </div>
  )
}
