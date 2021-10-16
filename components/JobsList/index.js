import { Box } from '@welcome-ui/box'

import FlatList from './FlatList'
import GroupedList from './GroupedList'

import { JOBS, GROUP_OPT } from '../../utils/propTypes'

const JobsList = ({ jobs, selectedGroupOpt }) => {
  const isGrouped = !!selectedGroupOpt?.value

  return (
    <Box
      backgroundColor="nude.100"
      display="flex"
      justifyContent="center"
      minHeight="100vh"
    >
      <Box
        maxWidth={1000}
        mt={0}
        mb={0}
        ml="auto"
        mr="auto"
        p="md"
        pb="3xl"
      >
        {
      isGrouped ? (
        <GroupedList jobs={jobs} groupBy={selectedGroupOpt.value} />
      ) : (
        <FlatList jobs={jobs} />
      )
    }
      </Box>
    </Box>
  )
}

JobsList.defaultProps = {
  jobs: [],
}

JobsList.propTypes = {
  jobs: JOBS,
  selectedGroupOpt: GROUP_OPT.isRequired,
}

export default JobsList
