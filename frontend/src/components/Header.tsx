/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Grid, Text } from '@theme-ui/components'
import Login from 'components/Login'
import Nav from 'components/Nav'

export default function Header() {
  return (
    <header
      sx={{
        bg: 'header',
        p: 4,
      }}
    >
      <Grid
        sx={{
          gridGap: 4,
          gridTemplateColumns: ['auto', '1fr 256px'],
          m: 4,
        }}
      >
        <Text
          sx={{
            color: 'muted',
            fontWeight: 'heading',
            fontSize: 5,
            fontFamily: 'heading',
          }}
        >
          dBoard
        </Text>
        <Login />
      </Grid>
      <Nav />
    </header>
  )
}
