/* eslint-disable react/jsx-props-no-spreading */
import { Box } from '@welcome-ui/box'
import { InputText } from '@welcome-ui/input-text'
import { SearchIcon } from '@welcome-ui/icons.search'
import { Text } from '@welcome-ui/text'
import { Select } from '@welcome-ui/select'

import {
  func, string, shape, arrayOf,
} from 'prop-types'

const Filters = ({
  onChangeSearch, search, selectedGroupOpt, groupOptions, onChangeGroup,
}) => (
  <Box p="xl" backgroundColor="light.800">
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Text variant="h4">Our Job Opportunities</Text>
    </Box>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      p="md"
      flexWrap="wrap"
      maxWidth={500}
      mt={0}
      mb={0}
      ml="auto"
      mr="auto"
    >
      <Box flexGrow={1}>
        <InputText
          placeholder="Your dream job?"
          icon={<SearchIcon />}
          onChange={onChangeSearch}
          value={search}
        />
      </Box>
      <Box flexGrow={1}>
        <Select
          value={`Group by : ${selectedGroupOpt.label}`}
          placeholder="Group By"
          type="radio"
          options={groupOptions}
          onChange={onChangeGroup}
        />
      </Box>
    </Box>
  </Box>
)

Filters.propTypes = {
  onChangeSearch: func.isRequired,
  search: string.isRequired,
  selectedGroupOpt: shape({ label: string, value: string }).isRequired,
  groupOptions: arrayOf(shape({ label: string, value: string })).isRequired,
  onChangeGroup: func.isRequired,
}

export default Filters
