export const InputTextPure = ({
  icon: Icon = null,
  label = '',
  isLabelVisible = true,
  placeholder: passedPlaceholder,
  required,
  disabled,
  onChange = () => {},
  onEnter = () => {},
  invalid,
  innerRef,
  value = '',
  error,
  className = '',
  transformValue = (value) => value,
  component: Component = 'input',
  ...props
}) => {
  const placeholder = passedPlaceholder ?? `${label ?? ''}`

  const handleChange = (e) => {
    onChange(transformValue(e?.target?.value))
  }

  const handleKeyDown = (e) => {
    if (e?.key === 'Enter') {
      onEnter(e)
    }
  }

  return (
    <div className={`relative my-1 ${className}`}>
      {!!label && isLabelVisible && (
        <label className="inline-block text-gray-800 dark:text-gray-100 text-xs sm:text-sm mb-2">
          {label}
          {required && <span className="text-red-600">*</span>}
        </label>
      )}
      <div className="mt-1 relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <Icon color="currentColor" size={20} />
          </div>
        )}
        <Component
          className={`${
            error
              ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 rounded-lg focus:ring-red-500 focus:border-red-500'
              : 'bg-gray-50 border border-gray-300 text-gray-900 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          } sm:text-sm rounded-lg block w-full p-2.5 ${Icon ? 'pl-10' : ''}`}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={innerRef}
          value={value ?? ''}
          {...props}
        />
      </div>
      {error && (
        <div className="text-sm absolute top-full left-0 text-red-800">{error?.message}</div>
      )}
    </div>
  )
}
