import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { filterObject } from '../utils/filterObject'
import { useFilters } from '../context/queries/Filters'

export const useFilterForm = ({ schema }) => {
  const [filters, setFilters] = useFilters()

  const defaultValues = schema.default()
  const relevant = Object.keys(defaultValues)

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      ...defaultValues,
      ...filterObject(filters, ([key, value]) => value != null && relevant.includes(key)),
    },
  })

  const handleSubmit = methods.handleSubmit((data) => setFilters(data))

  return { methods, handleSubmit }
}
