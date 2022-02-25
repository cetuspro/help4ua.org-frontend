import { Controller, useFormContext } from "react-hook-form";
import { InputTextareaPure } from "./Input_Textarea.pure";

export const InputTextarea = ({ name, placeholder, label, ...props }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, ...field }, fieldState }) => {
        const { error } = fieldState;
        return (
          <InputTextareaPure
            placeholder={placeholder}
            label={label}
            error={error}
            innerRef={ref}
            {...props}
            {...field}
          />
        );
      }}
    />
  );
};
