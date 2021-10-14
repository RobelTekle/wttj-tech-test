import Header from '../Header'
import Filters from '../Filters'
import JobsList from '../JobsList'

import { filterByText } from '../../utils/dataManipulation'
import { useSearch, useGroupBy } from './hooks'

import { DATA } from '../../utils/propTypes'

const HomeContentPage = ({ data }) => {
  const [search, onChangeSearch] = useSearch('')

  const { selectedGroupOpt, groupOptions, onChangeGroup } = useGroupBy()

  const d = filterByText(search, data?.jobs)
  console.log(d)

  return (
    <div>
      <>
        <Header />
        <Filters
          search={search}
          onChangeSearch={onChangeSearch}
          selectedGroupOpt={selectedGroupOpt}
          groupOptions={groupOptions}
          onChangeGroup={onChangeGroup}
        />
        <JobsList />
      </>
    </div>
  )
}

HomeContentPage.propTypes = {
  data: DATA.isRequired,
}

export default HomeContentPage
