import { memo, useEffect, useState } from 'react'
import AsyncSelect from 'react-select/async'
import { Controller, useFormContext } from 'react-hook-form'
import { FormFieldError } from './HookFormFieldError'
import { getLocation } from '@/app/CRUD/region/getLocation'
import { customStyles } from '@/app/utils/form/select'

const InputLocationAutocomplete = ({
  label,
  required,
  className,
  name,
  isLabelVisible = true,
  icon: Icon,
  ...props
}) => {
  const [location, setLocation] = useState(null)
  const { control, getValues, resetField } = useFormContext()
  const { countryId } = getValues()

  const loadOptions = async (inputValue, callback) => {
    if (inputValue.length >= 3) {
      const data = await getLocation(inputValue, countryId)
      const preparedLocations = data
        .map(({ name, ...rest }) => ({
          value: name,
          label: name,
          name,
          countryId,
          ...rest,
        }))
        .filter((item) => item.latitude && item.longitude)

      callback(preparedLocations)
    }
  }

  useEffect(() => {
    control.register(name)
  }, [])

  useEffect(() => {
    resetField(name)
    setLocation(null)
  }, [countryId])

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ...field }, fieldState: { error } }) => (
        <div className={`relative my-1 text-left custom-select ${className}`}>
          {(label || required) && isLabelVisible && (
            <label className="inline-block text-gray-800 dark:text-gray-100 text-xs sm:text-sm mb-2">
              {label}
              {required && <span className="text-red-600">*</span>}
            </label>
          )}
          <div className="relative pt-1">
            <AsyncSelect
              classNamePrefix="react-select"
              styles={customStyles({ hasIcon: !!Icon })}
              loadOptions={loadOptions}
              onChange={(data) => {
                onChange(data)
                setLocation(data)
              }}
              {...props}
              {...field}
              value={location}
            />

            {Icon && (
              <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
                <Icon size={20} color="currentColor" />
              </div>
            )}

            <FormFieldError error={error} />
          </div>
        </div>
      )}
    />
  )
}

export default memo(InputLocationAutocomplete)
