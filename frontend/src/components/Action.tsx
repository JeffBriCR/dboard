/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Grid, Heading, Badge } from '@theme-ui/components'

export default function Action({ action }: any) {
  return (
    <div sx={{ margin: ' 1em 3em' }}>
      <Heading variant="heading.secundary" as="h3" mb={3}>
        Post by {action.creator}
      </Heading>
      <Heading variant="heading.primary" as="h2">
        {action.title}
      </Heading>
      <Grid gap={2} columns={[3]} mt={4} mb={4}>
        <div>
          Status <Badge variant="primary"> {action.state}</Badge>
        </div>
        <div>
          budget <Badge variant="outline">{action.budget}</Badge>
        </div>
        <div>
          kpi <Badge variant="outline">{action.kpi}</Badge>
        </div>
      </Grid>
    </div>
  )
}
