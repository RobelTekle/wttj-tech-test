import Header from '../Header'
import Filter from '../Filter'
import JobsList from '../JobsList'

import { DATA } from '../../utils/propTypes'

const HomeContentPage = ({ data }) => (
  <div>
    <>
      <Header />
      <Filter />
      <JobsList />
    </>
  </div>
)

HomeContentPage.propTypes = {
  data: DATA.isRequired,
}

export default HomeContentPage
