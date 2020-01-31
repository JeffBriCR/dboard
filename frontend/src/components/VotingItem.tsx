/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, Grid, Heading, Text } from '@theme-ui/components'
import { MdThumbUp, MdThumbDown, MdModeComment } from 'react-icons/md'

export default function VotingItem({ action }: any) {
  return (
    <div sx={{ margin: ' 1em 3em' }}>
      <Flex>
        <Heading variant="heading.secundary" as="h3" mb={3} mr={4}>
          Post by {action.creator}
        </Heading>
        <Heading variant="heading.details" as="h3" mb={3}>
          {/* TODO call momment.js to grad days until ends */}
          Ends on by {action.voting_ends}
        </Heading>
      </Flex>
      <Heading variant="heading.primary" as="h2">
        {action.title}
      </Heading>
      <Grid gap={2} columns={[3]} mt={4} mb={4}>
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
            <MdThumbUp style={{ color: '#00bfa5' }} />
            <Text variant="detail">10</Text>
          </div>
          <div
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '1.3333em',
            }}
          >
            <MdThumbDown style={{ color: '#ff0070' }} />
            <Text variant="detail">0</Text>
          </div>
          <div
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '1.3333em',
            }}
          >
            <MdModeComment />
            <Text variant="detail">105 replies</Text>
          </div>
        </Flex>
      </Grid>
    </div>
  )
}
