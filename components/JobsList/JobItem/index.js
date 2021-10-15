import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { ContractIcon } from '@welcome-ui/icons.contract'
import { LocationIcon } from '@welcome-ui/icons.location'
import { DateIcon } from '@welcome-ui/icons.date'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import { InfoList, InfoListItem } from './styles'

import { JOB } from '../../../utils/propTypes'

const JobItem = ({ job }) => (
  <Box
    backgroundColor="light.900"
    padding={{ xs: 'sm', md: 'lg' }}
    mb="lg"
    borderRadius="md"
    cursor="pointer"
    maxWidth={500}
    minHeight={90}
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
  >
    <Text variant="h5">{job.name}</Text>
    <Box pt="md">
      <InfoList>
        <InfoListItem>
          <Box mr="xs" display="flex">
            <ContractIcon />
          </Box>
          <Text variant="body2">{job.contract_type.en}</Text>
        </InfoListItem>
        <InfoListItem>
          <Box mr="xs" display="flex">
            <LocationIcon />
          </Box>
          <Text variant="body2">{job.office.name}</Text>
        </InfoListItem>
        <InfoListItem>
          <Box mr="xs" display="flex">
            <DateIcon />
          </Box>
          <Text variant="body2">
            {formatDistanceToNow(
              new Date(job.published_at),
            )}

          </Text>
        </InfoListItem>
      </InfoList>
    </Box>
  </Box>
)

JobItem.propTypes = {
  job: JOB.isRequired,
}

export default JobItem
