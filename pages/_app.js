/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { createTheme, WuiProvider } from '@welcome-ui/core'
import { colors } from '../styles/colors'

const theme = createTheme({
  colors,
})

function MyApp({ Component, pageProps }) {
  return (
    <WuiProvider theme={theme} useReset>
      <Component {...pageProps} />
    </WuiProvider>
  )
}

export default MyApp
