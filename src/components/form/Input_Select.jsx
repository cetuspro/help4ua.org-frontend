import { InputSelectPure } from './Input_Select.pure'
import { Controller, useFormContext } from 'react-hook-form'

export const InputSelect = ({
  options,
  disabled,
  name,
  placeholder,
  label,
  isClearable,
  required,
  optionFormat,
  ...props
}) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, value, onChange, ...field }, fieldState }) => {
        const { error } = fieldState
        return (
          <InputSelectPure
            innerRef={ref}
            onChange={(data) => onChange(data?.value ?? null)}
            isClearable={isClearable ?? !required}
            {...{ options, value, disabled, placeholder, label, error, required, optionFormat }}
            {...props}
            {...field}
          />
        )
      }}
    />
  )
}
