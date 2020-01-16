/** @jsx jsx */
import { jsx } from 'theme-ui'
import { OneOrMoreChildren } from 'types'
import { Flex, Text } from '@theme-ui/components'

export default function Layout({ children }: OneOrMoreChildren) {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        minHeight: '100vh',
        borderBottom: '1em solid teal',
      }}
    >
      <Flex
        sx={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '3em',
          borderBottom: '1px solid teal', // TODO: use color from theme
        }}
      >
        <Text
          sx={{
            color: 'primary',
            fontWeight: 700,
          }}
        >
          dBoard
        </Text>
      </Flex>
      <Flex
        sx={{
          width: '100%',
          flexGrow: 1,
        }}
      >
        {children}
      </Flex>
    </Flex>
  )
}
