/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, Grid, Button } from '@theme-ui/components'
import { Link } from 'react-router-dom'

function Tab({ label }: { label: string }) {
  return (
    <Flex
      as="nav"
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button as={Link} to={`/${label.toLowerCase()}`} variant="secondary">
        {label}
      </Button>
    </Flex>
  )
}

export default function Nav() {
  return (
    <Grid
      columns={[3, '1fr 1fr']}
      bg="header"
      sx={{
        height: '3em',
      }}
    >
      <Tab label="Proposals" />
      <Tab label="ApprovedRejected" />
      <Tab label="Voting" />
    </Grid>
  )
}
