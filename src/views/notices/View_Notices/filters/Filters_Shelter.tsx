import BaseFilter, { config, FilterType } from './Filters_BaseFilter'

const ShelterFilter = () => (
  <BaseFilter
    config={config}
    types={[FilterType.SEARCH_PHRASE, FilterType.ACCOMODATION, FilterType.CITY, FilterType.REGION, FilterType.COUNTRY]}
  />
)

export default ShelterFilter
