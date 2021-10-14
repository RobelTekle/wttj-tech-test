import Header from '../Header'
import Filter from '../Filter'
import JobsList from '../JobsList'

import { filterByText } from '../../utils/dataManipulation'
import { useSearch } from './hooks'

import { DATA } from '../../utils/propTypes'

const HomeContentPage = ({ data }) => {
  const [search, onChangeSearch] = useSearch('')

  const d = filterByText(search, data?.jobs)
  console.log(d)

  return (
    <div>
      <>
        <Header />
        <Filter value={search} onChange={onChangeSearch} />
        <JobsList />
      </>
    </div>
  )
}

HomeContentPage.propTypes = {
  data: DATA.isRequired,
}

export default HomeContentPage
