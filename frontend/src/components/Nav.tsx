/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, Grid } from '@theme-ui/components'
import { Link } from 'react-router-dom'

function Tab({ label }: { label: string }) {
  return (
    <Link to={`/${label.toLowerCase()}`}>
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          ':hover': {
            cursor: 'pointer',
          },
        }}
      >
        {label}
      </Flex>
    </Link>
  )
}

export default function Nav() {
  return (
    <Grid
      columns={[2, '1fr 1fr']}
      sx={{
        height: '3em',
        borderBottom: '1px solid teal',
        width: '100vw',
      }}
    >
      <Tab label="Discussions" />
      <Tab label="Actions" />
    </Grid>
  )
}
