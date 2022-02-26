import { useFormContext, Controller } from 'react-hook-form'
import { InputTextPure } from './Input_Text.pure'

export const InputCheckbox = ({label, name, ...props}) => {
  const { control } = useFormContext()
  
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, ...field }, fieldState }) => {
        const { error } = fieldState
        return (
          <Checkbox
            label={label}
            error={error}
            innerRef={ref}
            {...props}
            {...field}
          />
        )
      }}
    />
    
  );
}

const Checkbox = ({ name, value, label, onChange }) => {
  return (
    <div className="flex items-center cursor-pointer p-2" onClick={()=>onChange(!value)}>
      <input
        name={name}
        onChange={onChange}
        type="checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        checked={!!value}
      />
      <label className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </label>
    </div>
  )
}