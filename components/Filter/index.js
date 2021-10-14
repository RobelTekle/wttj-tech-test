import { Box } from '@welcome-ui/box'
import { InputText } from '@welcome-ui/input-text'
import { SearchIcon } from '@welcome-ui/icons.search'
import { Text } from '@welcome-ui/text'

import { func, string } from 'prop-types'

const Filter = ({ onChange, value }) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    p="xl"
    backgroundColor="light.800"
  >
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text variant="h4">Our Job Opportunities</Text>
      </Box>
      <Box
        // display="flex"
        justifyContent="center"
        alignItems="center"
        p="md"
      >
        <InputText
          placeholder="Your dream job?"
          icon={<SearchIcon />}
          onChange={onChange}
          value={value}
        />
      </Box>
    </div>
  </Box>
)

Filter.propTypes = {
  onChange: func.isRequired,
  value: string.isRequired,
}

export default Filter
