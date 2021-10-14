import { useState, useCallback } from 'react'

export const useSearch = (initValue = '') => {
  const [search, setSearch] = useState(initValue)

  const onChangeSearch = useCallback(e => {
    const { value } = e.target
    setSearch(value)
  }, [])

  return [search, onChangeSearch]
}
