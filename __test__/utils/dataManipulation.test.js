import data from '../../___mock___/jobs.json'
import { filterByText, groupJobsBy } from '../../utils/dataManipulation'
import { SECTOR, LOCATION } from '../../utils/constants'

describe('Data manipulation helpers', () => {
  it('filterByText: search a job by name', () => {
    const job = data.jobs[0]
    const filteredJobs = filterByText(job.name, data.jobs)

    expect(filteredJobs.find(j => j.name === job.name)).toBeTruthy()
  })

  it('filterByText: with empty string should return all jobs', () => {
    const filteredJobs = filterByText('', data.jobs)
    expect(filteredJobs.length === data.jobs.length).toBeTruthy()
  })

  it('filterByText: with no jobs should return an empty array', () => {
    const filteredJobs = filterByText('', null)

    expect(Array.isArray(filteredJobs)).toBeTruthy()
    expect(filteredJobs.length === 0).toBeTruthy()
  })

  // eslint-disable-next-line max-len
  it('groupJobsBy: with invalid group value should return an empty array', () => {
    const groupedJobs = groupJobsBy('some_ramdom_string', data.jobs)
    expect(Array.isArray(groupedJobs)).toBeTruthy()
    expect(groupedJobs.length === 0).toBeTruthy()
  })

  it('groupJobsBy: if no jobs should return an empty array', () => {
    const grouedWithNullJobs = groupJobsBy('', null)
    expect(Array.isArray(grouedWithNullJobs)).toBeTruthy()
    expect(grouedWithNullJobs.length === 0).toBeTruthy()

    const grouedWithEmptyJobs = groupJobsBy('', null)
    expect(Array.isArray(grouedWithEmptyJobs)).toBeTruthy()
    expect(grouedWithEmptyJobs.length === 0).toBeTruthy()
  })

  // eslint-disable-next-line max-len
  it('groupJobsBy: with SECTOR or LOCATION value should return array of array', () => {
    const groupedBySector = groupJobsBy(SECTOR, data.jobs)
    expect(Array.isArray(groupedBySector)).toBeTruthy()
    expect(Array.isArray(groupedBySector[0])).toBeTruthy()

    const groupedByLocation = groupJobsBy(LOCATION, data.jobs)
    expect(Array.isArray(groupedByLocation)).toBeTruthy()
    expect(Array.isArray(groupedByLocation[0])).toBeTruthy()
  })
})
