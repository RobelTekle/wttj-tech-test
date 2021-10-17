import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'

import Header from '../Header'

const ErrorPage = () => (
  <>
    <Header />
    <Box p="md" display="flex" alignItems="center" flexDirection="column">
      <Box flex={1} p="md">
        <Text
          textAlign="center"
          variant="h3"
          color="danger.200"
          data-testid="home-error-message"
        >
          Ooops... an error occurred
        </Text>
        <Text
          textAlign="center"
          variant="h4"
          color="danger.200"
        >
          Please try again
        </Text>
      </Box>
    </Box>
  </>
)

export default ErrorPage
