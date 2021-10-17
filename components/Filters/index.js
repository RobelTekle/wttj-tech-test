/* eslint-disable react/jsx-props-no-spreading */
import { Box } from '@welcome-ui/box'
import { InputText } from '@welcome-ui/input-text'
import { SearchIcon } from '@welcome-ui/icons.search'
import { Text } from '@welcome-ui/text'
import { Select } from '@welcome-ui/select'

import { func, string, arrayOf } from 'prop-types'
import { GROUP_OPT } from '../../utils/propTypes'

const Filters = ({
  search,
  onChangeSearch,
  selectedGroupOpt,
  groupOptions,
  onChangeGroup,
}) => (
  <Box p="xl" backgroundColor="nude.200">
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Text
        data-testid="home-page-title"
        variant="h4"
      >
        Our Job Opportunities

      </Text>
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
          data-testid="job-search-input"
        />
      </Box>
      <Box flexGrow={1}>
        <Select
          id="group-jobs-by"
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
  search: string.isRequired,
  onChangeSearch: func.isRequired,
  selectedGroupOpt: GROUP_OPT.isRequired,
  groupOptions: arrayOf(GROUP_OPT).isRequired,
  onChangeGroup: func.isRequired,
}

export default Filters
