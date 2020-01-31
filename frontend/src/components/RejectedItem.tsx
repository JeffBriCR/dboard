/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Badge, Flex, Grid, Heading } from '@theme-ui/components'

export default function RejectedItem({ action }: any) {
  return (
    <div sx={{ margin: ' 1em 3em' }}>
      <Heading variant="heading.secundary" as="h3" mb={3}>
        Post by {action.creator}
      </Heading>
      <Heading variant="heading.primary" as="h2">
        {action.title}
      </Heading>
      <Grid gap={2} columns={[3]} mt={4} mb={4}>
        <Flex>
          <Badge variant="fail">{action.state}</Badge>
        </Flex>
        <Flex>
          <Badge variant="outline">{action.budget}</Badge>
        </Flex>
        <Flex>
          <Badge variant="outline">{action.kpi}</Badge>
        </Flex>
      </Grid>
    </div>
  )
}
