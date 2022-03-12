import { memo, useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import AsyncSelect from 'react-select/async'
import { Controller, useFormContext } from 'react-hook-form'
import { FormFieldError } from './HookFormFieldError'
import { getLocation } from '@/app/CRUD/region/getLocation'
import { customStyles } from '@/app/utils/form/select'
import prepareLocationList from '@/app/utils/form/prepareLocationList'

const LOCATION_FIELDS = ['latitude', 'longitude', 'cityId', 'cityName', 'postalCodeId']

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
  const { control, getValues, resetField, setValue } = useFormContext()
  const { countryId } = getValues()

  const loadOptions = useDebouncedCallback((inputValue, callback) => {
    if (inputValue.length >= 3) {
      getLocation(inputValue, countryId).then((data) => {
        callback(prepareLocationList(data))
      })
    }
  }, 1000)

  useEffect(() => {
    LOCATION_FIELDS.forEach((field) => {
      control.register(field)
    })
  }, [])

  useEffect(() => {
    LOCATION_FIELDS.forEach((field) => {
      resetField(field)
    })

    resetField(name)
    setLocation(null)
  }, [countryId])

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ...field }, fieldState: { error } }) => {
        return (
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

                  if (data) {
                    LOCATION_FIELDS.forEach((field) => {
                      setValue(field, data[field])
                    })
                  }
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
        )
      }}
    />
  )
}

export default memo(InputLocationAutocomplete)
