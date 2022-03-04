import BaseFilter, { config, FilterType } from './Filters_BaseFilter'

const TransportFilter = () => (
  <BaseFilter
    config={config}
    types={[FilterType.SEARCH_PHRASE, FilterType.ACCOMODATION, FilterType.CITY]}
  />
)

export default TransportFilter
