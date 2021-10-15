import {
  shape, arrayOf, string, number,
} from 'prop-types'

export const JOB = shape({
  id: number,
  name: string,
  description: string,
  published_at: string,
  office: shape({ name: string }),
  department: shape({ name: string }),
  contract_type: shape({
    en: string,
  }),
  profile: string,
  websites_urls: arrayOf(shape({
    website_reference: string,
    url: string,
  })),

})

export const JOBS = arrayOf(JOB)

export const DATA = shape({
  jobs: JOBS,
})

export const GROUP_OPT = shape({ label: string, value: string })
