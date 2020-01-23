/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex } from '@theme-ui/components'
import { useLocation } from 'react-router-dom'

import Layout from 'components/Layout'
import Nav from 'components/Nav'
import Discutions from './Discutions'
import Actions from './Actions'

export default function Main() {
  const location = useLocation()

  return (
    <Layout>
      <Flex
        sx={{
          flexDirection: 'column',
        }}
      >
        <Nav />
        {location.pathname === '/' || location.pathname === '/discussions' || '' ? <Discutions /> : <Actions />}
      </Flex>
    </Layout>
  )
}
