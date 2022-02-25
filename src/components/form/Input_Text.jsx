import { Controller, useFormContext } from 'react-hook-form'
import { InputTextPure } from './Input_Text.pure'

export const InputText = ({ name, placeholder, label, required, ...props }) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, ...field }, fieldState }) => {
        const { error } = fieldState
        return (
          <InputTextPure
            placeholder={placeholder}
            label={label}
            error={error}
            innerRef={ref}
            required={required}
            {...props}
            {...field}
          />
        )
      }}
    />
  )
}
