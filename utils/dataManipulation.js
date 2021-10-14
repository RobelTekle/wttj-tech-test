export const filterByText = (dirtyString, jobs) => {
  const str = (dirtyString || '').trim().toLowerCase()

  if (!str) return jobs
  if (!jobs || jobs.length === 0) return []

  return jobs.filter(job => job?.name.toLowerCase().includes(str))
}
