import Select from 'react-select'
import { customStyles, findOption } from '@/app/utils/form/select'
import { FormFieldError } from './HookFormFieldError'

export const InputSelectPure = ({
  icon: Icon,
  label,
  isLabelVisible = true,
  placeholder: passedPlaceholder,
  required,
  value,
  onChange,
  innerRef,
  disabled,
  optionFormat,
  name,
  options,
  error,
  className = '',
  disableDefaultStyles,
  ...props
}) => {
  const placeholder = `${passedPlaceholder ?? label ?? ''}${required ? '*' : ''}`

  return (
    <div className={`flex flex-col text-left custom-select ${className}`}>
      {(label || required) && isLabelVisible && (
        <label className="inline-block text-gray-800 dark:text-gray-100 text-xs sm:text-sm mb-2">
          {label}
          {required && <span className="text-red-600">*</span>}
        </label>
      )}
      <div className="relative">
        <Select
          menuPortalTarget={document.body}
          styles={customStyles({ hasIcon: !!Icon })}
          value={value === null ? null : findOption(value?.toString(), options)}
          // value={value}
          options={options}
          formatOptionLabel={optionFormat}
          placeholder={placeholder}
          onChange={onChange}
          isDisabled={disabled}
          // menuIsOpen
          {...props}
          classNamePrefix="react-select"
        />
        {Icon && (
          <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
            <Icon size={20} color="currentColor" />
          </div>
        )}

        <FormFieldError error={error} />
        <input type="hidden" name={name} ref={innerRef} />
      </div>
    </div>
  )
}
