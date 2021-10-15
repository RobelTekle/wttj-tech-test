import { Text } from '@welcome-ui/text'
import { string } from 'prop-types'
import { Box } from '@welcome-ui/box'

const GroupName = ({ name }) => (
  <Box pt="xl" pb="xl">
    <Text variant="h4">{name}</Text>
  </Box>
)

GroupName.propTypes = {
  name: string.isRequired,
}

export default GroupName
