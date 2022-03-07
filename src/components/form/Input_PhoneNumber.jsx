import { useEffect } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import PI from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { languages } from '../common/LanguageSwitcher'
import { FormFieldError } from './HookFormFieldError'

const PhoneInput = PI.default ? PI.default : PI

const FlagImg = ({ lng, size }) => {
  const languageObj = languages.find((i) => i.lng.toLowerCase() == lng.toLowerCase())
  return (
    <img
      className="flex-1 border"
      src={languageObj.flag}
      alt={languageObj.lng}
      height={size}
      width={size}
    />
  )
}

const InputPhoneNumber = ({
  disabled = false,
  label,
  name,
  required,
  id = 'phone-number-input',
  placeholder = '+48 123 456 789',
  onChange: handleChange,
  ...props
}) => {
  const { control } = useFormContext()

  useEffect(() => {
    disabled ? control.unregister(name) : control.register(name)
  }, [disabled])

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, value, onChange, ...field }, fieldState }) => {
        const { error } = fieldState

        return (
          <div className={`relative my-1 text-left custom-select ${props.className}`}>
            {(label || required) && (
              <label className="inline-block text-gray-800 dark:text-gray-100 text-xs sm:text-sm mb-3">
                {label}
                {required && <span className="text-red-600">*</span>}
              </label>
            )}
            <div className={'flex absolute right-0 top-0 '}>
              <div onClick={() => onChange(`+48`)} className="m-2 cursor-pointer">
                <FlagImg lng="pl" size={20} />
              </div>
              <div onClick={() => onChange(`+380`)} className="m-2 cursor-pointer">
                <FlagImg lng="ua" size={20} />
              </div>
            </div>

            <PhoneInput
              onChange={(data) => {
                const phoneNumber = `+${data}`
                handleChange && handleChange(phoneNumber)
                onChange(phoneNumber ?? null)
              }}
              value={value}
              containerStyle={{
                height: 42,
              }}
              inputClass="!bg-gray-50 !w-full !rounded-lg !h-full"
              buttonClass="!rounded-tl-lg !rounded-bl-lg"
              placeholder={placeholder}
              id={id}
              inputProps={{
                name,
                required,
              }}
              {...props}
              {...field}
            />
            <FormFieldError error={error} />
            <input type="hidden" name={name} ref={ref} />
          </div>
        )
      }}
    />
  )
}

export default InputPhoneNumber
