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
  hidden,
  disableDefaultStyles,
  ...props
}) => {
  const placeholder = `${passedPlaceholder ?? label ?? ''}${required ? '*' : ''}`

  return (
    <div className={`relative my-1 text-left custom-select ${className} ${hidden ? 'hidden' : ''}`}>
      {(label || required) && isLabelVisible && (
        <label className="inline-block text-gray-800 dark:text-gray-100 text-xs sm:text-sm mb-2">
          {label}
          {required && <span className="text-red-600">*</span>}
        </label>
      )}
      <div className="relative pt-1">
        <Select
          menuPortalTarget={document.body}
          styles={customStyles({ hasIcon: !!Icon })}
          defaultValue
          value={findOption(value?.toString(), options)}
          options={options}
          formatOptionLabel={optionFormat}
          placeholder={placeholder}
          onChange={onChange}
          isDisabled={disabled}
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
