import { string } from 'prop-types'

import { groupJobsBy } from '../../utils/dataManipulation'

import { JOBS } from '../../utils/propTypes'

const GroupedList = ({ jobs, groupBy }) => {
  const data = groupJobsBy(groupBy, jobs)
  console.log('data', data)

  return (
    <div>
      GroupedList
    </div>
  )
}

GroupedList.propTypes = {
  jobs: JOBS.isRequired,
  groupBy: string.isRequired,
}

export default GroupedList
