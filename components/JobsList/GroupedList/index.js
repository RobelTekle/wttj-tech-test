import { string } from 'prop-types'

import GroupName from './GroupName'

import JobItem from '../JobItem'

import { groupJobsBy } from '../../../utils/dataManipulation'
import { JOBS } from '../../../utils/propTypes'

const GroupedList = ({ jobs, groupBy }) => {
  const data = groupJobsBy(groupBy, jobs)

  return (
    <div data-testid="grouped-job-list-container">
      {
        data.map(([groupName, jobList]) => (
          <div key={groupName}>
            <GroupName name={groupName} />
            {
              jobList.map(job => (
                <JobItem key={job.id} job={job} />
              ))
            }
          </div>
        ))
      }
    </div>
  )
}

GroupedList.propTypes = {
  jobs: JOBS.isRequired,
  groupBy: string.isRequired,
}

export default GroupedList
