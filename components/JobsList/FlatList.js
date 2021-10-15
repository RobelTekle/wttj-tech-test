import { Box } from '@welcome-ui/box'
import JobItem from './JobItem'

import { JOBS } from '../../utils/propTypes'

const FlatList = ({ jobs }) => (
  <Box pt="md">
    {
      jobs.map(job => (
        <JobItem key={job.id} job={job} />
      ))
    }
  </Box>
)

FlatList.propTypes = {
  jobs: JOBS.isRequired,
}

export default FlatList
