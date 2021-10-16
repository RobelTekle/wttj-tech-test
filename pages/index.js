import { bool } from 'prop-types'
import { DATA } from '../utils/propTypes'

import HomeErrorPage from '../components/HomeErrorPage'
import HomeContentPage from '../components/HomeContentPage'

import HomePageMetadata from '../components/HomePageMetadata'

export default function Home({ data, error }) {
  if (error) {
    return (
      <>
        <HomePageMetadata />
        <HomeErrorPage />
      </>
    )
  }

  return (
    <>
      <HomePageMetadata />
      <HomeContentPage data={data} />
    </>
  )
}

Home.defaultProps = {
  data: null,
}

Home.propTypes = {
  data: DATA,
  error: bool.isRequired,
}

export const getServerSideProps = async () => {
  try {
    const res = await fetch(process.env.API_ENDPOINT)
    const data = await res.json()

    if (res.ok && data) {
      return {
        props: { data, error: false },
      }
    }

    throw new Error('No data returned')
  } catch (error) {
    console.error(error)

    return {
      props: { data: null, error: true },
    }
  }
}
