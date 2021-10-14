import { useState, useCallback } from 'react'
import { FILTER_GROUP_OPTIONS } from './constants'

export const useSearch = (initValue = '') => {
  const [search, setSearch] = useState(initValue)

  const onChangeSearch = useCallback(e => {
    const { value } = e.target
    setSearch(value)
  }, [])

  return [search, onChangeSearch]
}

export const useGroupBy = () => {
  const [groupOpt, setGroupOpt] = useState(FILTER_GROUP_OPTIONS[0])

  const onChangeGroup = useCallback(value => {
    if (value !== groupOpt?.value) {
      const newOpt = FILTER_GROUP_OPTIONS.find(opt => opt.value === value)
      if (newOpt) setGroupOpt(newOpt)
    }
  }, [groupOpt?.value])

  return {
    selectedGroupOpt: groupOpt,
    groupOptions: FILTER_GROUP_OPTIONS,
    onChangeGroup,
  }
}
