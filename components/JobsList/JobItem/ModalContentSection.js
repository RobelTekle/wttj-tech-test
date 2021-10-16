import { string } from 'prop-types'

import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { AugmentedText } from './styles'

const ModalContentSection = ({ title, content }) => (
  <Box pb="md" pt="md">
    <Box pb="sm">
      <Text variant="h4">{title}</Text>
    </Box>
    <AugmentedText
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </Box>
)

ModalContentSection.defaultProps = {
  content: '',
}

ModalContentSection.propTypes = {
  title: string.isRequired,
  content: string,
}

export default ModalContentSection
