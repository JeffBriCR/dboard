/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, Grid } from '@theme-ui/components'

function Tab({ label }: { label: string }) {
  return (
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
      <Tab label="Discussion" />
      <Tab label="Actions" />
    </Grid>
  )
}
