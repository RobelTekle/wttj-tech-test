import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'

import Header from '../components/Header'

const ErrorPage = () => (
  <>
    <Header />
    <Box p="md" display="flex" alignItems="center" flexDirection="column">
      <Box flex={1} p="md" mt="md">
        <Text
          textAlign="center"
          variant="h3"
          color="danger.200"
        >
          Ooops... it seems this page does not exist.
        </Text>
      </Box>
    </Box>
  </>
)

export default ErrorPage
