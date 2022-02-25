import useQuery2 from '../../app/hooks/useQuery2'
import { InputSelect } from '@/components/form/Input_Select'
import { useMemo } from 'react'

export const InputAsyncSelect = ({
  queryFn,
  queryKey,
  enabled = true,
  disabled,
  name,
  placeholder,
  label,
  icon,
  transform = ({ id, name }) => ({ value: id, label: name }),
  optionFormat,
  ...props
}) => {
  const { isLoading, data, isSuccess } = useQuery2({
    queryFn,
    queryKey,
  })

  const options = useMemo(
    () => (data && isSuccess ? data.map(transform) : []),
    [isSuccess, transform],
  )

  return (
    <InputSelect
      options={options}
      {...{ name, disabled, placeholder, label, isLoading, icon, optionFormat }}
      {...props}
    />
  )
}
