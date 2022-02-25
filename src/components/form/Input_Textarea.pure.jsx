import { useState } from 'react'

export const InputTextareaPure = ({
  maxContent,
  icon = null,
  className = '',
  label = '',
  placeholder: passedPlaceholder,
  required,
  disabled,
  onChange = () => {},
  onEnter = () => {},
  invalid,
  innerRef,
  value = '',
  inputClassName = '',
  inputGroupClassName = '',
  append,
  error,
  size = 'md',
  ...props
}) => {
  const [currentLength, setCurrentLength] = useState(0)
  // const placeholder = passedPlaceholder ?? `${label ?? ''}${required ? '*' : ''}`

  const handleChange = (e) => {
    setCurrentLength(e.target.value.length)
    onChange(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onEnter(e)
    }
  }

  return (
    <>
      <div className="flex justify-between items-center gap-2">
        {!!label && (
          <label className="inline-block text-gray-800 dark:text-gray-100 text-xs sm:text-sm mb-2">
            {label}
            {required && <span className="text-red-600">*</span>}
          </label>
        )}
        {!!maxContent && (
          <small
            className={`${
              currentLength > maxContent ? 'text-red-600' : ''
            } font-bold text-gray-400 ml-auto`}>
            {currentLength}/{maxContent}
          </small>
        )}
      </div>

      <div className="relative">
        <textarea
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={passedPlaceholder}
          disabled={disabled}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={innerRef}
          value={value ?? ''}
          {...props}
        />
        {error && <div className="small text-red-700">{error?.message}</div>}
      </div>
    </>
  )
}
