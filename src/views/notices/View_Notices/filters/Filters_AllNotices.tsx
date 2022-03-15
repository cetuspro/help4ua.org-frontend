import BaseFilter, { config, FilterType } from './Filters_BaseFilter'

const AllNoticesFilter = () => (
  <BaseFilter config={config} types={[FilterType.SEARCH_PHRASE, FilterType.NOTICE_TYPE, FilterType.CITY, FilterType.COUNTRY, FilterType.ACCOMODATION]} />
)

export default AllNoticesFilter
