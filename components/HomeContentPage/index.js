import { Box } from '@welcome-ui/box'
import Header from '../Header'
import Filters from '../Filters'
import JobsList from '../JobsList'

import { filterByText } from '../../utils/dataManipulation'
import { useSearch, useGroupBy } from './hooks'

import { DATA } from '../../utils/propTypes'

const HomeContentPage = ({ data }) => {
  const [search, onChangeSearch] = useSearch('')

  const { selectedGroupOpt, groupOptions, onChangeGroup } = useGroupBy()

  const jobs = filterByText(search, data?.jobs)

  return (
    <>
      <Box position="sticky" top={0}>
        <Header />
        <Filters
          search={search}
          onChangeSearch={onChangeSearch}
          selectedGroupOpt={selectedGroupOpt}
          groupOptions={groupOptions}
          onChangeGroup={onChangeGroup}
        />
      </Box>
      <JobsList
        jobs={jobs}
        selectedGroupOpt={selectedGroupOpt}
      />
    </>
  )
}

HomeContentPage.propTypes = {
  data: DATA.isRequired,
}

export default HomeContentPage
