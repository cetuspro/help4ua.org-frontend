import { useEffect} from 'react'
import { InputSelectPure } from './Input_Select.pure'
import { Controller, useFormContext } from 'react-hook-form'

export const InputSelect = ({
  options,
  disabled = false,
  name,
  placeholder,
  label,
  isClearable,
  required,
  optionFormat,
  hidden = false,
  onChange: handleChange,
  ...props
}) => {
  const { control } = useFormContext()


useEffect(() => {
  disabled ? control.unregister(name) : control.register(name)
},[disabled])

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, value, onChange, ...field }, fieldState }) => {
        const { error } = fieldState
       
        return (
          <InputSelectPure
            innerRef={ref}
            onChange={(data) => {handleChange && handleChange(data); onChange(data?.value ?? null)}}
            isClearable={isClearable ?? !required}
            {...{ options, value, disabled, placeholder, label, error, required, optionFormat, hidden }}
            {...props}
            {...field}
          />
        )
      }}
    />
  )
}
