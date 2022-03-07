import { createContext, useContext, useEffect, useState } from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'
import qs from 'qs'

export const FilterContext = createContext([{}, undefined])

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

const paramsToFilters = (params, search) => {
  const parsed = qs.parse(search, { ignoreQueryPrefix: true })

  return params.reduce(
    (acc, param) => ({
      ...acc,
      [param]: parsed?.[param] ?? undefined,
    }),
    {},
  )
}

export const FilterProvider = ({ children, params = [], initial = {} }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { search } = useLocation()
  const [filters, _setFilters] = useState({
    ...initial,
    ...paramsToFilters(params, search),
  })

  // if the url search params update - put relevant params in the state
  useEffect(() => {
    _setFilters((filters) => ({
      ...filters,
      ...paramsToFilters(params, search),
    }))
  }, [search])

  const setFilters = (newFilters = {}) => {
    const newSearch = new URLSearchParams(search)
    let pathHasChanged = false

    const updatedFilters = {
      ...filters,
      ...newFilters,
    }

    // update the url search with relevant filter values
    for (const param of params) {
      if (updatedFilters?.[param] == null || updatedFilters?.[param] === '') {
        if (!newSearch.has(param)) continue
        newSearch.delete(param)
        pathHasChanged = true
      } else {
        newSearch.set(param, updatedFilters[param])
        pathHasChanged = true
      }
    }
    if (pathHasChanged) setSearchParams(newSearch)

    _setFilters(updatedFilters)
  }

  return (
    <FilterContext.Provider value={[filters, setFilters, params]}>
      {children}
    </FilterContext.Provider>
  )
}

export const withFilters = (WrappedComponent, { params = [], initial = {} } = {}) => {
  const Component = (props) => (
    <FilterProvider {...{ params, initial }}>
      <WrappedComponent {...props} />
    </FilterProvider>
  )
  Component.displayName = `withFilters(${getDisplayName(WrappedComponent)})`
  return Component
}

export const useFilters = () => useContext(FilterContext)
