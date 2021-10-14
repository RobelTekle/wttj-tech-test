import {
  shape, arrayOf, string, number,
} from 'prop-types'

export const DATA = shape({
  jobs: arrayOf(shape({
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

  })),
})
