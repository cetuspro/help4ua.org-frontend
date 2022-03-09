import BaseFilter, { config, FilterType } from './Filters_BaseFilter'

const ShelterFilter = () => {
  return (
    <BaseFilter
      config={config}
      types={[FilterType.SEARCH_PHRASE, FilterType.ACCOMODATION, FilterType.CITY, FilterType.REGION, 
        FilterType.COUNTRY, FilterType.ACCEPT_SMALL_CHILDREN, FilterType.ACCEPT_PETS]}
    />
  )
}

export default ShelterFilter
