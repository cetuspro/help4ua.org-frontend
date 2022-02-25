/* eslint-disable react/display-name */
import { Controller, useFormContext } from 'react-hook-form'
import { InputTextPure } from './Input_Text.pure'
import InputMask from 'react-input-mask'
import { forwardRef, useMemo } from 'react'

const Input = forwardRef(({ length, ...props }, ref) => {
  const mask = useMemo(() => {
    return new Array(length).fill('hh-hhh').join('-')
  }, [length])

  return (
    <InputMask
      inputRef={ref}
      {...props}
      formatChars={{ h: '[0-9]' }}
      // maskChar="•"
      mask={mask}
    />
  )
})

export const InputPostCode = ({ name, placeholder, label, length = 1, ...props }) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, ...field }, fieldState }) => {
        const { error } = fieldState
        return (
          <InputTextPure
            innerRef={ref}
            component={Input}
            {...{ name, placeholder, label, error, length }}
            transformValue={(value) => (value ?? '').toUpperCase()}
            {...props}
            {...field}
          />
        )
      }}
    />
  )
}
