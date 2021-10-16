import { SECTOR, LOCATION } from './constants'

export const filterByText = (dirtyString, jobs) => {
  const str = (dirtyString || '').trim().toLowerCase()

  if (!str) return jobs
  if (!jobs || jobs.length === 0) return []

  return jobs.filter(job => job?.name.toLowerCase().includes(str))
}

export const groupJobsBy = (groupValue, jobs) => {
  if (![SECTOR, LOCATION].includes(groupValue)) {
    console.error(
      // eslint-disable-next-line max-len
      `Invalid "groupValue" argument supplied to "groupJobsBy" function: ${groupValue}`,
    )
  }

  if (jobs.length === 0) return []

  const map = jobs.reduce((acc, job) => {
    const key = job[groupValue].name
    const prevValue = acc[key] || []

    return {
      ...acc,
      [key]: [...prevValue, job],
    }
  }, {})

  return Object.entries(map)
}

export const getJobLink = job => job
  ?.websites_urls
  ?.find(({ website_reference: ref }) => ref === 'wttj_fr')
  ?.url || null
