/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, Grid, Heading, Text } from '@theme-ui/components'
import { MdVisibility, MdModeComment } from 'react-icons/md'

export default function ProposalItem({ action }: any) {
  return (
    <div sx={{ margin: ' 1em 3em' }}>
      <Heading variant="heading.secundary" as="h3" mb={3}>
        Post by {action.creator}
      </Heading>
      <Heading variant="heading.primary" as="h2">
        {action.title}
      </Heading>
      <Grid gap={2} columns={[2]} mt={4} mb={4}>
        <Flex
          sx={{
            alignItems: 'center',
          }}
        >
          <div
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '1.3333em',
            }}
          >
            <MdVisibility />
            <Text variant="detail">105 views</Text>
          </div>
          <div
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '1.3333em',
            }}
          >
            <MdModeComment />
            <Text variant="detail">105 views</Text>
          </div>
        </Flex>
      </Grid>
    </div>
  )
}
